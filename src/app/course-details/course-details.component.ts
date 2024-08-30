import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../models/icourse';
import { CustomServiceService } from '../services/custom-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {

  constructor(private customService:CustomServiceService)
  {

  }

  @Input()
  course!:ICourse;

  @Output()
  courseSelected = new EventEmitter<ICourse>();

  birthday = new Date(1987, 6, 18);

  OnCourseViewed()
  {
    console.log("My course is "+this.course.name);
    this.courseSelected.emit(this.course);
    this.customService.welcomeService();
  }

}
