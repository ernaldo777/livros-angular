import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ControleEditoraService } from './controle-editora.service'; // Importa o serviço de editoras
import { ControleLivrosService } from './controle-livros.service'; // Importa o serviço de livros
import { LivroListaComponent } from './livro-lista/livro-lista.component'; // Importa o componente LivroLista
import { LivroDadosComponent } from './livro-dados/livro-dados.component'; // Importa o componente Livrodados
import { AppRoutingModule } from './app-routing.module'; 
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule    
  ],
  providers: [ //serviços ao vetor providers
    ControleEditoraService,
    ControleLivrosService 
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
