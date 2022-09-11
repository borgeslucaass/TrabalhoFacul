import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ConhecimentoComponent } from './components/conhecimento/conhecimento.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { FormacaoComponent } from './components/formacao/formacao.component';

const routes: Routes = [
  {path:'', component: BlogComponent},
  {path:'formacao', component: FormacaoComponent },
  {path:'experiencias', component: ExperienciasComponent },
  {path:'conhecimento', component: ConhecimentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
