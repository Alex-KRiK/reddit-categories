import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
    {
        path: '',
        component: CategoryComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: ListComponent
            },
            {
                path: 'saved',
                loadChildren: () => import('./../../pages/category/saved-articles/saved-articles.module').then(m => m.SavedArticlesModule)
            },
            {
                path: ':id/article',
                loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
            },
            {
                path: '**',
                loadChildren: () => import('./../../../core/authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }
