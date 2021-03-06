import { TokenservService } from './../token/tokenserv.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  data = {
    notification: {
      title: 'User Notification',
      body: 'add new User'
    },
    to: this.puastokenserve.getpushtoken()
  };
  constructor(
    private http: HttpClient,
    private puastokenserve: TokenservService,

  ) { }

  Getpushnotification() {
    const url = 'https://fcm.googleapis.com/fcm/send';
    this.http.post(url, this.data).toPromise();
  }
}
