import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  animations: [slideAnimation]
})
export class SkillsComponent {
  animationState: string = '*';
  skills = [
    { category: 'Programming Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
    { category: 'Frameworks', items: ['Angular', 'React', 'Node.js'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code'] }
  ];

  constructor() {
    // Start with void state and animate in
    this.animationState = 'void';
    setTimeout(() => this.animationState = '*', 50);
  }
}
