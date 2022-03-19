import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/imagens/atalho.png',
                price: 99.99,
                code: 'XPTS-1151',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 2, 2021'
            },
            {
                id: 2,
                name: 'Typescript: Forms',
                imageUrl: '/assets/imagens/calculadora.png',
                price: 99.99,
                code: 'TPTS-2262',
                duration: 80,
                rating: 5.0,
                releaseDate: 'January, 1, 2022'
            }
        ]
    }

    

}