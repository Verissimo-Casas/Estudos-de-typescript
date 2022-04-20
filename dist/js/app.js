import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController(); //atencao ao criar o new controller, inserir a extensao no arquivo de oringem / .js
const form = document.querySelector('.form'); // Pegando o formulario
form.addEventListener('submit', event => {
    event.preventDefault(); //desabilita o refresh da page ao submeter form
    controller.adiciona();
});
