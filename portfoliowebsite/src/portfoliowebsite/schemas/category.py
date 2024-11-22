from pydantic import BaseModel

from portfoliowebsite.schemas.transaction import TransactionType # type: ignore


class CategoryBase(BaseModel):
    category_name: str
    category_type: TransactionType


class CategoryCreate(CategoryBase):
    pass


class CategoryResponse(CategoryBase):
    id: int

    class Config:
        from_attributes = True