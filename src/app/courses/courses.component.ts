import { Component } from '@angular/core';
import { CoursesData } from '../data';
import { ICourse } from '../models/icourse';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  constructor(private appService:AppServiceService)
  {

  }

  angularCourse = CoursesData[0];
  dotNetCourse = CoursesData[1];
  courses = CoursesData;

  OnChildCourseViewed(course:ICourse)
  {
    console.log("Select Course is "+ course.name);
    this.appService.callService();
  }
}
