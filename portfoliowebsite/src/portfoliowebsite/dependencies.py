from typing import Generator
from sqlalchemy.orm import Session
from portfoliowebsite.core.database import SessionLocal

def get_db() -> Generator[Session, None, None]:
    """
    Dependency to provide a database session.
    Ensures that the session is properly closed after use.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
