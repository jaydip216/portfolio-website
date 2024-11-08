import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2020-Present',
      description: 'Led development of enterprise applications'
    }
    // Add more experiences
  ];
}
