import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
        // Rota padrão ou root ''
      {
        path: '', redirectTo: 'Courses', pathMatch: 'full'
      },
      {
        // Rota ** quando outra rota não funcionar
        path: '**', component: NotFound404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
