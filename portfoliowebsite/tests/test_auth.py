# portfoliowebsite/tests/test_auth.py
from fastapi.testclient import TestClient
from portfoliowebsite.main import app
from portfoliowebsite.schemas.user import UserCreate, UserResponse
from portfoliowebsite.core.security import create_access_token
from datetime import timedelta

client = TestClient(app)

def test_login():
    # Sample test user data
    user_data = {
        "username": "testuser",
        "email": "testuser@example.com",
        "password": "testpassword123"
    }

    # First, register the user or ensure they exist (you might need to create a test user)
    # Assuming you have an endpoint to create a user

    response = client.post("/users/create", json=user_data)  # Replace with actual endpoint
    assert response.status_code == 201

    # Now, test logging in (assuming you have a login endpoint)
    response = client.post("/users/token", data={"username": user_data["username"], "password": user_data["password"]})
    assert response.status_code == 200
    assert "access_token" in response.json()


def test_create_access_token():
    # Test token creation with a valid payload
    data = {"sub": "testuser"}
    token = create_access_token(data=data, expires_delta=timedelta(minutes=30))
    assert token is not None
    assert isinstance(token, str)
