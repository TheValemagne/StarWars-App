import { Component } from '@angular/core';
import { Developer } from './developer.modele';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  developers: Developer[] = [
    new Developer('Houdé', 'Jérémy', 'jeremy@laposte.net', '0606560604', 'https://i.etsystatic.com/6874471/r/il/ca0432/373072798/il_fullxfull.373072798_70yk.jpg'),
    new Developer('Kirsch', 'Johanna', 'johanna-kirsch@gmx.net', '0606580603', 'https://i.etsystatic.com/6874471/r/il/ca0432/373072798/il_fullxfull.373072798_70yk.jpg')
  ];

  constructor() { }
}
