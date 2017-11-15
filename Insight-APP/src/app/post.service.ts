import { Appconfig } from './app.config';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PostService {
    constructor(private http: Http,private appconfig:Appconfig) {

   }

   private urlEditor=this.appconfig.editor_url;

   content: Content;

   postContent(content: string) {

       this.content = new Content(content);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

       this.http.post(this.urlEditor, JSON.stringify(this.content), options)
            .subscribe(
            () => { console.log('Success') }
            );
    }
}