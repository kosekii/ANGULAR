import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = input.required<string[]>();
  skillSelected = output<string>();

  selectSkill(skill: string): void {
    this.skillSelected.emit(skill);
  }
}
