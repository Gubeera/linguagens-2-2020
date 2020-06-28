import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ListaProfessorComponent} from '../lista-professor/lista-professor.component';
import{SugestaoCursoComponent} from '../sugestao-curso/sugestao-curso.component';
import{PaginaInicialComponent} from '../pagina-inicial/pagina-inicial.component';
import{PaginaAlunosComponent} from '../pagina-alunos/pagina-alunos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'listaProfessor', component: ListaProfessorComponent},
  {path: 'sugestaoCurso', component: SugestaoCursoComponent},
  {path: '', pathMatch: "full", component: PaginaInicialComponent},
  {path: 'paginaAluno', component: PaginaAlunosComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
