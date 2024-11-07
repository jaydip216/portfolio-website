import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css',
  animations: [fadeAnimation]
})
export class AchievementsComponent {
  animationState: string = '*';

  constructor() {
    this.resetAnimation();
  }

  resetAnimation() {
    this.animationState = 'void';
    setTimeout(() => this.animationState = '*', 50);
  }
}
