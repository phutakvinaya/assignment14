import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';
export const routes: Routes = [
    {path:'technologies',component:TechnologiesComponent},
    {path:'books',component:BooksComponent},
    {path:'**',component:InvalidpageComponent}
];
