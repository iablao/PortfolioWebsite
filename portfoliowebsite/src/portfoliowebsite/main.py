from fastapi import FastAPI
from portfoliowebsite.core.database import Base, engine
from portfoliowebsite.routers import auth, portfolio 

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(auth.router)
app.include_router(portfolio.router)



@app.get("/")
def read_root():
    return {"Hello": "World"}

