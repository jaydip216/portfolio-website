import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/fade.animation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
  standalone: true,
  imports: [CommonModule],

  animations: [fadeAnimation]
})
export class IntroductionComponent {

  animationState: string = '*';

  constructor() {
    this.resetAnimation();
  }

  resetAnimation() {
    this.animationState = 'void';
    setTimeout(() => this.animationState = '*', 50);
  }
  
}
