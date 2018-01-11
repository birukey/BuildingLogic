import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { MenuComponent } from './layout/menu.component';
import { SetttingsComponent } from './layout/setttings.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RoutesRecognized } from '@angular/router/src/events';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { ListitemComponent } from './listitem/listitem.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CoreServiceService } from './services/core-service.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { ConfigurationService } from './services/configuration.service';
import { ColumnstitlePipe } from './pipes/columnstitle.pipe';


const appRoutes: Routes = [
{path : 'dashboard' , component : DashboardComponent},
{path : 'report' , component : ReportComponent},
{path : 'contract' , component : ListitemComponent},
{path : 'tenant' , component : ListitemComponent},
{path : 'room' , component : ListitemComponent},
{path : 'floor' , component : ListitemComponent},
{path : 'block' , component : ListitemComponent},
{path : 'appllication' , component : ListitemComponent},
{path : 'user' , component : ListitemComponent},
{path : 'role' , component : ListitemComponent},
{path : 'application' , component : ListitemComponent},
{path : 'permission' , component : ListitemComponent},
{path : 'payment' , component : ListitemComponent},
{path : '' , redirectTo: '/dashboard', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SetttingsComponent,
    CatalogComponent,
    DashboardComponent,
    ReportComponent,
    ListitemComponent,
    DialogComponent,
    ColumnstitlePipe,
        ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
        Ng2SmartTableModule,
        NgxDatatableModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSortModule,
        FormsModule,
        MatButtonModule
       ],
  entryComponents: [ DialogComponent ],
  providers: [CoreServiceService, ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
