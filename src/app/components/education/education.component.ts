import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeAnimation, slideAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  education = [
    {
      degree: 'Bachelor in Computer Science',
      school: 'University Name',
      year: '2016-2020',
      description: 'Major in Software Engineering'
    }
  ];
}
