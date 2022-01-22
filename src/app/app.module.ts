import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';

import {HeaderComponent} from './header/header.component';
import {DrawerComponent} from './drawer/drawer.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ContactComponent} from './contact/contact.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuestionComponent} from './quiz/question/question.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    AccueilComponent,
    ContactComponent,
    QuizComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
