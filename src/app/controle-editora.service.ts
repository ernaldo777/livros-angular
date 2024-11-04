import { Injectable } from '@angular/core';
import { Editora } from './editora'; // Importe a classe Editora

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora Alpha' },
    { codEditora: 2, nome: 'Editora Beta' },
    { codEditora: 3, nome: 'Editora Gamma' }
  ];

  constructor() {}

  // Método para retornar o vetor de editoras
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  // Método para retornar o nome da editora a partir do código da editora
  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.filter(e => e.codEditora === codEditora)[0];
    return editora ? editora.nome : undefined;
  }
}
