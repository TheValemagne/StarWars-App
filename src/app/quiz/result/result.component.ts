import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input()
  scorePercentage!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
