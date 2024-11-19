from fastapi import FastAPI
from portfoliowebsite.core.database import Base

Base.metadata.create_all(bind=engine)
app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}
