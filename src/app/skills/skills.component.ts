import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: '60%'
    },
    {
      name: 'HTML',
      level: 'Expart',
      rating: '80%'
    },
    {
      name: 'CSS',
      level: 'Intermidiate',
      rating: '75%'
    },
    {
      name: 'Java Script',
      level: 'Intermidiate',
      rating: '60%'
    },
    {
      name: 'Type Script',
      level: 'Intermidiate',
      rating: '50%'
    },
  ];
  constructor() {}
  ngOnInit(): void {
    
  }

}
