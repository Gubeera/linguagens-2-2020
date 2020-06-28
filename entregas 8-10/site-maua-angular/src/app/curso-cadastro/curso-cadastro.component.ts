import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {
  validInput = false;

  adicionar(nome,descricao){
    const curso = {
      nome:nome,
      descricao:descricao
    };
    this.cursoCadastrado.emit(curso);
  }

  @Output() cursoCadastrado = new EventEmitter();

 validarInput(nomeInput, detalheInput){
    this.validInput = nomeInput != '' && detalheInput != '';
 }

 mudarCorTexto(){
    return (this.validInput ? 'white' : 'black') 
 }
 mudarCorBotao(){
   return this.validInput
 }
}
