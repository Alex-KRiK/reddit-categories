import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';

import { ListComponent } from './list/list.component';
import { CategoryComponent } from './category.component';

import { MaterialModule } from './../../../shared/libraries/material.module';



@NgModule({
    declarations: [
        CategoryComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        MaterialModule
    ]
})
export class CategoryModule { }
