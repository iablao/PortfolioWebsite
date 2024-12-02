from fastapi import APIRouter, HTTPException, Depends
from portfoliowebsite.schemas.portfolio import Project, ProjectCreate
from portfoliowebsite.crud import get_project, create_project

router = APIRouter()

@router.get("/projects/{project_id}", response_model=Project)
def read_project(project_id: int):
    """
    Fetch details of a single project.
    """
    project = get_project(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@router.post("/projects", response_model=Project)
def add_project(project: ProjectCreate):
    """
    Add a new project to the portfolio.
    """
    return create_project(project)
