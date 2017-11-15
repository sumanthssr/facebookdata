import { Appconfig } from './../app.config';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: Appconfig) { }

   login(username: string, password: string,secret: string) {
        return this.http.post(this.config.apiUrl, { username: username, password: password ,secret:secret})
            .map((response => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user&&user.token) {
                    
                   // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            }));
    }

   logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}