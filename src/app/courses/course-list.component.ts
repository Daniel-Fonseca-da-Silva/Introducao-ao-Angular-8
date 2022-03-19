import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    // Injetado course.service via injeção de dependência
    constructor(private courseService: CourseService) {}

    // ngOnInit Carregará course.service quando courselistcomponent for carregado
    ngOnInit(): void {
       this.courses = this.courseService.retrieveAll();
    }

    

}