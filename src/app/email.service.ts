import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }




 sendMail(name,email,subject,message){
       return this.http.post('/contact?name='+name+'&email='+email+'&subject='+subject+'&message'+message,{})
      .map(res => res.json()).catch(this._errorHandler);
  }

  _errorHandler(error:Response){
          console.error(error);
          return Observable.throw(error || "Server Error");
      }
}