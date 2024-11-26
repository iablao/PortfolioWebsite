from sqlalchemy.orm import Session
from portfoliowebsite.models import Portfolio as PortfolioModel
from portfoliowebsite.schemas.portfolio import PortfolioCreate, PortfolioUpdate

def get_all_portfolios(db: Session):
    return db.query(PortfolioModel).all()

def get_portfolio_by_id(db: Session, portfolio_id: int):
    return db.query(PortfolioModel).filter(PortfolioModel.id == portfolio_id).first()

def create_portfolio(db: Session, portfolio: PortfolioCreate):
    db_portfolio = PortfolioModel(**portfolio.dict())
    db.add(db_portfolio)
    db.commit()
    db.refresh(db_portfolio)
    return db_portfolio

def update_portfolio(db: Session, portfolio_id: int, portfolio: PortfolioUpdate):
    db_portfolio = db.query(PortfolioModel).filter(PortfolioModel.id == portfolio_id).first()
    if db_portfolio:
        for key, value in portfolio.dict(exclude_unset=True).items():
            setattr(db_portfolio, key, value)
        db.commit()
        db.refresh(db_portfolio)
        return db_portfolio
    return None

def delete_portfolio(db: Session, portfolio_id: int):
    db_portfolio = db.query(PortfolioModel).filter(PortfolioModel.id == portfolio_id).first()
    if db_portfolio:
        db.delete(db_portfolio)
        db.commit()
        return db_portfolio
    return None
