import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedArticlesComponent } from './saved-articles.component';


const routes: Routes = [
    {
        path: '',
        component: SavedArticlesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SavedArticlesRoutingModule { }
