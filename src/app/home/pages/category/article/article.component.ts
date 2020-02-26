import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../../../core/services/article.service';
import { CategoryService } from '../../../../core/services/category.service';

import { ArticleData } from './../../../../shared/models/article.model';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';


@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    dataSource = new MatTreeNestedDataSource<any>();
    treeControl = new NestedTreeControl<any>(node => node.comments);
    article: ArticleData;
    hasChild = (_: number, node: any) => !!node.comments && node.comments.length > 0;

    constructor(
        private articleService: ArticleService,
        private activatedRoute: ActivatedRoute,
        private categoryService: CategoryService
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe( (response: Params) => {
            const articleId = response.get('id');
            this.getArticle(articleId);
            this.getComments();
        });
    }

    private getComments(): void {
        this.articleService.getComments(this.article.permalink);
    }

    getCommentsList(): void {
        this.dataSource.data = this.articleService.getCommentsList;
    }

    getArticle(id: string): void {
        this.article = this.categoryService.articleList.find(article => article.name === id);
    }
}
