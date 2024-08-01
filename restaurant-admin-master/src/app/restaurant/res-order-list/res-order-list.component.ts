


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Recipe {
//   image: string;
//   name: string;
//   comments: string;
//   price: string;
//   count: string;
// }

// @Component({
//   selector: 'res-order-list',
//   templateUrl: './res-order-list.component.html',
//   styleUrls: ['./res-order-list.component.scss']
// })
// export class ResOrderListComponent implements OnInit {
//   receipeList: Recipe[] = [];

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.fetchOrders();
//   }

//   fetchOrders(): void {
//     this.http.get<any[]>('http://localhost:5000/api/orders')
//       .subscribe(orders => {
//         this.receipeList = orders.map(order => ({
//           image: 'assets/placeholder.png', // Замена на фактическое изображение, если оно есть
//           name: order.productName,
//           comments: '', // Можете добавить комментарии, если они есть в данных
//           price: order.productPrice.toString(),
//           count: order.quantity.toString()
//         }));
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Recipe {
  image: string;
  name: string;
  comments: string;
  price: string;
  count: string;
}

@Component({
  selector: 'res-order-list',
  templateUrl: './res-order-list.component.html',
  styleUrls: ['./res-order-list.component.scss']
})
export class ResOrderListComponent implements OnInit {
  receipeList: Recipe[] = [];
  customerAddress: string = '';
  customerPhone: string = '';
  preparationTime: string = '00ч:25м:30с'; // Пример, можете изменить на динамическое значение

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.http.get<any[]>('http://localhost:5000/api/orders')
      .subscribe(orders => {
        if (orders.length > 0) {
          const order = orders[0]; // Берем первый заказ для примера
          this.customerAddress = order.customerAddress;
          this.customerPhone = order.customerPhone;
          
          this.receipeList = orders.map(order => ({
            image: 'assets/placeholder.png', // Замена на фактическое изображение, если оно есть
            name: order.productName,
            comments: '', // Можете добавить комментарии, если они есть в данных
            price: order.productPrice.toString(),
            count: order.quantity.toString()
          }));
        }
      });
  }
}
