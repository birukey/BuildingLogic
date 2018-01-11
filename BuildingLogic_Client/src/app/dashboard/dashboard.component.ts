import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { CoreServiceService } from '../services/core-service.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular//cdk/collections';
import { Item } from '../appmodels/item.model';
import { error } from 'util';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource = new MatTableDataSource() ;
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };
  data = [
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      passed: 'Yes',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      passed: 'Yes',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      passed: 'No',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      passed: 'Yes',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      passed: 'No',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      passed: 'No',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      email: 'Rey.Padberg@rosamond.biz',
      passed: 'Yes',
    },
  ];

  displayedColumns = ['name', 'email', 'phone', 'company'];
  constructor(private service: CoreServiceService) {

  }
  ngOnInit(): void {
  }
   /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  // tslint:disable-next-line:use-life-cycle-interface
}

// export class MDataSource extends DataSource<any> {
//   constructor( private service: CoreServiceService) {
//     super();
//   }
//   connect(): Observable<Item[]> {
//     // return this.service.getUser();
//   }
//   disconnect() {}
// }
