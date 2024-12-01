from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from portfoliowebsite.dependencies import get_db
from portfoliowebsite.models import User
from portfoliowebsite.schemas import Token, UserCreate, UserLogin
from portfoliowebsite.core.security import hash_password, verify_password, create_access_token

router = APIRouter()

@router.post("/signup", response_model=Token)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    # Check if the user already exists
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash the user's password before storing it
    hashed_password = hash_password(user.password)

    # Create a new user instance
    new_user = User(email=user.email, hashed_password=hashed_password)

    # Add the new user to the database
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    # Generate a JWT token for the new user
    access_token = create_access_token(data={"sub": new_user.email})

    # Return a Token instance instead of a dictionary
    return Token(access_token=access_token, token_type="bearer")

@router.post("/login", response_model=Token)
def login(user: UserLogin, db: Session = Depends(get_db)):
    # Check if the user exists in the database
    db_user = db.query(User).filter(User.email == user.email).first()
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    # Verify the user's password
    if not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    # Generate a JWT token for the authenticated user
    access_token = create_access_token(data={"sub": db_user.email})

    # Return a Token instance instead of a dictionary
    return Token(access_token=access_token, token_type="bearer")

