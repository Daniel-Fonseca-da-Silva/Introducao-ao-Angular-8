import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from "../stars/star.component";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe,
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            // Rota para o recurso
        {
            path: 'Courses', component: CourseListComponent
        },
        {
            path: 'courses/info/:id', component: CourseInfoComponent
        }
    ])
    ]
})
export class CourseModule {

}