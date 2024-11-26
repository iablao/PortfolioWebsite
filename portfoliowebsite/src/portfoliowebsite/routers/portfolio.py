from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from portfoliowebsite.services.portfolio import get_all_portfolios, get_portfolio_by_id, create_portfolio, update_portfolio, delete_portfolio
from portfoliowebsite.schemas.portfolio import Portfolio, PortfolioCreate, PortfolioUpdate
from portfoliowebsite.dependencies import get_db 
router = APIRouter(
    prefix="/portfolio",
    tags=["Portfolio"]
)

@router.get("/", response_model=list[Portfolio])
def read_portfolios(db: Session = Depends(get_db)):
    return get_all_portfolios(db)

@router.get("/{portfolio_id}", response_model=Portfolio)
def read_portfolio(portfolio_id: int, db: Session = Depends(get_db)):
    db_portfolio = get_portfolio_by_id(db, portfolio_id)
    if db_portfolio is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Portfolio not found")
    return db_portfolio


@router.post("/", response_model=Portfolio)
def create_new_portfolio(portfolio: PortfolioCreate, db: Session = Depends(get_db)):
    return create_portfolio(db, portfolio)


@router.put("/{portfolio_id}", response_model=Portfolio)
def update_portfolio_element(portfolio_id: int, portfolio: PortfolioUpdate, db: Session = Depends(get_db)):
    db_portfolio = update_portfolio(db, portfolio_id, portfolio)
    if db_portfolio is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Portfolio not found")
    return db_portfolio

@router.delete("/{portfolio_id}", response_model=Portfolio)
def delete_portfolio_element(portfolio_id: int, db: Session = Depends(get_db)):
    db_portfolio = delete_portfolio(db, portfolio_id)
    if db_portfolio is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Portfolio not found")
    return db_portfolio 
