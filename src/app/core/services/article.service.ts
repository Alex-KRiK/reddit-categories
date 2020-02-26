import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { IComment, CommentData } from 'src/app/shared/models/comment.model';

import { take } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    commentsList: Array<CommentData> = [];

    constructor(
        private http: HttpClient
    ) { }

    getComments(permalink: string): void {
        const link = permalink.slice(0, length - 1) + '.json';

        this.http.get(environment.baseUrl + link).pipe(take(1)).subscribe(response => {
            this.getCommentsData(response[1].data.children);
        });
    }

    private getCommentsData(comments: Array<IComment>): void {
        this.commentsList.length = 0;

        comments.forEach((comment: IComment) => {
            this.commentsList.push(new CommentData(comment.data));
        });
    }

    get getCommentsList(): Array<CommentData> {
        return this.commentsList;
    }
}
