import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginManager } from '../services/login.manager';

import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: './../templates/login.html'
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private loginManager: LoginManager,
        private http: Http
    ) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
           email: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
           password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
        });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*')

        let options = new RequestOptions({headers: headers});
        console.log('called');
        this.http.get('http://localhost:8080/test', options)
            .map(res => res.json())
            .subscribe(
                res => console.log(res),
                err => console.log('err')
            )
    }

    loginAttempt(model: any, isValid: boolean) {
        if(isValid) {
            this.loginManager.login(model);
        }
    }
}
