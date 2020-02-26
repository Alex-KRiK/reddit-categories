import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { CategoryService } from './../../../core/services/category.service';


@Component({
    selector: 'app-open-category',
    templateUrl: './open-category.component.html',
    styleUrls: ['./open-category.component.scss']
})
export class OpenCategoryComponent implements OnInit {

    enteredUrl: FormControl;

    constructor(
        private router: Router,
        private categoryService: CategoryService
    ) { }

    ngOnInit() {
        this.formInit();
    }

    private formInit(): void {
        this.enteredUrl = new FormControl('');
    }

    openCategory(staticUrl?: string): void {
        this.enteredUrl.value ? this.setCategoryUrl(this.enteredUrl.value) : this.setCategoryUrl(staticUrl);
        this.router.navigate(['category']);
    }

    private setCategoryUrl(categoryUrl: string): void {
        this.categoryService.setCategoryUrl(categoryUrl);
    }
}
