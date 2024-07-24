// import { Component, OnInit } from '@angular/core';
// interface Receipe {
//   image:string;
//   name:string;
//   comments:string;
//   price:string;
//   count:string
// }
// @Component({
//   selector: 'res-order-list',
//   templateUrl: './res-order-list.component.html',
//   styleUrls: ['./res-order-list.component.scss']
// })
// export class ResOrderListComponent implements OnInit {
//   receipeList:Receipe[];

//   constructor() { }

//   ngOnInit(): void {
//     this.receipeList=[
//       {
//         image:'assets/CBiryani.jpg',
//         name:'Chicken Biryani',
//         comments:'Without Masala,Without Onion, Extra Chilli',
//         price:'1321',
//         count:'2'
//       },
//       {
//         image:'assets/Gobi.jpg',
//         name:'Gopi Manchurian',
//         comments:'',
//         price:'142',
//         count:'1'
//       },
//       {
//         image:'assets/idli.jpg',
//         name:'Idli',
//         comments:'Extra Sambhar',
//         price:'350',
//         count:'4'
//       },
  
//     ]
//   }

// }
import { Component, OnInit } from '@angular/core';

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
  receipeList: Recipe[];

  constructor() { }

  ngOnInit(): void {
    this.receipeList = [
      {
        image: 'assets/CBiryani.jpg',
        name: 'Куриный Бирьяни',
        comments: 'Без масалы, без лука, с дополнительным перцем чили',
        price: '1321',
        count: '2'
      },
      {
        image: 'assets/Gobi.jpg',
        name: 'Гоби Манчурия',
        comments: '',
        price: '142',
        count: '1'
      },
      {
        image: 'assets/idli.jpg',
        name: 'Идли',
        comments: 'С дополнительным самбаром',
        price: '350',
        count: '4'
      },
    ]
  }

}
