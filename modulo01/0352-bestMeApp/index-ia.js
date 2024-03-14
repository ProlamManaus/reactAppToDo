const readline = require('readline');

// Definindo as perguntas
const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
];

// Função para fazer uma pergunta
const ask = (index, answers) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`\n\n${questions[index]} `, (answer) => {
    answers.push(answer.trim());
    rl.close();
    if (index + 1 < questions.length) {
      ask(index + 1, answers);
    } else {
      displayAnswers(answers);
      process.exit();
    }
  });
};

// Função para exibir as respostas
const displayAnswers = (answers) => {
  console.log(`
  show de bola

  O que aprendi hoje?
  ${answers[0]}

  O que me deixou aborrecido? E o que eu poderia fazer para melhorar?
  ${answers[1]}

  O que me deixou feliz hoje?
  ${answers[2]}

  Quantas pessoas ajudei hoje?
  ${answers[3]}

  Vote amanhã, para aprender mais!
  `);
};

// Iniciando o processo de fazer perguntas
const startAsking = () => {
  ask(0, []);
};

startAsking();
