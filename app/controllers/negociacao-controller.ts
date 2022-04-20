import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() { //Construtor criador, para criar novo modelo de formulario
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona(): void {//Metodo para pegar os valores e iniciar um novo form
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);// adiciona neogociacao a lista
    console.log(this.negociacoes.lista());
    
    this.limpaFormulario();    
  }

  criaNegociacao(): Negociacao{
  const exp = /-/g; //vai rastrear todos os "-" no global.    
  const date = new Date(this.inputData.value.replace(exp, ',')); //raplace vai pegar todos os "-" e trocar por ","
  const quantidade = parseInt(this.inputQuantidade.value);
  const valor = parseFloat(this.inputValor.value);
  return new Negociacao(date, quantidade, valor);
  }

  limpaFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus(); //focus => inputData
  }

}