import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { filter } from 'rxjs/operator/filter';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { CoreServiceService, Idata, User } from '../services/core-service.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Element } from '@angular/compiler';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { error } from 'util';
import { ConfigurationService } from '../services/configuration.service';
@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
   // displayedColumns = ['position', 'name', 'weight', 'symbol'];
   // displayedColumns = [ 'name', 'username', 'email', 'company name', 'select'];
  displayedColumns= null;
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);
  showSearch: boolean;
  showFilter: boolean;
  selectedRow: null;
  selectedRowKeys;
  constructor (private _service: CoreServiceService, public dialog: MatDialog, private _config: ConfigurationService) {
    this.showSearch = true;
    this.showFilter = false;
   }
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngOnInit () {
     let _data = null;
     this._service.getUser().subscribe(data => {
       _data = data;
       }, (err) => {
        console.log('err', err);
      }, () => {
        // CODE TO HANDLE ANY OPERAION AFTER DATA IS COMPLETELY LOADED
       for (let index = 0; index < _data.length; index++) {
         const element =  this.normalizeData(_data[index]);
         _data[index] = element;
       }
       this.dataSource.data = _data;
       this.displayedColumns = this._config.columnsCofiguration.user;
      //  for (const [key, value] of Object.entries(_data[0])) {
      //    this.displayedColumns.push(key);
      //  }
       console.log(this.dataSource.data);
      });
    }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  togglefilter() {
     this.showFilter = !this.showFilter;
    if (this.selection.selected.length > 0) {
      this.selection.clear();
    }
  }
  selectRow($event, row) {
    if ($event.checked) {
       this.selection.select(row);
   } else {
       this.selection.deselect(row);
      }
   if (this.selection.selected.length === 1) {
    this.selectedRow = this.selection.selected[0];
  } else {
    this.selectedRow = null;
  }
  }
  showColumn(): string {
        return this.showFilter ? null : 'hidden-row';
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
   this.selectedRow = null;
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  multiSection() {
    if (this.selection.selected.length > 0) {
      console.log( this.selection.selected);
    }
 }
 openDialog(): void {
  let dialogRef = this.dialog.open(DialogComponent, {
    width: '200',
    // TO DO
    // call a method that formats the data for the dialog, load image for the dialog
    data: {data: this.selectedRow ? this.normalizeData( this.selectedRow) : null, keys : Object.keys(this.normalizeData( this.selectedRow))}
  });
 // tthis.selectedRowKeys = Object.keys(this.selectedRow);
  this.normalizeData (this.selectedRow);
 // console.log(this.selectedRow);
  dialogRef.afterClosed().subscribe(result => {
   console.log('The dialog was closed');
   console.log(this.objectKeys({name: 'birukd', sex: 'male'}));
   });
}
//  flattens nested objects to property value pair and handles only one level object nesting
normalizeData(data: any): any {
  const normalform = { };
  for (const [key, value] of Object.entries(data)) {
    if (typeof data[key] === 'object') {
      for (const subkey of Object.keys(data[key])) {
      const subkeyName = key + ' ' + subkey;
      normalform[subkeyName] = data[key][subkey];
       }
    } else {
      normalform[key] = value;
    }
  }
   return normalform;
}

objectKeys(obj) {
  return Object.keys(obj);
}
}

