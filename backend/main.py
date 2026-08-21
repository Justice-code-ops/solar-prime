from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from enum import Enum

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"]
)

class ServiceType(str, Enum):
    commercial = 'commercial'
    residential = 'residential'
    

    
class quoteRequest(BaseModel):
    name: str
    email: str
    phone: str
    address: str
    service_type: ServiceType
    budget: int

@app.post('/quote')
def request_quote(quote: quoteRequest):
    eligible = (
        quote.budget >= 2000000 and quote.service_type == "commercial"
    )
    if eligible:
        message = "Quote request approved for processing"
    else:
        message = "Quote requires further review"
    return {
        "customer": quote.name,
        "email": quote.email,
        "budget": quote.budget,
        "address": quote.address,
        "service_type": quote.service_type,
        "eligible": eligible,
        "message": message
    }
@app.get('/')
def home():
    return {
        "message": "Welcome to solar prime"
    }