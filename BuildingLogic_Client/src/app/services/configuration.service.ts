import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  constructor() { }
  columnsCofiguration = {
    user : ['name', 'username', 'email', 'company name', 'phone', 'select'],
  };

}
