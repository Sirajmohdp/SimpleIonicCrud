 import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
// import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { catchError, map, retry } from 'rxjs/operators';
import { AppConfig } from 'src/Class/AppConfig';
import { EMPTY } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    appconfig = new AppConfig()
  
    constructor(private loadingController:LoadingController,private http:HttpClient) { }
  
    InsertUsers(Users:any)
    {
      let headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options ={ headers: headers };
      return this.http.post(this.appconfig.url+"/Users",Users,options).pipe<any>(map(res=>res));
    } 
  
    GetAllUsers(){
      let headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options ={ headers: headers };
      return this.http.get(this.appconfig.url+"/Users",options).pipe(retry(3),catchError((error: HttpErrorResponse) => {return EMPTY}),map(res=>res));
    }
  
  
  
    DeleteUsersWithId(Id:any,Status:any){
      let headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options ={ headers: headers };
      return this.http.get(this.appconfig.url+"/Users?Id="+Id+'&Status='+Status,options).pipe(retry(3),catchError((error: HttpErrorResponse) => {return EMPTY}),map(res=>res));
    }
  }
  