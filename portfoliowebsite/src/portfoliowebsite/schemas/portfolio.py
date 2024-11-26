from pydantic import BaseModel
from typing import Optional

class PortfolioBase(BaseModel):
    title: str
    description: Optional[str] = None
    image_url: Optional[str] = None

class PortfolioCreate(PortfolioBase):
    pass

class PortfolioUpdate(PortfolioBase):
    pass

class Portfolio(PortfolioBase):
    id: int

    class Config:
        orm_mode = True  # This is needed to tell Pydantic to work with SQLAlchemy models
