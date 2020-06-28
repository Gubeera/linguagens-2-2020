import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursoCartaoComponent } from './curso-cartao/curso-cartao.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { ExibirCursosComponent } from './exibir-cursos/exibir-cursos.component';
import { ListaProfessorComponent } from './lista-professor/lista-professor.component';
import { SugestaoCursoComponent } from './sugestao-curso/sugestao-curso.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ExibirProfessorComponent } from './exibir-professor/exibir-professor.component';
import { PaginaAlunosComponent } from './pagina-alunos/pagina-alunos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CursoCartaoComponent,
    CursoCadastroComponent,
    ExibirCursosComponent,
    ListaProfessorComponent,
    SugestaoCursoComponent,
    PaginaInicialComponent,
    ExibirProfessorComponent,
    PaginaAlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
