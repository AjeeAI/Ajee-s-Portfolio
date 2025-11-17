import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import db
from pydantic import BaseModel, Field, EmailStr
from sqlalchemy import text
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="Portfolio Backend API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  # allow all HTTP methods (POST, GET, etc.)
    allow_headers=["*"],  # allow all headers (Authorization, Content-Type, etc.)
)

class Message(BaseModel):
    name: str = Field(..., example="Adesoji Ajijolaoluwa")
    email: str = Field(..., example="ajee@ai.com")
    subject: str = Field(..., example="Inquiry about your app development services")
    message: str = Field(..., example="Hello. I want to build a mobile app for my business existing website.")
   
@app.get("/")
def home():
    return "Welcome to my Portfolio Backend API" 

@app.post("/api/messages")

def send_message(message: Message):
    try:
        
        check_existing_message_query = text(
           """
           SELECT * FROM messages_table WHERE email = :email
           """
       )
        
        send_message_query = text(
            """
            INSERT INTO messages_table (name, email, subject, message)
            VALUES (:name, :email, :subject, :message)
            """
        )
        db.execute(
            send_message_query,
            {
                "name": message.name,
                "email": message.email,
                "subject": message.subject,
                "message": message.message
            }
        )
        
        db.commit()
    except HTTPException as e:
        raise e
    
@app.get("/api/messages")
def get_messages():
    try:
        get_Mesages_query = text(
            """
            SELECT * FROM messages_table
            
            """
        )
        
        result = db.execute(get_Mesages_query)
        if not result:
            return "No messages yet!"
        messages = result.mappings().fetchall()
        return {
            "data": messages
        }
        
    except HTTPException as e:
        raise e