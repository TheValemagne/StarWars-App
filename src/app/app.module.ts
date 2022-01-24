import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxEchartsModule} from 'ngx-echarts';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';
import {CarouselModule} from 'ngx-owl-carousel-o';

import {HeaderComponent} from './header/header.component';
import {DrawerComponent} from './drawer/drawer.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ContactComponent} from './contact/contact.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuestionComponent} from './quiz/question/question.component';
import {FormsModule} from "@angular/forms";
import {DeveloperComponent} from './contact/developer/developer.component';
import {UniversComponent} from './univers/univers.component';
import {GraphComponent} from './univers/graph/graph.component';
import {ResultComponent} from './quiz/result/result.component';
import {LoaderComponent} from './quiz/loader/loader.component';
import {CarouselComponent} from './accueil/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    AccueilComponent,
    ContactComponent,
    DeveloperComponent,
    QuizComponent,
    QuestionComponent,
    ResultComponent,
    UniversComponent,
    GraphComponent,
    LoaderComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CarouselModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
