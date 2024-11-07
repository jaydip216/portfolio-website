import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [fadeAnimation]
})
export class EducationComponent {
  animationState: string = '*';

  constructor() {
    this.resetAnimation();
  }

  resetAnimation() {
    this.animationState = 'void';
    setTimeout(() => this.animationState = '*', 50);
  }
  education = [
    {
      degree: 'Bachelor in Computer Science',
      school: 'University Name',
      year: '2016-2020',
      description: 'Major in Software Engineering'
    }
  ];
}
