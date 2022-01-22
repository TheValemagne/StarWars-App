import {Component, OnInit} from '@angular/core';
import {Question} from "./question.model";

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


  ngOnInit(): void {
    this.questions.push(new Question('une question?', ['sol 1', 'sol 2', 'sol 3'], 1));
    this.questions.push(new Question('encore une question ?', ['numéro 1', 'numéro 2', 'numéro 3'], 0));
  }

  nextQuestion(isAnswerCorrect: boolean): void {
    if (isAnswerCorrect) {
      this.score++;
    }
    if (this.indexCurrentQuestion + 1 < this.questions.length) {
      this.indexCurrentQuestion++;
    } else {
      this.finished = true;
    }
  }

}
