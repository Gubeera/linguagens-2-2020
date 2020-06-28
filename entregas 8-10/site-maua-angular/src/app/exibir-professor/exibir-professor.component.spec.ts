import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirProfessorComponent } from './exibir-professor.component';

describe('ExibirProfessorComponent', () => {
  let component: ExibirProfessorComponent;
  let fixture: ComponentFixture<ExibirProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
