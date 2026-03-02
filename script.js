//Prompt de boas vindas e solicitação do nome
let nome = prompt("Bem-vindo! Qual é o seu nome?");

// verificação se o nome foi inserido
if (nome) {
  alert("Olá, " + nome + "Que bom ter você aqui.");

    // Pergunta se gostou do site
  let gostouDoSite = prompt("Você espera gostar do site? Responda com 'Sim' ou Não'.")

    // verificação da resposta sobre o site
  if (gostouDoSite.toLowerCase() === "sim") {
    alert("Espero que goste!");
  } else if (gostouDoSite.toLowerCase() === "não") {
    alert("Que pena! Agradecemos o seu feddback.");
  } else {
    alert("Resposta inválida, por favor responda apenas com 'sim' ou 'não'.");
  }

}


