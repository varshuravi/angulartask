import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SampleComponent } from './sample/sample.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { CreateteacherComponent } from './teacher/createteacher/createteacher.component';
import { TeacherlistComponent } from './teacher/teacherlist/teacherlist.component';
import { CreateworkerComponent } from './worker/createworker/createworker.component';
import { WorkerlistComponent } from './worker/workerlist/workerlist.component';



const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'student/studentlist',component:StudentlistComponent},
  {path:'student/createstudent',component:CreatestudentComponent},
  {path:'teacher/teacherlist',component:TeacherlistComponent},
  {path:'teacher/createteacher',component:CreateteacherComponent},
  {path:'worker/workerlist',component:WorkerlistComponent},
  {path:'worker/createworker',component:CreateworkerComponent},
  {path:'samplecomponent',component:SampleComponent},










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
