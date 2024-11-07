import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { typewriterAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [typewriterAnimation]
})
export class IntroductionComponent {
  tags = ["developer", "learner", "cricket enthusiast", "avid reader"];
  currentTagIndex = 0;
  currentTag = this.tags[this.currentTagIndex];

  constructor() {
    this.cycleTags();
  }

  cycleTags() {
    setInterval(() => {
      this.currentTagIndex = (this.currentTagIndex + 1) % this.tags.length;
      this.currentTag = this.tags[this.currentTagIndex];
    }, 2000); // Change tag every 2 seconds
  }
}
