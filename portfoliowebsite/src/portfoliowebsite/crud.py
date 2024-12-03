from sqlalchemy.orm import Session
from . import models, schemas
from passlib.context import CryptContext
import jwt

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = pwd_context.hash(user.password)
    db_user = models.User(name=user.name, email=user.email, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def authenticate_user(username: str, password: str):
    # Logic to authenticate user
    pass

def create_access_token(data: dict):
    token_obj = models.Token(id = 2, access_token = "success", token_type = "wxyz")
    #if True:
    #    raise HTTPException(status_code=400, detail = "Hello")
    return token_obj
    #pass

def get_project(project_id: int):
    # Logic to fetch a project from the database
    pass

def create_project(project_data):
    # Logic to add a new project to the database
    pass