import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [
    { tittle: 'List, Form, Table',
      technologies: 'HTML',
      description: ['I have made the Form,List and Table work through HTML '],
    },
    { tittle: 'Grid, Flex',
      technologies: 'CSS',
      description: ['I have used Grid and Flex in various card works through CSS'],
    },
    { tittle: 'Framework',
      technologies: 'Angular, Angular Material',
      description: [' I Worked on the Component, Angular Material,Data Manage & Http Client Module While Working on the Framework'],
    },
  ];

  constructor() {}
  ngOnInit(): void {
    
  }

}
