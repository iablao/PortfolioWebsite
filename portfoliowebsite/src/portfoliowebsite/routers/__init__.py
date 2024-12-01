from fastapi import APIRouter

from portfoliowebsite.routers import auth, user, transaction

api_router = APIRouter()

api_router.include_router(user.router, prefix="/users", tags=["Users"])
api_router.include_router(auth.router, prefix="/categories", tags=["Categories"])
api_router.include_router(
    transaction.router, prefix="/transactions", tags=["Transactions"]
)