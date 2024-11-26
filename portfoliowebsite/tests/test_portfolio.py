# portfoliowebsite/tests/test_portfolio.py
from fastapi.testclient import TestClient
from portfoliowebsite.main import app
from portfoliowebsite.schemas.portfolio import PortfolioItem

client = TestClient(app)

def test_create_portfolio():
    new_portfolio_item = {
        "title": "My Portfolio Item",
        "description": "Description of the portfolio item",
        "link": "http://example.com"
    }

    response = client.post("/portfolio", json=new_portfolio_item)
    assert response.status_code == 201
    assert response.json()["title"] == new_portfolio_item["title"]


def test_get_portfolio():
    response = client.get("/portfolio")
    assert response.status_code == 200
    assert isinstance(response.json(), list)  # Ensure it returns a list of items


def test_update_portfolio():
    updated_item = {
        "title": "Updated Portfolio Item",
        "description": "Updated description",
        "link": "http://updatedexample.com"
    }

    response = client.put("/portfolio/1", json=updated_item)  # Assuming ID 1 exists
    assert response.status_code == 200
    assert response.json()["title"] == updated_item["title"]


def test_delete_portfolio():
    response = client.delete("/portfolio/1")  # Assuming ID 1 exists
    assert response.status_code == 204
