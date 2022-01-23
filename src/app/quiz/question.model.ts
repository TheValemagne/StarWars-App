export class Question {
  public constructor(
    public question: string,
    public answers: string[],
    public indexCorrectAnswer: number,
    public image?: string
  ) {
  }
}
