import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao); // adiciona neogociacao a lista
        console.log(this.negociacoes.lista());
        this.limpaFormulario();
    }
    criaNegociacao() {
        const exp = /-/g; //vai rastrear todos os "-" no global.    
        const date = new Date(this.inputData.value.replace(exp, ',')); //raplace vai pegar todos os "-" e trocar por ","
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); //focus => inputData
    }
}
