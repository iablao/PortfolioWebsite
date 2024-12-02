from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from portfoliowebsite.schemas.token import token
from portfoliowebsite.crud import authenticate_user, create_access_token

router = APIRouter()

@router.post("/login", response_model=token)
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    """
    Handle user login.
    """
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    access_token = create_access_token({"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}
