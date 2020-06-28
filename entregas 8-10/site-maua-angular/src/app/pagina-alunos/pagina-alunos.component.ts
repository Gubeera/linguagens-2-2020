import { Component} from '@angular/core';

export class alunos{
    public nome: String;
    public idade: number;
    public email: String;
    public tronco: String;
}



@Component({
  selector: 'app-pagina-alunos',
  templateUrl: './pagina-alunos.component.html',
  styleUrls: ['./pagina-alunos.component.css']
})
export class PaginaAlunosComponent {
  troncos = ['Engenharia', 'Administração','Design'];
  aluno:alunos = new alunos();
  colecaoAluno = [];
  salvar(meuForm){
    this.aluno.nome = meuForm.value.nome;
    this.aluno.idade = meuForm.value.idade;
    this.aluno.email = meuForm.value.email;
    this.aluno.tronco = meuForm.value.tronco;
    this.colecaoAluno.push({nome:this.aluno.nome, idade:this.aluno.idade, email: this.aluno.email,
      tronco: this.aluno.tronco});
  }
  validInput = false;

  validarInput(nomeInput,idadeInput,emailInput,troncoInput){
    this.validInput = nomeInput !== '' && idadeInput !== '' && emailInput !== '' && troncoInput !== '';
  }
  mudarCorTexto(){
    return(this.validInput ? 'white' : 'black')
  }
  mudarCorBotao(){
    return this.validInput
  }

}
