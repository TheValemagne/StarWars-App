import {Component, Input} from '@angular/core';
import {Developer} from '../developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
  @Input() developer!: Developer;

  constructor() {
  }
}
