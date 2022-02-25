import {Component} from '@angular/core';
import {Developer} from './developer.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  developers: Developer[] = [
    new Developer('Houdé', 'Jérémy', 'jeremy@laposte.net', '0606560604', 'assets/images/rebelle.jpg'),
    new Developer('Kirsch', 'Johanna', 'johanna-kirsch@gmx.net', '0606580603', 'assets/images/rebelle.jpg')
  ];

  constructor() {
  }
}
