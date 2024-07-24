import { Component } from '@angular/core';
import { MessagingService } from './messaging.service';
import {RestaurantService } from './service/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-app-angular';
  dialogVisible: boolean;
  message;

  constructor(private messagingService: MessagingService,private db:RestaurantService) { }

  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage;
    // this.db.getRestaurant().subscribe(data=>{
    //   data.map(item=>{
    //     console.log(item.payload.doc.data(),'rest list==========>')
    //   });     
    // })
  }
}
