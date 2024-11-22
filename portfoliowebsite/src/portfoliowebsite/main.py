from fastapi import FastAPI
from portfoliowebsite.core.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

# app.include_router(api_router)


@app.get("/")
def read_root():
    return {"Hello": "World"}