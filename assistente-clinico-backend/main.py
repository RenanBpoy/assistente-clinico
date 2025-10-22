from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
from dotenv import load_dotenv
import os

# Carrega variáveis do .env
load_dotenv()

# Configura a API do Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Cria o app FastAPI
app = FastAPI()

# Permite chamadas do frontend (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # pode restringir depois
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "API do Gemini ativa 🚀"}

@app.post("/ask")
async def ask_gemini(request: Request):
    data = await request.json()
    question = data.get("question")

    if not question:
        return {"answer": "⚠️ Pergunta vazia"}

    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        response = model.generate_content(question)

        # O Gemini pode retornar várias partes — vamos garantir texto limpo
        text = response.text if hasattr(response, "text") else str(response)
        return {"answer": text}

    except Exception as e:
        return {"answer": f"❌ Erro ao gerar resposta: {e}"}

