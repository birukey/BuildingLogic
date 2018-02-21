import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Item } from '../appmodels/item.model';

@Injectable()
export class CoreServiceService {
  constructor( private http: Http) { }
  search(model): Observable<any> {
              return this.http.get('http://localhost:8000/search/' + model)
                    .map((response: Response) => response.json());
  }
  create(model): Observable<any> {
    console.log(model);
    return this.http.post('http://localhost:8000/save', model)
          .map((response: Response) => response.json());
}
load(model, id): Observable<any> {
  return this.http.get('http://localhost:8000/get/' + model + '/' + id)
        .map((response: Response) => response.json());
}
update(data): Observable<any> {
  console.log(data);
  return this.http.put('http://localhost:8000/edit', data)
        .map((response: Response) => response.json());
}
delete(data): Observable<any> {
  console.log(data);
  return this.http.delete('http://localhost:8000/delete/' + data.model + '/' + data.id)
        .map((response: Response) => response.json());
}

}

