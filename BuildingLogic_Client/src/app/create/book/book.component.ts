import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { CoreServiceService } from '../../services/core-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  errorMessage: String = 'good news ';
  item: Object = {};
  datpickerConfig: Partial<BsDatepickerConfig>;
  constructor(private _service: CoreServiceService, private router: Router) {
    this.datpickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue'});
  }
  ngOnInit() {
    const urlSegments = this.router.url.split('/');
    if (urlSegments[1] === 'edit' && urlSegments[2] && urlSegments[3]) {
      this._service.load(urlSegments[2], urlSegments[3] ).subscribe(data => {
        console.log(data);
        this.item = data.data;
      });
    }

  // if it is edit operation and id is valid
  console.log( 'edit url is : ' + this.router.url);
  }
  createItem(body: NgForm): void {
    const data = { model: 'book', data: body.value };
    if (!body.value._id) {
      this._service.create(data).subscribe(_data => {
        console.log(data.model + ' has been saved succefully ');
        }, (err) => {

        }, () => {
          this.RouteNavigate();
           });
    } else {
    this._service.update(data).subscribe(_data => {
      console.log(data.model + ' has been saved succefully ');
      }, (err) => {

      }, () => {
        this.RouteNavigate();
         });
        }
  }
    RouteNavigate(): void {
             this.router.navigate(['/search/book']);
  }
  delete(id): void {
    const data = { model: 'book', id: id};
    console.log(id);
    this._service.delete(data).subscribe(_data => {
      console.log(data.model + ' has been removed succefully ');
      }, (err) => {

      }, () => {
        this.RouteNavigate();
         });
}
}


