import { SocialUser } from 'angular4-social-login';
import { Appconfig } from './../app.config';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    private headers = new Headers({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});
    constructor(private http: Http, private config: Appconfig) { }

//    getAll() {
//         return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
//     }

//    getById(id: number) {
//         return this.http.get(this.config.apiUrl + '/users/' + id, this.jwt()).map((response: Response) => response.json());
//     }

   create(user: User) {
        return this.http.post(this.config.apiUrl_register, user, this.jwt());
    }
//    socialregister(user: SocialUser){
//          return this.http.post(this.config.apiUrl_social,user).map(response => response.json());
//      }
     socialregister(user:SocialUser){
        return this.http.post(this.config.apiUrl_social,JSON.stringify(user),{headers: this.headers})
     .toPromise()
     .then((res)=>console.log("sumant"+res),
           (err)=>console.log(err))
     .catch((ress) =>console.log("error caught",ress))
     }

//    update(user: User) {
//         return this.http.put(this.config.apiUrl + '/users/' + user.id, user, this.jwt());
//     }

//    delete(id: number) {
//         return this.http.delete(this.config.apiUrl + '/users/' + id, this.jwt());
//     }

   // private helper methods

   private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}