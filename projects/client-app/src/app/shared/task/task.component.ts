import { Component } from '@angular/core';
import { CardComponent } from '../../../../../ui-library/src/lib/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
})
export class TaskComponent {}
