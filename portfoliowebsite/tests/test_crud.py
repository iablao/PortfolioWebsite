from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from portfoliowebsite.models import Base
from portfoliowebsite.crud import create_user, get_user_by_email
from portfoliowebsite.schemas import UserCreate

# Database setup for testing
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def test_create_user():
    # Create tables
    Base.metadata.create_all(bind=engine)
    
    # Setup a new database session
    db = TestingSessionLocal()
    
    # Test data
    user_data = UserCreate(name="Test User", email="test@example.com", password="password123")
    
    # Create a user
    user = create_user(db, user=user_data)
    
    # Assertions
    assert user.email == "test@example.com"
    
    # Cleanup
    db.close()
