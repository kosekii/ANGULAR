import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little More About Me';
  description = 'I enjoy exploring how design and code work together to make websites feel clear and intuitive. I am currently building my skills in front-end development and interface design through practical projects and continuous learning.';
}
