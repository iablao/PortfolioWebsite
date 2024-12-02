from pydantic import BaseModel

class Project(BaseModel):
    id: int
    title: str
    description: str
    url: str

    class Config:
        orm_mode = True

class ProjectCreate(BaseModel):
    title: str
    description: str
    url: str
