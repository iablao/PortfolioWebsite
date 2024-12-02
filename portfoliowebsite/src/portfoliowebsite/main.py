from fastapi import FastAPI
from portfoliowebsite.core.database import Base, engine
from portfoliowebsite.routers import auth_router, portfolio_router
from fastapi.middleware.cors import CORSMiddleware
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create all database tables
Base.metadata.create_all(bind=engine)

# Initialize the FastAPI app
app = FastAPI()

# Add CORS middleware if needed
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with allowed origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# Register routers
app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(portfolio_router, prefix="/portfolio", tags=["portfolio"])

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Portfolio Website API", "version": "1.0"}

# Startup and shutdown events for logging
@app.on_event("startup")
async def startup_event():
    logger.info("Starting up the application")

@app.on_event("shutdown")
async def shutdown_event():
    logger.info("Shutting down the application")

