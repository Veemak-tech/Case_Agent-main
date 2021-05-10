
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table'
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './components/products/products.module';
import { UsersModule } from './components/users/users.module';
import { SettingModule } from './components/setting/setting.module';
import { AuthModule } from './components/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwPaginationModule } from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import { Angular2CsvModule } from 'angular2-csv';
import { CommonModule } from '@angular/common';






@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SettingModule,
    AuthModule,
    SharedModule,
    ProductsModule,
    UsersModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    Ng2SmartTableModule,
    //NgxBootstrapIconsModule.pick(allIcons),
    ToastrModule.forRoot(),
    NgxPaginationModule,
     JwPaginationModule,
     Angular2CsvModule,
     CommonModule,
     ChartsModule


  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],

  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,

    }
  ],

    bootstrap: [AppComponent]
  })
export class AppModule { }
