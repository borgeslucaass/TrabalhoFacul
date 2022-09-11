import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './components/blog/blog.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ConhecimentoComponent } from './components/conhecimento/conhecimento.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FormacaoComponent,
    ExperienciasComponent,
    ConhecimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
