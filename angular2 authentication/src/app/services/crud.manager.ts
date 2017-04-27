import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CrudManager {

    constructor(private http: Http) {}

    private getRequestOptions(): RequestOptions {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        return options;
    }

    getAllData(url: string): Observable<any[]> {
        
        return this.http.get(url, this.getRequestOptions)
                   .map((res: Response) => res.json());
    }

    getDataById(id: number): Observable<any[]> {
        return this.http.get('--URL--/id', this.getRequestOptions)
                   .map((res: Response) => res.json());
    }

    postData(): Observable<any[]> {
        let body = null;
        return this.http.post('--URL--', body, this.getRequestOptions)
                   .map((res: Response) => res.json());
    }

    deleteData(): Observable<any[]> {
        return this.http.delete('--URL--/id', this.getRequestOptions)
                   .map((res: Response) => res.json());
    }

    updateData(): Observable<any[]> {
        let body = null;
        return this.http.put('--URL--/id', body, this.getRequestOptions)
                   .map((res: Response) => res.json());
    }
}
