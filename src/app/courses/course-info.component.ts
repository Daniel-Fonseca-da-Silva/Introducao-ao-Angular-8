import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    
    course: Course = new Course;

    // ActivatedRoute consegue captura o id do elemento atual
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}
    
    ngOnInit(): void {
        this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err) 
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Course was saved with sucess', course),
            error: err => console.log('Error', err)
        });
    }

}
