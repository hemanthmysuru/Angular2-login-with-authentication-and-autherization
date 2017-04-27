import { Component, OnInit } from '@angular/core';
import { CrudManager } from './../services/crud.manager';

@Component({
    template: '<h1>User Home Page</h1>',
})
export class UserHomeComponent implements OnInit {
    constructor(private crud: CrudManager) {
    }

    ngOnInit() {
        // this.crud.getAllData().subscribe(
        //     res => console.log(res)
        // );
    }
}
