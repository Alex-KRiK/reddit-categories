import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
    exports: [
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatPaginatorModule,
        MatTreeModule,
        MatIconModule,
        MatFormFieldModule
    ],
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class MaterialModule { }
