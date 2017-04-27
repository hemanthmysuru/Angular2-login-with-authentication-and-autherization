import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Router } from '@angular/router';
import { SessionManager } from '../services/session.manager';

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private session: SessionManager
    ) {}

    canActivate(): boolean {
        console.log(this.session.sessionChecker());
        if(this.session.sessionChecker()) {
            if(this.session.getSessionHolder().userActive) {
                this.router.navigate(['user']);
            } else if(this.session.getSessionHolder().employeeActive) {
                this.router.navigate(['employee']);
            }
            return true;
        }
        // console.log(this.session.getSessionHolder());
        this.router.navigate(['login']);
        return false;
    }

    canActivateChild(): boolean {
        console.log('checking child route access');
        return true;
    }
}
