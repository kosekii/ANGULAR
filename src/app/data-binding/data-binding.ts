import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  // Interpolation
  pageTitle = 'Data Binding';
  skills = ['HTML and CSS', 'JavaScript', 'TypeScript', 'Angular'];

  // Property and event binding
  skillName = 'Angular';
  skillLevel = 40;

  increase(): void {
    this.skillLevel = Math.min(this.skillLevel + 10, 100);
  }

  decrease(): void {
    this.skillLevel = Math.max(this.skillLevel - 10, 0);
  }

  // Two-way binding
  visitorName = '';
  visitorMessage = '';
}
