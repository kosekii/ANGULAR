import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  showProjects = true;

  projects = [
    { name: 'Personal Portfolio', tech: 'Angular, HTML and CSS' },
    { name: 'Restaurant Explorer', tech: 'Web Development and Database' },
    { name: 'Flores de Amor', tech: 'UI Design and Front-End Development' }
  ];

  selectedLevel = 'All';
  proficiencies: Proficiency[] = [
    { tool: 'HTML5', level: 'Intermediate' },
    { tool: 'CSS3', level: 'Intermediate' },
    { tool: 'JavaScript', level: 'Beginner' },
    { tool: 'TypeScript', level: 'Beginner' },
    { tool: 'Angular', level: 'Beginner' },
    { tool: 'Figma', level: 'Intermediate' }
  ];

  toggleProjects(): void {
    this.showProjects = !this.showProjects;
  }

  filteredProficiencies(): Proficiency[] {
    if (this.selectedLevel === 'All') {
      return this.proficiencies;
    }
    return this.proficiencies.filter(item => item.level === this.selectedLevel);
  }
}
