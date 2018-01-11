import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Item } from '../appmodels/item.model';

@Injectable()
export class CoreServiceService {

  constructor( private http: Http) { }

  getUser(): Observable<Idata[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
                    .map((response: Response) => <Idata[]>response.json());
  }
}

export interface Idata {

}
export class User implements Idata {
  name: string;
  username: string;
  email: string;
  company: string;
}
