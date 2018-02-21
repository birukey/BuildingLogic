import { Injectable } from '@angular/core';
import { BookComponent } from '../create/book/book.component';

@Injectable()
export class ConfigurationService {

  constructor() { }
  columnsCofiguration = {
    user : ['name', 'username', 'email', 'company name', 'phone', 'select'],
    book : ['title', 'author', 'published_year', 'publisher', 'select']
  };
   entryComponentsMap = {
    'book': BookComponent,
  };
}
