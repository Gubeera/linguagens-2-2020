import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exibir-cursos',
  templateUrl: './exibir-cursos.component.html',
  styleUrls: ['./exibir-cursos.component.css']
})
export class ExibirCursosComponent {

  @Input() cursos;

}
