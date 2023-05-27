import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      course:'Honours',
      institute:'Islamic University Kushtia',
      duration:'Studying',
      score:'%'
    },
    {
      course:'H.S.C',
      institute:'Amaresh Basu Collage, Magura',
      duration:'2019-2021',
      score:'77%'
    },
    {
      course:'S.S.C',
      institute:'Khalia High School, Magura',
      duration:'2017-2019',
      score:'77%'
    },
    {
      course:'Dawratul Hadith',
      institute:'Islamic Research Center, Bashundhara, Dhaka',
      duration:'2013-2020',
      score:'82%'
    },
  ];

  constructor() {}

ngOnInit(): void {}

}
