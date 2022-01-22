import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input()
  scorePercentage!: number;

  status!: ResultStatus;


  ngOnInit(): void {
    if (this.scorePercentage > 75) {
      this.status = new ResultStatus('Maître Jedi', 'assets/images/yoda.png', '');
    } else if (this.scorePercentage > 50) {
      this.status = new ResultStatus('Chevalier Jedi', 'assets/images/obiwan.png', '');
    } else if (this.scorePercentage > 25) {
      this.status = new ResultStatus('Padawan', 'assets/images/anakin.jpg', '')
    } else if (this.scorePercentage > 0) {
      this.status = new ResultStatus('Initié', 'assets/images/youngling.jpg', '')
    } else {
      this.status = new ResultStatus('Idiot', 'assets/images/jarjar.jpg', 'Votre capacité à parler ne vous rend pas intélligent')
    }
  }

}

class ResultStatus {
  constructor(
    public rang: string,
    public image: string,
    public text: string
  ) {
  }
}
