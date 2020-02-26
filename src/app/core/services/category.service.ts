import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FirebaseStorageService } from 'src/app/core/services/firebase-storage.service';

import { ICategoryListing, ICategory } from 'src/app/shared/models/category.model';
import { IArticle, ArticleData } from 'src/app/shared/models/article.model';

import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    category: ICategory;
    articleList: Array<ArticleData> = [];

    pageOptions: PageEvent = {
        length: 25,
        pageSize: 10,
        previousPageIndex: 0,
        pageIndex: 0
    };

    private categoryUrl: string;
    private savedArticleList: Array<ArticleData> = [];

    constructor(
        private http: HttpClient,
        private firebaseStorageService: FirebaseStorageService
    ) { }


    getCategory(pageOptions: PageEvent): any {
        const params = {} as any;

        if (pageOptions.length < (pageOptions.pageIndex + 1) * pageOptions.pageSize) {
            params.limit = (pageOptions.pageIndex + 1) * pageOptions.pageSize - pageOptions.length;
        } else {
            params.limit = pageOptions.pageSize;
        }

        if (pageOptions.pageIndex > pageOptions.previousPageIndex) {
            params.after = this.articleList[this.articleList.length - 1].name;
        } else if (pageOptions.pageIndex < pageOptions.previousPageIndex) {
            params.before = this.articleList[0].name;
        }

        return this.http.get(this.getCategoryUrl(), { params }).pipe(take(1)).subscribe((response: ICategoryListing) => {
            this.category = response.data;
            return this.getArticleData();
        });
    }

    private getArticleData(): void {
        this.articleList.length = 0;
        this.category.children.forEach((article: IArticle) => {
            this.articleList.push(new ArticleData(article.data));
        });

        this.getSavedArticles(true);
    }

    private getCategoryUrl(): string {
        return this.categoryUrl;
    }

    setCategoryUrl(url: string): void {
        if (url) {
            this.categoryUrl = url;
        }
    }

    changePagination(pageOptions: PageEvent): void {
        this.articleList.length = 0;
        this.articleList.push(
            ...this.savedArticleList.slice(pageOptions.pageIndex * pageOptions.pageSize,
                pageOptions.pageIndex * pageOptions.pageSize + pageOptions.pageSize)
        );
    }

    private setArticleList(articles: Array<ArticleData>): void {
        this.articleList.length = 0;
        this.articleList.push(...articles);
        this.pageOptions.length = this.articleList.length;
        this.changePagination(this.pageOptions);
    }

    get getArticleList(): Array<ArticleData> {
        return this.articleList;
    }

    getSavedArticles(checkSaved?: boolean): void {
        this.firebaseStorageService.getArticles().pipe(take(1)).subscribe(response => {
            const articles = [] as Array<ArticleData>;
            response.map(el => {
                articles.push({
                    id: el.payload.doc.id,
                    ...el.payload.doc.data()
                });
            });

            this.savedArticleList.length = 0;
            this.savedArticleList.push(...articles);
            !checkSaved ? this.setArticleList(articles) : this.checkSavedArticles(articles);
        });
    }

    private checkSavedArticles(articles: Array<ArticleData>): void {
        this.articleList.forEach((downloadedArticle: ArticleData) => {
            articles.forEach((savedArticle: ArticleData) => {
                if (downloadedArticle.permalink === savedArticle.permalink) {
                    downloadedArticle.saved = true;
                }
            });
        });
    }
}
