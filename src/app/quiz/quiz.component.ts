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
  loading = false;


  ngOnInit(): void {
    this.questions.push(new Question('Comment s\'appelle le vaisseau de Han Solo ?',
      ['La Fregate Nebulon', 'Le Faucon Millenium', 'L\'Aigle de l\'espace'], 1,
      'assets/images/milleniumFalcon.jpg'));

    this.questions.push(new Question("Qui propose au Sénat d'accorder les pleins pouvoirs à Palpatine ?",
      ['Dark Maul', 'Palpatine lui-même', 'Jar Jar Binks'], 2,
      'assets/images/senate.jpg'));

    this.questions.push(new Question('Comment se termine la prophétie ? "Un Jedi viendra. Pour détruire les Sith. Et ..."',
      ['être le meilleur pilote dans toute la galaxie', 'vous apprendre à vous méfier des prophéties', "rétablir l'équilibre dans la Force"], 2,
      'assets/images/anakinSith.jpg'));

    this.questions.push(new Question('Dark Vador est ... de Luke ?',
      ['le père', 'le frère jumeau', 'pas apparenté à Luke. C\'est juste un mensonge.'],
      0, 'assets/images/skywalkerFamily.jpg'));

    this.questions.push(new Question('Alors, finalement, qui a tiré en premier ?',
      ['Han Solo', 'Greedo', 'Ils on ont tiré en même temps'],
      0, 'assets/images/greedoAndHanSolo.jpg'));
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

}
