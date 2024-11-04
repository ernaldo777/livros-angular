import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importar RouterModule
import { Editora } from '../editora'; // Importe a classe Editora
import { Livro } from '../livro'; // Importe a classe Livro
import { ControleEditoraService } from '../controle-editora.service'; // Importe o serviço de controle de editoras
import { ControleLivrosService } from '../controle-livros.service'; // Importe o serviço de controle de livros

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicionar RouterModule
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']  
  })

export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = []; // Vetor de editoras, inicializado vazio
  public livros: Array<Livro> = []; // Vetor de livros, inicializado vazio

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    // Preenche o vetor editoras e o vetor livros
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  // Método para excluir um livro pelo código
  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros(); // Atualiza a lista de livros após exclusão
  };

  // Método para obter o nome da editora pelo código
  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora) || 'Desconhecida';
  };
}
