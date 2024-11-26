from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from portfoliowebsite.models import Base
from portfoliowebsite.crud import create_user, get_user_by_email
from portfoliowebsite.schemas import UserCreate
from sqlalchemy.exc import IntegrityError

# Database setup for testing
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create the tables in the test database
Base.metadata.create_all(bind=engine)

def get_test_db():
    """Generates a new test session for each test"""
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

def test_create_user():
    # Setup a new database session
    db = next(get_test_db())
    
    # Test data
    user_data = UserCreate(name="Test User", email="test@example.com", password="password123")
    
    # Create a user
    user = create_user(db, user=user_data)
    
    # Assertions
    assert user.email == "test@example.com"
    assert user.name == "Test User"
    
    # Cleanup
    db.rollback()  # Ensure any changes are rolled back after the test

def test_create_user_with_duplicate_email():
    # Setup a new database session
    db = next(get_test_db())
    
    # Test data
    user_data = UserCreate(name="Test User", email="test@example.com", password="password123")
    
    # Create the first user
    create_user(db, user=user_data)
    
    # Try creating a user with the same email
    try:
        create_user(db, user=user_data)
        assert False, "Expected IntegrityError due to duplicate email"
    except IntegrityError:
        db.rollback()  # Rollback changes
        pass  # Expected behavior, so pass

def test_get_user_by_email():
    # Setup a new database session
    db = next(get_test_db())
    
    # Test data
    user_data = UserCreate(name="Test User", email="test@example.com", password="password123")
    
    # Create the user
    user = create_user(db, user=user_data)
    
    # Retrieve the user by email
    retrieved_user = get_user_by_email(db, email="test@example.com")
    
    # Assertions
    assert retrieved_user is not None
    assert retrieved_user.email == "test@example.com"
    
    # Cleanup
    db.rollback()  # Rollback changes after the test

def test_get_user_by_email_not_found():
    # Setup a new database session
    db = next(get_test_db())
    
    # Attempt to retrieve a user that doesn't exist
    user = get_user_by_email(db, email="nonexistent@example.com")
    
    # Assertions
    assert user is None

