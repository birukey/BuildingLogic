import { Component, OnInit, AfterViewInit, AfterContentInit,
  Renderer, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigurationService } from '../services/configuration.service';

@Component({
selector: 'app-edit',
templateUrl: './edit-item.component.html',
styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit, AfterContentInit {
  [x: string]: any;
  model: string;

@ViewChild('formcontainer', {read: ViewContainerRef})formcontainer;
constructor(private config: ConfigurationService,
  private _router: Router, private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }
ngOnInit() {
  }
ngAfterContentInit() {
   const urlSegments = this._router.url.split('/');
     if (urlSegments[1] === 'edit' && urlSegments[2]) {
         if (this.config.entryComponentsMap[urlSegments[2]]) {
          this.model = urlSegments[2];
          const model = urlSegments[2];
          const comp = this.config.entryComponentsMap[model];
          const factory = this.resolver.resolveComponentFactory(comp);
          this.componentRef = this.formcontainer.createComponent(factory);
         }
   }
}
}
