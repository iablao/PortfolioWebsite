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
    temp_user = "fred"
    temp_pass = "123"

    result = False

    #checking login
    result = temp_user == form_data.username 

    #checking password and login is correct
    result = (temp_pass == form_data.password) & result

    user = authenticate_user(form_data.username, form_data.password)
    #if not user:
    #    raise HTTPException(status_code=400, detail="Invalid Credentials")
    #access_token = create_access_token({"sub": user.username})
    #return {"access_token": access_token, "token_type": "bearer"}

    if not result:
        raise HTTPException(status_code=400, detail= form_data.username + " Invalid Credentials")
    access_token = create_access_token({"sub": form_data.username})

    #access_token = token(access_token = "abc", token_type = "abcd")

    #if True:
    #    raise HTTPException(status_code=400, detail = access_token)
    #return {"access_token": access_token, "token_type": "bearer"}
    return access_token


@router.get("/loginv2")
def check(value: bool):

    return {"result": value}
