import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppPipeModule } from "../pipe/pipe/app.pipe.module";
import { StarModule } from "../shared/component/stars/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        StarModule,
        AppPipeModule,
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