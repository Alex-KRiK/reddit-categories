import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../../../../core/services/category.service';
import { ArticleData } from 'src/app/shared/models/article.model';

import { environment } from './../../../../../environments/environment';

import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-saved-articles',
    templateUrl: './saved-articles.component.html',
    styleUrls: ['./saved-articles.component.scss']
})
export class SavedArticlesComponent implements OnInit {

    baseUrl = environment.baseUrl;
    PAGINATION_OPTIONS: Array<number> = [5, 10, 25];

    constructor(
        private categoryService: CategoryService,
        private router: Router,
    ) { }

    async ngOnInit() {
        this.getSavedArticles();
    }

    private getSavedArticles(): void {
        this.categoryService.getSavedArticles();
    }

    getArticles(): Array<ArticleData> {
        return this.categoryService.getArticleList;
    }

    changePage(pageOptions: PageEvent): void {
        this.categoryService.changePagination(pageOptions);
    }

    openArticle(article: ArticleData): void {
        this.router.navigate(['category', `${article.name}`, 'article']);
    }

    getpageOptions(): PageEvent {
        return this.categoryService.pageOptions;
    }
}
