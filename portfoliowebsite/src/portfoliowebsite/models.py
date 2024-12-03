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
