from sqlalchemy.orm import Session
from portfoliowebsite.models import User as UserModel
from portfoliowebsite.schemas.user import UserCreate, UserUpdate
from portfoliowebsite.core.security import hash_password, verify_password

def create_user(db: Session, user: UserCreate):
    # Hash the password before storing it
    hashed_password = hash_password(user.password)
    db_user = UserModel(email=user.email, username=user.username, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(UserModel).filter(UserModel.email == email).first()

def update_user(db: Session, user_id: int, user: UserUpdate):
    db_user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if db_user:
        for key, value in user.dict(exclude_unset=True).items():
            setattr(db_user, key, value)
        db.commit()
        db.refresh(db_user)
        return db_user
    return None

def delete_user(db: Session, user_id: int):
    db_user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if db_user:
        db.delete(db_user)
        db.commit()
        return db_user
    return None