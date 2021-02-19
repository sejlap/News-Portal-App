import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:65046/api";
  readonly PhotoUrl = "http://localhost:65046/Photos/";

  constructor(private http:HttpClient) { }

  getNewsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/News');
  }

  addNews(val:any){
    return this.http.post(this.APIUrl+'/News',val);
  }

  updateNews(val:any){
    return this.http.put(this.APIUrl+'/News',val);
  }

  getAdmList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Admins');
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Admins/SaveFile',val);
  }

}
