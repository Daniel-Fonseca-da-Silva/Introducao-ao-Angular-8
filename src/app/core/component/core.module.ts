import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NotFound404Component } from "./not-found-404/not-found-404.component";

@NgModule({
    declarations: [
        NavBarComponent,
        NotFound404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                // Rota ** quando outra rota não funcionar
                path: '**', component: NotFound404Component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule{}