import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {


  constructor(private _http: Http) { }


  setup(data): Observable<any> {
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:8888/api/signup", data, headers).map(res =>{
      console.log(res);res.json()});
  }


  login(data): Observable <any>{
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this._http.post("http://localhost:8888/api/login",data,headers).map(res => res.json());
}

  // // Getting all the comics.
  // getComic(): Observable<any> {
  //   return this._http.get(this.urlGetComics).map(
  //     res => res.json());
  // }
  //
  // //Getting the specific comic.
  // getSpecificComic(comic_name): Observable<any> {
  //   // let headers = new Headers({ 'Content-Type': 'application/json' });
  //   // let options = new RequestOptions({ headers: headers });
  //   // headers.append('comic',"comic");
  //   return this._http.get(this.urlGetSpecificComic + comic_name);
  // }
  //
  //
  // postComic(data): Observable<any> {
  //   console.log("In Specific Comic");
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   console.log(data);
  //   return this._http.post(this.urlAddComic, data, headers).map(
  //     (res: Response) => res.json())
  // }
  //
  // deleteComic(data): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers, body: data });
  //   return this._http.delete(this.urlDeleteComic, options).map(
  //     (res: Response) => res.json())
  //   // this._http.delete
  // }

}
