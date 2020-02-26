import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private user: any;

    constructor(
        private angularFireAuth: AngularFireAuth,
        private router: Router
    ) { }

    anonymousLogin(): void {
        this.angularFireAuth.auth.signInAnonymously().then( () => {
            this.setCurrentUser(this.angularFireAuth.auth.currentUser);
            this.goToOpenCatalogState();
        })
        .catch(error => {
            throw(error);
        });
    }

    private goToOpenCatalogState(): void {
        this.router.navigate(['open-category']);
    }

    async logOut(): Promise<void> {
        await this.angularFireAuth.auth.signOut();
        this.user = null;
        this.router.navigate(['auth']);
    }

    private setCurrentUser(user: any): void {
        this.user = user;
    }

    get isAuthenticatedUser(): boolean {
        return !!this.user;
    }
}
