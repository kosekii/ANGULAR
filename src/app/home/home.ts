import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  fullName = 'John Matthew Robles';
  location = 'Angeles City, Pampanga, Philippines';
  email = 'jerobles@student.hau.edu.ph';
  phone = '+63 969 999 9999';

  profile = 'I am an aspiring website developer and UI designer interested in creating digital experiences that are clear, useful, and enjoyable to navigate. I like turning ideas into structured interfaces, from early wireframes and visual decisions to responsive pages built with code. My goal is to keep developing a strong foundation in front-end development while improving my understanding of user experience, accessibility, and visual design. I enjoy learning through hands-on projects, experimenting with different approaches, and refining small details that make a website feel considered. I aim to create work that balances simplicity, function, and personality.';

  skills = [
    'Responsive Web Design',
    'UI Design',
    'Front-End Development',
    'User Experience Design',
    'Wireframing',
    'Prototyping',
    'HTML Semantics',
    'Component-Based Development',
    'Visual Hierarchy',
    'Problem Solving'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'HTML5', level: 'Intermediate' },
    { tool: 'CSS3', level: 'Intermediate' },
    { tool: 'JavaScript', level: 'Beginner' },
    { tool: 'TypeScript', level: 'Beginner' },
    { tool: 'Angular', level: 'Beginner' },
    { tool: 'Figma', level: 'Intermediate' }
  ];

  projects = [
    { number: '01', title: 'Personal Portfolio', year: '2026', type: 'Web design / Development', href: '#about' },
    { number: '02', title: 'Restaurant Explorer', year: '2025', type: 'Development / Database', href: '#about' },
    { number: '03', title: 'Flores de Amor', year: '2025', type: 'Interface design', href: '#about' }
  ];

  message = 'Click any skill above to select it.';

  onSkillSelected(skill: string): void {
    this.message = `You selected: ${skill}`;
  }
}
