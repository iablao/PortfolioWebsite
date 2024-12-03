from sqlalchemy import Column, Integer, String, DateTime
from portfoliowebsite.core.database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)  # Store hashed password, not plain text

    def __repr__(self):
        return f"<User id={self.id} name={self.name} email={self.email}>"


class Token(Base):
    __tablename__ = 'tokens'  # Use plural table names for convention (optional)

    id = Column(Integer, primary_key=True, index=True)  # Primary key column
    access_token = Column(String, nullable=False)       # Access token column
    token_type = Column(String, nullable=False)         # Token type column
    
    def __repr__(self):
        return f"<Token id={self.id} access_token={self.access_token} token_type={self.token_type}>"
