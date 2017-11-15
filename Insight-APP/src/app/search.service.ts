import { Appconfig } from './app.config';
import { QueryDetails } from './querydetails';

import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService{
 constructor(private http:Http,private appconfig:Appconfig){

     console.log('Search Service Constructor');
 }
 private searchUrl = this.appconfig.graph_db_post_url;
 public passTerm:string;

 private headers = new Headers({'Content-Type': 'application/json'});

 search(term:string):Observable<QueryDetails> {
   this.passTerm=term;
   console.log(this.passTerm);
   var headers = new Headers();
   headers.append('Content-Type', 'application/json; charset=utf-8');
   headers.append('Authorization','Basic bmVvNGo6TmVvNGo=')
   if(term=="movieslikedbySashaank"){
   return this.http.post(this.searchUrl, JSON.stringify({query:"match(p:Person{name:'Sashaank'})-[r]-(b) return p,r,b"}),{ headers:headers }).map(response=>response.json()as QueryDetails);
  }
  if(term=="friendsofSneha"){
    return this.http.post(this.searchUrl, JSON.stringify({query:"match(p:Person{name:'Sneha'})-[r]-(b) return p,r,b"}),{ headers:headers }).map(response=>response.json()as QueryDetails);
  }
  if(term=="detailsofIshika"){
    return this.http.post(this.searchUrl, JSON.stringify({query:"match(p:Person{name:'Ishika'})-[r]-(b) return p,r,b"}),{ headers:headers }).map(response=>response.json()as QueryDetails);
 } 
 }
  

 
}