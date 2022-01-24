import {Question} from "../app/quiz/question.model";

export const questions: Array<Question> = [
  {
    question: 'Comment s\'appelle le vaisseau de Han Solo ?',
    answers: ['La Fregate Nebulon', 'Le Faucon Millenium', 'L\'Aigle de l\'espace'],
    indexCorrectAnswer: 1,
    image: 'assets/images/milleniumFalcon.jpg'
  },
  {
    question: "Qui propose au Sénat d'accorder les pleins pouvoirs à Palpatine ?",
    answers: ['Dark Maul', 'Palpatine lui-même', 'Jar Jar Binks'],
    indexCorrectAnswer: 2,
    image: 'assets/images/senate.jpg'
  },
  {
    question: 'Comment se termine la prophétie ? "Un Jedi viendra. Pour détruire les Sith. Et ..."',
    answers: ['devenir le meilleur pilote dans toute la galaxie', 'vous apprendre à vous méfier des prophéties', "rétablir l'équilibre dans la Force"],
    indexCorrectAnswer: 2,
    image: 'assets/images/anakinSith.jpg'
  },
  {
    question: 'Dark Vador est ... de Luke ?',
    answers: ['le père', 'le frère jumeau', 'pas apparenté à Luke. C\'est juste un mensonge.'],
    indexCorrectAnswer: 0,
    image: 'assets/images/skywalkerFamily.jpg'
  },
  {
    question: 'Alors, finalement, qui a tiré en premier ?',
    answers: ['Han Solo', 'Greedo', 'Ils on ont tiré en même temps'],
    indexCorrectAnswer: 0,
    image: 'assets/images/greedoAndHanSolo.jpg'
  },
];
