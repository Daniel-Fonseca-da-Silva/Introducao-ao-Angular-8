import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    // Não tem selector devido a rota !
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string = ''; // _ indica que a variável irá ficar somente nesse elemento

    // Injetado course.service via injeção de dependência
    constructor(private courseService: CourseService) {}

    // ngOnInit Carregará course.service quando courselistcomponent for carregado
    ngOnInit(): void {
       this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        });
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        });
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course) =>
        course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }

}