import { Injectable } from '@angular/core';
import { CrudManager } from './crud.manager';
import { Router } from '@angular/router';

class SessionHolder {
    userActive: boolean = false;
    employeeActive: boolean = false;
    adminActive: boolean = false;

    constructor() {}

    private activatationManager(user: boolean, employee: boolean, admin: boolean) {
        this.userActive = user;
        this.employeeActive = employee;
        this.adminActive = admin;
    }

    sessionOwner(who: any): boolean {
        if(who != null && who != undefined) {
            this.activatationManager((who == 'user'), (who == 'employee'), (who == 'admin'));
            return true;
        }
        return false;
    }
}

@Injectable()
export class SessionManager {

    private sessionHolder: SessionHolder;
    public sessionExists: boolean = false;

    constructor(private crud: CrudManager, private router: Router) {
        this.sessionHolder = new SessionHolder();
    }


    public createSession(user: any) {
        if(!this.getSessionExists()) {
            window.localStorage.setItem('logger', JSON.stringify(user));
            this.sessionExists = true;
            this.syncSession(user);
        } else {
            this.sessionChecker();
        }
    }

    public sessionChecker() {
        if(this.getSessionExists()) {
            return this.setSessionHolder(this.convertSessionDataStringToJson().role);
        }
        return false;
    }

    private syncSession(user: any, callback?: any) {
        if(this.setSessionHolder(user.role)) {
            this.sessionNavigator();
        }
    }

    public sessionNavigator() {
        if(this.getSessionHolder().userActive) {
            this.router.navigate(['user']);
        } else if(this.getSessionHolder().employeeActive) {
            this.router.navigate(['employee']);
        } else if(this.getSessionHolder().adminActive) {
            this.router.navigate(['admin']);
        }
    }

    private setSessionHolder(role: string): boolean {
        return this.sessionHolder.sessionOwner(role);
    }

    public getSessionHolder(): SessionHolder {
        if(this.getSessionExists()) {
            return this.sessionHolder;
        }
        return null;
    }

    private convertSessionDataStringToJson() {
        return JSON.parse(this.getSessionStoredData());
    }

    private getSessionStoredData(): any {
        return window.localStorage.getItem('logger');
    }

    public getSessionExists(): boolean {
        if(this.getSessionStoredData() != null) {
            return true;
        }
        return false;
    }

    public destroySession() {
        window.localStorage.removeItem('logger');
        this.sessionHolder.sessionOwner('');
        this.sessionExists = false;
        this.router.navigate(['login']);
    }

}
