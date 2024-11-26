from datetime import datetime
from pydantic import BaseModel, EmailStr
from typing import Optional

class UserBase(BaseModel):
    username: str
    email: EmailStr
    role: Optional[str] = "user"  # optional role, defaults to "user"

class UserCreate(BaseModel):
    password: str
    is_verified: Optional[bool] = None
    is_active: Optional[bool] = None

class User(BaseModel):
    id: int
    is_active: bool
    is_verified: bool
    created_at: datetime
    updated_at: Optional[datetime] = None  # optional field for tracking updates

    class Config:
        from_attributes = True

class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr
    role: Optional[str]  # Return the role in the response model if needed
    created_at: datetime
    updated_at: Optional[datetime] = None  # Include updated_at if needed

    class Config:
        from_attributes = True
