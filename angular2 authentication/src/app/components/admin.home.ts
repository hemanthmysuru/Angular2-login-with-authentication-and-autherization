import { Component, OnInit } from '@angular/core';
import { CrudManager } from './../services/crud.manager';
import { LoginManager } from './../services/login.manager';

@Component({
    templateUrl: './../templates/admin.home.html',
})
export class AdminHomeComponent implements OnInit {
    constructor(private crud: CrudManager, private loginManager: LoginManager) {
    }

    logout() {
        this.loginManager.logout();
    }

    ngOnInit() {
        // this.crud.getAllData().subscribe(
        //     res => console.log(res)
        // );
    }
}
