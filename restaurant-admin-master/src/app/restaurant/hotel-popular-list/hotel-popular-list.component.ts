// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'hotel-popular-list',
//   templateUrl: './hotel-popular-list.component.html',
//   styleUrls: ['./hotel-popular-list.component.scss']
// })
// export class HotelPopularListComponent implements OnInit {
//   popularList =[]
//   constructor() { }

//   ngOnInit(): void {
//     this.popularList=[
//       {
//         image:'assets/CBiryani.jpg',
//         header:'Hyderabad Chicken Biryani',
//         price:'5,334',
//         order:'30'
//       },
//       {
//         image:'assets/Gobi.jpg',
//         header:'Gopi Manchurian',
//         price:'2,781',
//         order:'28'
//       },
//       {
//         image:'assets/idli.jpg',
//         header:'Idli',
//         price:'1,562',
//         order:'20'
//       }
//     ]
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-popular-list',
  templateUrl: './hotel-popular-list.component.html',
  styleUrls: ['./hotel-popular-list.component.scss']
})
export class HotelPopularListComponent implements OnInit {
  popularList = []
  constructor() { }

  ngOnInit(): void {
    this.popularList = [
      {
        image: 'assets/CBiryani.jpg',
        header: 'Гидерабадский куриный бирьяни',
        price: '5,334',
        order: '30'
      },
      {
        image: 'assets/Gobi.jpg',
        header: 'Гоби Манчуриан',
        price: '2,781',
        order: '28'
      },
      {
        image: 'assets/idli.jpg',
        header: 'Идли',
        price: '1,562',
        order: '20'
      }
    ]
  }

}

