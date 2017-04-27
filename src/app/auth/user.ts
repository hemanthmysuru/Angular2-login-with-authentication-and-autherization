import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Router } from '@angular/router';
import { SessionManager } from '../services/session.manager';

@Injectable()
export class UserGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private session: SessionManager
    ) {}

    canActivate(): boolean {
        if(this.session.sessionChecker()) {
            if(this.session.getSessionHolder().employeeActive) {
                this.router.navigate(['employee']);
            } else if(this.session.getSessionHolder().adminActive) {
                this.router.navigate(['admin']);
            }
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }

    canActivateChild(): boolean {
        console.log('checking child route access');
        return true;
    }
}
