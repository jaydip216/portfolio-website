import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    { category: 'Programming Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
    { category: 'Frameworks', items: ['Angular', 'React', 'Node.js'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code'] }
  ];
}
