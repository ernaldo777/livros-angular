import { Injectable } from '@angular/core';
import { Livro } from './livro'; // Importe a classe Livro

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo do Livro A', autores: ['Autor 1', 'Autor 2'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo do Livro B', autores: ['Autor 3'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo do Livro C', autores: ['Autor 4', 'Autor 5'] }
  ];

  constructor() {}

  // Método para retornar o vetor de livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Método para incluir um novo livro
  incluir(novoLivro: Livro): void {
    const novoCodigo = this.livros.length > 0 
      ? Math.max(...this.livros.map(livro => livro.codigo)) + 1 
      : 1;
    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro);
  }

  // Método para excluir um livro pelo código
  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
