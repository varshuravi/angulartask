import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TeacherlistComponent } from './teacher/teacherlist/teacherlist.component';
import { CreateteacherComponent } from './teacher/createteacher/createteacher.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { WorkerlistComponent } from './worker/workerlist/workerlist.component';
import { CreateWorkerComponent } from './worker/createworker/createworker.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomepageComponent,
    TeacherlistComponent,
    CreateteacherComponent,
    StudentlistComponent,
    CreatestudentComponent,
    WorkerlistComponent,
    CreateWorkerComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
