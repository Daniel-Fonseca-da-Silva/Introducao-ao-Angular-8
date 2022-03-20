import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    
    courseId: number = 0;

    // ActivatedRoute consegue captura o id do elemento atual
    constructor(private activatedRoute: ActivatedRoute) {}
    
    ngOnInit(): void {
        this.courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    }

}