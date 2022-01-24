import {Component, OnInit} from '@angular/core';
import {Question} from "./question.model";
import {questions} from "../../assets/quizData";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [];
  score = 0;
  indexCurrentQuestion = 0;
  finished = false;
  loading = false;


  ngOnInit(): void {
    this.questions = questions;
  }

  nextQuestion(isAnswerCorrect: boolean): void {
    if (isAnswerCorrect) {
      this.score++;
    }
    if (this.indexCurrentQuestion + 1 < this.questions.length) {
      this.indexCurrentQuestion++;
    } else {
      this.finished = true;
      this.loading = true;
      setTimeout(() => this.loading = false, 2000);
    }
  }

  restartQuiz(): void {
    this.score = 0;
    this.indexCurrentQuestion = 0;
    this.finished = false;
  }

}
