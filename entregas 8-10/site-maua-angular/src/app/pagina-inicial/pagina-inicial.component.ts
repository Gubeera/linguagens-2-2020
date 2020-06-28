import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {

  cursos = [
    {nome:"Engenharia da Computação",descricao:"A graduação em Engenharia de Computação da Mauá oferece aos alunos uma formação com base nos conceitos fundamentais da Engenharia, até a formação especializada em Sistemas Embarcados, Software, Infraestrutura e Segurança, Ciência de Dados e suas inter-relações."},
    {nome:"Engenharia Quimica",descricao: "O Engenheiro Químico pode atuar em indústrias, nas quais a química se faz presente, em empresas de serviços e consultorias; laboratórios; institutos de pesquisas; instituições públicas e universidades. Nesses setores ele pode atender várias áreas de atuação, como engenheiro de: projeto, produto, processo, produção, desenvolvimento, manutenção, segurança, qualidade, aplicações, assistência técnica, suprimentos e vendas; diversos cargos em nível de gerência, pesquisador e professor."},
    {nome:"Engenharia Civil",descricao:"O curso tem uma área de atuação ampla que exige do profissional uma formação diversificada e pronto para atender obras distintas: construção de edifícios residenciais, ferrovias, aeroportos ou faça o planejamento de sistemas de saneamento básico para cidades, podendo trabalhar com arquitetos e ambientalistas em grandes construções."}
  ];

  onCadastrarCurso(curso){
    this.cursos = [curso,...this.cursos];
  }

  }
