import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Question} from "../question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnChanges {
  @Input()
  question!: Question;

  @Output('answer')
  answerQuestion = new EventEmitter<boolean>();

  answerIndex!: number | undefined;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('question')) {
      this.answerIndex = undefined;
    }
  }


  onSubmitQuestion(): void {
    this.answerQuestion.emit(this.answerIndex == this.question.indexCorrectAnswer);
  }
}
