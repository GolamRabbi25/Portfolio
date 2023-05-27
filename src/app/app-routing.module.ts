import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'Home',component: BanerComponent},
  {path:'Personal Informaition',component: PersonalInformationComponent},
  {path:'Educational Information',component: EducationComponent},
  {path:'Skills',component: SkillsComponent},
  {path:'Projects',component: ProjectComponent},
  {path:'Contact Me',component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
