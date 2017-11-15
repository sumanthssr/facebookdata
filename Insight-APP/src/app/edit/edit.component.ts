import { Appconfig } from './../app.config';
import { ContentID } from './../ContentID';
import { PreResultComponent } from './../pre-result/pre-result.component';
import { Component, OnInit } from '@angular/core';
import { Content } from './../Content';
import { Http } from '@angular/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 public obj: PreResultComponent;
  public content: ContentID;
  url:string;
  id: number = this.obj.id;

 constructor(private http: Http,private appconfig:Appconfig) {
  this.url=this.appconfig.editor_url;
   http.get(this.url + this.id).subscribe(result => {
      this.content = result.json() as ContentID;
    }, error => console.error(error));
  }

 ngOnInit() {
  }

}