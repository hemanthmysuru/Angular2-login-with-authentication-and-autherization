import { Component, OnInit } from '@angular/core';
import { CrudManager } from './../services/crud.manager';
import { LoginManager } from './../services/login.manager';

@Component({
    templateUrl: './../templates/employee.home.html'
})
export class EmployeeHomeComponent implements OnInit {
    constructor(private crud: CrudManager, private loginManager: LoginManager) {
    }

    logout() {
        this.loginManager.logout();
    }

    ngOnInit() {
    }
}
