import { Injectable } from '@angular/core';
import { CrudManager } from './crud.manager';
import { SessionManager } from './session.manager';

@Injectable()
export class LoginManager {

    constructor(
        private crud: CrudManager,
        private session: SessionManager,
    ) {}

    login(model: any) {
        let url = 'app/misc/user.json';
        this.crud.getAllData(url).subscribe(
            res => this.session.createSession(res),
            err => console.log(err)
        );
    }

    isLoggedIn(): boolean {
        return (localStorage.getItem('logger') !== null);
    }

    logout(): void {
        this.session.destroySession();
    }

}
