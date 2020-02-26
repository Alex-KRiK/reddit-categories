import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { ArticleData } from 'src/app/shared/models/article.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class FirebaseStorageService {

    constructor(
        private firestore: AngularFirestore
    ) { }

    createArticle(article: ArticleData): void {
        this.firestore.collection('articles').add({ ...article });
    }

    getArticles(): Observable<any> {
        return this.firestore.collection('articles').snapshotChanges();
    }
}
