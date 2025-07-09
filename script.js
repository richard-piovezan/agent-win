const apiKeyInput = document.getElementById("api-key");
const gameSelect = document.getElementById("game-select");
const questionInput = document.getElementById("question-input");
const askButton = document.getElementById("ask-button");
const aiResponse = document.getElementById("ai-response");
const form = document.getElementById("form");

// Conversão de markdown com Showdown JavaScript
const markdownToHTML = (text) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(text);
};

const askAI = async (question, game, apiKey) => {
  const model = "gemini-2.5-flash";

  const baseURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${
    apiKey === "2003" ? "AIzaSyA0iWYfNG59DdZkYlVlyUsroNHTdTn9lEk" : apiKey
  }`;
  const currentQuestion = `
    ## Especialidade
    Você é um especialista assistente de meta para o jogo ${game}.

    ## Tarefa
    Você deve responder as perguntas do usuário com base no seu conhecimento do jogo,
    estratégias, builds e dicas.

    ## Regras
    - Se você não sabe a resposta, responda com "Não sei" e não tente inventar uma resposta.
    - Se você souber a resposta, responda com objetividade e clareza, sem desenvolver um bate-papo.
    - Se a pergunta não está relacionada ao jogo, responda com "Esta pergunta não está relacionada ao jogo ${game}".
    - Considere a data atual ${new Date().toLocaleDateString()}.
    - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente e acertiva.
    - Nunca responda itens que você não tenha certeza de que existe no patch atual.
    - Responda sempre em português brasileiro, caso não saiba o nome em português brasileiro ao certo, diga o nome do item em inglês.

    ## Resposta
    - Economize na resposta, seja direto, acertivo e responda no máximo 500 caractéres
    - Responda em markdown
    - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.

    ## Exemplo de resposta
    - Pergunta do usuário: Melhor build Zed mid?
    Resposta: A build mais atual com melhor winrate é: \n\n **Itens:**\n\n descreva os itens aqui em ordem cronologica que o usuário deve fazer ao longo do jogo.
    - Pergunta: Melhor runa de Zed contra Lissandra?
    Resposta: A melhor runa atual e com o melhor winrate é: \n\n**Runas:**\n\n (Dominação): \n- Eletrocutar \n- Gosto de Sangue \n- Lembrança Aterrorizante \n- Caça Suprema \n\n(Feitiçaria): \n- Transcedência \n- Chamuscar \n\n\n O winrate dessas runas contra lissandra é de 46.6%.
    - Pergunta: Qual o melhor campeão no mid contra zed?
    Resposta: - Fizz \n- Talon \n- Galio \n- Lissandra (Maior winrate)

    ---
    Aqui está a pergunta do usuário: ${question}
  `;

  const contents = [
    {
      parts: [
        {
          text: currentQuestion,
        },
      ],
    },
  ];

  const tools = [
    {
      google_search: {},
    },
  ];

  // call API
  const response = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents,
      tools,
    }),
  });

  const data = await response.json();
  console.log({ data });
  return data.candidates[0].content.parts[0].text;
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const apiKey = apiKeyInput.value;
  const game = gameSelect.value;
  const question = questionInput.value;

  console.log({ apiKey, game, question });

  if (apiKey === "" || game == "" || question == "") {
    alert("Por favor, insira todas as informações.");
    return;
  }

  askButton.disabled = true;
  askButton.textContent = "Perguntando...";
  askButton.classList.add("loading");

  try {
    const text = await askAI(question, game, apiKey);
    aiResponse.querySelector(".response-content").innerHTML =
      markdownToHTML(text);
    aiResponse.classList.remove("hidden");
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    askButton.disabled = false;
    askButton.textContent = "perguntar";
    askButton.classList.remove("loading");
  }
});
