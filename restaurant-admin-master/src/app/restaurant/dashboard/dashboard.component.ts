// import { Component, OnInit } from '@angular/core';
// import { OverviewCard } from '../restaurentModel';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {
//   overviewCard1: OverviewCard;
//   overviewCard2: OverviewCard;
//   overviewCard3: OverviewCard;
//   discountCard:OverviewCard;
//   data:any;
//   chartOptions:any;
//   constructor() { }

//   ngOnInit(): void {
//     this.overviewCard1={
//       icon:'./assets/foodicon.png',
//       title:'Pending Order',
//       subTitle:'2 new since last 1 hour',
//       count:'532',
//       tertColor:'#EA5167'
//       // bgColor:'linear-gradient(256deg, #65afc4 0%, #88c0d0 100%)'
//     }
//     this.overviewCard2={
//       icon:'./assets/deliver-food.png',
//       title:'Delivered Order',
//       subTitle:'5 new since last 1 hour',
//       count:'234',
//       bgColor:"linear-gradient(256deg, #f2c260 0%, #ebcb8b 100%)",
//       tertColor:'#88c0d0',
//       secColor:'#fcf5e8'
//     }
//     this.overviewCard3={
//       icon:'./assets/sales.png',
//       title:'Total Income',
//       subTitle:'2500-Online 2757-COD',
//       count:'10K',
//       bgColor:"linear-gradient(256deg, #8fb56f 0%, #a3be8c 100%)",
//       tertColor:'#F8E390',
//       secColor:'#f0f4ec'
//     }
//     this.discountCard ={
//       icon:'./assets/discount.png',
//       title:'Coupon Code',
//       subTitle:'Live: FISRT, CORONO100',
//       count:'231',
//       bgColor:"linear-gradient(256deg, #a4719b 0%, #b48ead 100%)",
//       tertColor:'#72CAAF',
//       secColor:'#f3ecf2'
//     }
//     this.data = {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [
//           {
//               label: 'Order Received',
//               data: [65, 59, 80, 81, 56, 55, 40],
//               fill: false,
//               borderColor: '#4bc0c0',
//           }
//       ]
//   }
//   this.chartOptions =  {
//     scales: {
//     xAxes: [{
//         gridLines: {
//             drawOnChartArea: false
//         }
//     }],
//     yAxes: [{
//         gridLines: {
//             drawOnChartArea: false
//         },
//         ticks: {
//           maxTicksLimit:7,
//         }
//     }]
//   // shpo/:false
//     }  }

//   }

// }



import { Component, OnInit } from '@angular/core';
import { OverviewCard } from '../restaurentModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  overviewCard1: OverviewCard;
  overviewCard2: OverviewCard;
  overviewCard3: OverviewCard;
  discountCard: OverviewCard;
  data: any;
  chartOptions: any;
  constructor() { }

  ngOnInit(): void {
    this.overviewCard1 = {
      icon: './assets/foodicon.png',
      title: 'Заказы за последний час',
      subTitle: '',
      count: '',
      tertColor: '#EA5167'
      // bgColor:'linear-gradient(256deg, #65afc4 0%, #88c0d0 100%)'
    }
    this.overviewCard2 = {
      icon: './assets/deliver-food.png',
      title: 'Заказы за день',
      subTitle: '',
      count: '',
      bgColor: "linear-gradient(256deg, #f2c260 0%, #ebcb8b 100%)",
      tertColor: '#88c0d0',
      secColor: '#fcf5e8'
    }
    this.overviewCard3 = {
      icon: './assets/sales.png',
      title: 'Общий доход',
      subTitle: '',
      count: '10К',
      bgColor: "linear-gradient(256deg, #8fb56f 0%, #a3be8c 100%)",
      tertColor: '#F8E390',
      secColor: '#f0f4ec'
    }
    this.discountCard = {
      icon: './assets/discount.png',
      title: 'Купонный код',
      subTitle: 'Активны: FIRST, CORONO100',
      count: '231',
      bgColor: "linear-gradient(256deg, #a4719b 0%, #b48ead 100%)",
      tertColor: '#72CAAF',
      secColor: '#f3ecf2'
    }
    this.data = {
      labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
      datasets: [
        {
          label: 'Полученные заказы',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0',
        }
      ]
    }
    this.chartOptions = {
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          gridLines: {
            drawOnChartArea: false
          },
          ticks: {
            maxTicksLimit: 7,
          }
        }]
      }
    }
  }
}
