import { PushNotification } from './interceptor/push-notification';
import { MessagingService } from './service/messaging.service';
import { environment } from './../environments/environment.prod';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentEditComponent } from './components/table/student-edit/student-edit.component';
import { StudentViewComponent } from './components/table/student-view/student-view.component';
import { DemoMaterialModule } from './material/material/material.module';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire';
import { AsyncPipe } from '@angular/common';
import { SettingComponent } from './components/setting/setting.component';


@NgModule({
  declarations: [AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentEditComponent,
    StudentViewComponent,
    SettingComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DemoMaterialModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: PushNotification,
  //   multi: true
  // },
   AsyncPipe, MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
