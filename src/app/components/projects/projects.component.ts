import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  animationState: string = '*';

  constructor() {
    this.resetAnimation();
  }

  resetAnimation() {
    this.animationState = 'void';
    setTimeout(() => this.animationState = '*', 50);
  }

}
