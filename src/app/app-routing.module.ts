import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccueilComponent} from './accueil/accueil.component';
import {ContactComponent} from './contact/contact.component';
import {UniversComponent} from "./univers/univers.component";
import {QuizComponent} from "./quiz/quiz.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'univers', component: UniversComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
