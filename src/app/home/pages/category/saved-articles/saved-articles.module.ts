import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedArticlesRoutingModule } from './saved-articles-routing.module';
import { MaterialModule } from 'src/app/shared/libraries/material.module';

import { SavedArticlesComponent } from './saved-articles.component';


@NgModule({
    declarations: [
        SavedArticlesComponent
    ],
    imports: [
        CommonModule,
        SavedArticlesRoutingModule,
        MaterialModule
    ]
})
export class SavedArticlesModule { }
