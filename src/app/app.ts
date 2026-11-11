import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  year = new Date().getFullYear();
  clickCount = 0;

  handleClick(): void {
    this.clickCount++;
  }
  profile = 'I am an aspiring website developer and UI designer interested in creating digital experiences that are clear, useful, and enjoyable to navigate. I like turning ideas into structured interfaces, from early wireframes and visual decisions to responsive pages built with code. My goal is to keep developing a strong foundation in front-end development while improving my understanding of user experience, accessibility, and visual design. I enjoy learning through hands-on projects, experimenting with different approaches, and refining small details that make a website feel considered. I aim to create work that balances simplicity, function, and personality.';
  skills = ['Responsive Web Design', 'UI Design', 'Front-End Development', 'User Experience Design', 'Wireframing', 'Prototyping', 'HTML Semantics', 'Component-Based Development', 'Visual Hierarchy', 'Problem Solving'];
  proficiencies = [
    { category: 'Development', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'PHP'] },
    { category: 'Design', items: ['Figma', 'Wireframing', 'Prototyping', 'Typography', 'Responsive UI'] },
    { category: 'Tools & Data', items: ['Git', 'GitHub', 'VS Code', 'Node.js', 'MongoDB', 'MySQL'] }
  ];
  projects = [
    { number: '01', title: 'Personal Portfolio', year: '2026', type: 'Web design / Development', href: '#about' },
    { number: '02', title: 'Restaurant Explorer', year: '2025', type: 'Development / Database', href: '#about' },
    { number: '03', title: 'Flores de Amor', year: '2025', type: 'Interface design', href: '#about' }
  ];
}
