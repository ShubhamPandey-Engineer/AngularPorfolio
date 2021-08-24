import { WorkComponent } from './portfolio/work/work.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { HomeComponent } from './portfolio/home/home.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"",redirectTo:"about"},
{path:"about",component:HomeComponent},
{path:"skills",component:SkillsComponent},
{path:"contact",component:ContactComponent},
{path:"work",component:WorkComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
