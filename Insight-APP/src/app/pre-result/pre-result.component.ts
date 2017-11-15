import { Appconfig } from './../app.config';
import { ContentID } from './../ContentID';
import { Content } from './../Content';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pre-result',
  templateUrl: './pre-result.component.html',
  styleUrls: ['./pre-result.component.css']
})
export class PreResultComponent implements OnInit {
 id: number;
  public content: ContentID[];
  url:string;
 constructor(private http: Http,private appconfig:Appconfig) {
   this.url=this.appconfig.editor_url;
   console.log(this.url);
   
   http.get(this.url).subscribe(result => {
      this.content = result.json() as ContentID[];
    }, error => console.error(error));
  }

 edit(id: number)
  {
    this.id = id;
  }

 ngOnInit() {
    
 }


}