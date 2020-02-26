import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { MaterialModule } from './../../../../shared/libraries/material.module';

import { ArticleComponent } from './article.component';


@NgModule({
    declarations: [
        ArticleComponent
    ],
    imports: [
        CommonModule,
        ArticleRoutingModule,
        MaterialModule
    ]
})
export class ArticleModule { }
