import { Component, ElementRef, HostListener, ViewChildren, QueryList } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    CommonModule,
    IntroductionComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    AchievementsComponent
  ]
})
export class AppComponent {
  @ViewChildren('introduction, experience, projects, skills, education, achievements') 
  sections!: QueryList<ElementRef>;
  
  activeSection: string = 'introduction';
  animationState: string = 'void';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pageYOffset = window.pageYOffset;
    let newSection = '';

    this.sections.forEach((section: ElementRef) => {
      const element = section.nativeElement;
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (pageYOffset >= offsetTop - 100 && pageYOffset < offsetTop + offsetHeight - 100) {
        newSection = element.id;
        // Trigger animation when section changes
        this.animationState = 'void';
        setTimeout(() => this.animationState = '*', 50);
      }
    });

    if (newSection && this.activeSection !== newSection) {
      this.activeSection = newSection;
      history.replaceState(null, '', `#${newSection}`);
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Trigger animation when clicking navbar
      this.animationState = 'void';
      setTimeout(() => {
        this.animationState = '*';
        element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }
}