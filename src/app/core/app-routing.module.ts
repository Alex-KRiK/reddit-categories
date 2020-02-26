import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenCategoryComponent } from '../home/components/open-category/open-category.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./../core/authentication/authentication.module').then(m => m.AuthenticationModule),

    },
    {
        path: 'open-category',
        component: OpenCategoryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'category',
        loadChildren: () => import('./../home/pages/category/category.module').then(m => m.CategoryModule),
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
