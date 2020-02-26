import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../../../../core/services/category.service';
import { FirebaseStorageService } from 'src/app/core/services/firebase-storage.service';
import { ArticleData } from 'src/app/shared/models/article.model';

import { environment } from './../../../../../environments/environment';

import { PageEvent } from '@angular/material/paginator';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    PAGINATION_OPTIONS: Array<number> = [5, 10, 25];
    pageOptions: PageEvent = {
        length: 25,
        pageSize: 10,
        previousPageIndex: 0,
        pageIndex: 0
    };

    baseUrl = environment.baseUrl;

    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private firebaseStorageService: FirebaseStorageService
    ) { }

    ngOnInit() {
        this.getCategory(this.pageOptions);
    }

    private getCategory(pageOptions: PageEvent): void {
        this.categoryService.getCategory(pageOptions);
    }

    getArticles(): Array<ArticleData> {
        return this.categoryService.getArticleList;
    }

    changePage(pageOptions: PageEvent): void {
        this.getCategory(pageOptions);
    }

    openArticle(article: ArticleData): void {
        this.router.navigate(['category', `${article.name}`, 'article']);
    }

    saveArticle(article: ArticleData): void {
        article.saved = true;
        this.firebaseStorageService.createArticle(article);
    }
}
