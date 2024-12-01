from datetime import datetime
from pydantic import BaseModel, EmailStr
from typing import Optional

# Base model shared across other user models
class UserBase(BaseModel):
    username: str
    email: EmailStr
    role: Optional[str] = "user"  # optional role, defaults to "user"

# Model for creating a user
class UserCreate(UserBase):
    password: str
    is_verified: Optional[bool] = None
    is_active: Optional[bool] = None

# Model for user login
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Model representing a user in the database
class User(BaseModel):
    id: int
    is_active: bool
    is_verified: bool
    created_at: datetime
    updated_at: Optional[datetime] = None  # optional field for tracking updates

    class Config:
        from_attributes = True

# Model for user responses
class UserResponse(UserBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None  # Include updated_at if needed

    class Config:
        from_attributes = True

