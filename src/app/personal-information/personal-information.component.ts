import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent  implements OnInit {
  myData: string[][] = [
    ['Name', 'Md. Golam Rabbi Noyon'],
    ['Date Of Birth', '01/01/2003'],
    ['Work Exp', '5 Months'],
    ['Education', 'Studying in Graduate'],
    ['Interests', 'Reading Book' ],

  ];
  aboutMe: string[] = [
    'I have been trying to learn programming for 5 months, at this time Looking back in my past, I can not find any other chapter except coding.',

    'I have become so involved with programming that coding has become an addiction. That is why when I finish a project at the right time, then I feel full of peace, joy, and a smile too.',
    
    'Finally, Dedicated and efficient full stack developer with  8 days of experience in application layers, presentation layers, and databases.'
  ]
  constructor() {}

  ngOnInit(): void {
    
  }

}
