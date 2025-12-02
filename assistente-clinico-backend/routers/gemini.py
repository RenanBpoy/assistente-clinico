from fastapi import APIRouter, Request
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

router = APIRouter()

@router.post("/ask")
async def ask_gemini(request: Request):
    data = await request.json()
    question = data.get("question")

    if not question:
        return {"answer": "⚠️ Pergunta vazia"}

    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        response = model.generate_content(question)

        text = response.text if hasattr(response, "text") else str(response)
        return {"answer": text}

    except Exception as e:
        return {"answer": f"❌ Erro ao gerar resposta: {e}"}
