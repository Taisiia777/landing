import { Component, OnInit } from '@angular/core';

interface orderSummaryList {
  title:string;
  subTitle:string;
  price:string
}

@Component({
  selector: 'app-res-order-taking',
  templateUrl: './res-order-taking.component.html',
  styleUrls: ['./res-order-taking.component.scss']
})
export class ResOrderTakingComponent implements OnInit {
  selectedOrder="New";
  orderSummary: orderSummaryList[];
  constructor() { }

  ngOnInit(): void {
    this.orderSummary=[
      {
        title:'заказ #2323',
        subTitle:'Вчера',
        price:'234₽'
      },
      {
        title:'заказ #6543',
        subTitle:'Сегодня, 12:00',
        price:'543₽'
      },
      {
        title:'заказ #7342',
        subTitle:'Сегодня, 10:45',
        price:'983₽'
      }
    ]
  }

}
