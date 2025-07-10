# 🎮 AGENTWIN – Assistente de Meta em Tempo Real

**AGENTWIN** é um site gratuito que permite ao jogador fazer perguntas sobre estratégias, builds, runas e dicas em tempo real durante suas partidas.  
As respostas são geradas por uma IA (Gemini 2.5 Flash), com foco no meta atual de jogos como **League of Legends**.

---

## ✨ Funcionalidades

- ✅ Interface simples e direta
- 💬 Perguntas em tempo real sobre o jogo escolhido
- 🤖 Respostas geradas pela IA do Google (Gemini 2.5 Flash)
- 📌 Respostas curtas, claras, atualizadas e em português
- 📋 Suporte a formatação _markdown_ para melhor legibilidade

---

## 🚀 Como usar

1. Insira sua API KEY do Gemini (Google AI Studio) no campo indicado.
2. Selecione o jogo (atualmente apenas League of Legends disponível).
3. Escreva sua pergunta (ex: Melhor build para Caitlyn contra Sivir) e clique em Perguntar.
4. A resposta da IA aparecerá formatada logo abaixo do formulário.

## Como obter uma API Key do Gemini

1. Acesse: Google AI Studio – API Keys
2. Faça login com sua conta Google.
3. Gere uma nova chave de API.
4. Copie e cole no campo API KEY do site.

⚠️ Importante: Sua chave é pessoal. Mantenha-a segura.

## ⚙️ Tecnologias usadas

1. HTML5
2. CSS3
3. JavaScript (Vanilla)
4. Gemini 2.5 Flash API
5. Showdown.js para conversão de Markdown para HTML

## 📁 Estrutura do projeto

/
├── index.html # Estrutura principal do site
├── style.css # Estilos e layout
├── script.js # Lógica de interação com a API
├── assets/
│ └── agentwin.png # Logo do projeto

## 🧠 Como a IA foi instruida?

O prompt enviado à IA contém:

- Definição de especialidade com foco no jogo selecionado
- Regras para evitar respostas irrelevantes ou inventadas
- Limite de 500 caracteres por resposta
- Respostas sempre em português
- Uso de Markdown para formatação
- Exemplos de perguntas e respostas

## ✅ Exemplos de perguntas

- Melhor build para Zed?
- Melhor runa de Zed contra Lissandra?
- Qual o melhor campeão no mid contra Yone?

## 📌 Contribuições

Sinta-se à vontade para abrir issues, sugerir melhorias ou contribuir com o suporte a outros jogos!

## 📖 Licença

Este projeto é gratuito e não possui licença oficial.
Você pode usá-lo, modificá-lo e compartilhar, mas sem garantias ou responsabilidades legais por parte do autor.

## 👨‍💻 Autor

Desenvolvido por @richard-piovezan
Feito com 💙 por um jogador para jogadores.
