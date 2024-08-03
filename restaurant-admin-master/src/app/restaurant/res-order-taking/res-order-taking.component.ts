





// import { Component, OnInit } from '@angular/core';
// import { OrderService } from '../../order.service';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';

// interface Product {
//   productName: string;
//   productPrice: number;
//   OrderProduct: {
//     quantity: number;
//   };
// }

// interface orderSummaryList {
//   title: string;
//   subTitle: string;
//   price: string;
//   customerAddress?: string;
//   customerPhone?: string;
//   products: Product[]; // Добавляем свойство products
// }

// @Component({
//   selector: 'app-res-order-taking',
//   templateUrl: './res-order-taking.component.html',
//   styleUrls: ['./res-order-taking.component.scss']
// })
// export class ResOrderTakingComponent implements OnInit {
//   selectedOrder = "New";
//   orderSummary: orderSummaryList[] = [];

//   constructor(private orderService: OrderService) { }

//   ngOnInit(): void {
//     this.fetchOrders();
//   }

//   // fetchOrders(): void {
//   //   this.orderService.getOrders().subscribe((orders: any[]) => {
//   //     this.orderSummary = orders.map(order => ({
//   //       title: `Заказ #${order.id}`,
//   //       subTitle: new Date(order.orderDate).toLocaleString(),
//   //       price: `${order.productPrice}₽`,
//   //       customerAddress: order.customerAddress,
//   //       customerPhone: order.customerPhone
//   //     }));
//   //   });
//   // }
//   fetchOrders(): void {
//     this.orderService.getOrders().subscribe((orders: any[]) => {
//       this.orderSummary = orders.map(order => ({
//         title: `Заказ #${order.id}`,
//         subTitle: new Date(order.orderDate).toLocaleString(),
//         price: `${order.Products.reduce((total, product) => total + product.productPrice * product.OrderProduct.quantity, 0)}₽`,
//         customerAddress: order.customerAddress,
//         customerPhone: order.customerPhone,
//         products: order.Products // добавляем продукты в orderSummary
//       }));
//     });
//   }
  
//   exportToExcel(): void {
//     const dataToExport = this.orderSummary.map(order => ({
//       Название: order.title,
//       Дата: order.subTitle,
//       Цена: order.price,
//       Адрес: order.customerAddress || '',
//       Телефон: order.customerPhone || '',
//       Продукты: order.products.map(product =>
//         `${product.productName} (x${product.OrderProduct.quantity}) - ${product.productPrice}₽`
//       ).join(', ')
//     }));
  
//     const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
//     const wb: XLSX.WorkBook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Заказы');
  
//     const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//     this.saveAsExcelFile(excelBuffer, 'orders_week');
//   }
  

//   private saveAsExcelFile(buffer: any, fileName: string): void {
//     const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
//     saveAs(data, `${fileName}_export_${new Date().getTime()}.xlsx`);
//   }
// }
// const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';



// res-order-taking.component.ts

import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface Product {
  productName: string;
  productPrice: number;
  OrderProduct: {
    quantity: number;
  };
}

interface orderSummaryList {
  title: string;
  subTitle: string;
  price: string;
  customerAddress?: string;
  customerPhone?: string;
  products: Product[]; // Добавляем свойство products
}

@Component({
  selector: 'app-res-order-taking',
  templateUrl: './res-order-taking.component.html',
  styleUrls: ['./res-order-taking.component.scss']
})
export class ResOrderTakingComponent implements OnInit {
  selectedOrder = "New";
  orderSummary: orderSummaryList[] = [];
  selectedOrderDetails: orderSummaryList | null = null; // Переменная для хранения выбранного заказа

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrders().subscribe((orders: any[]) => {
      this.orderSummary = orders.map(order => ({
        title: `Заказ #${order.id}`,
        subTitle: new Date(order.orderDate).toLocaleString(),
        price: `${order.Products.reduce((total, product) => total + product.productPrice * product.OrderProduct.quantity, 0)}₽`,
        customerAddress: order.customerAddress,
        customerPhone: order.customerPhone,
        products: order.Products // добавляем продукты в orderSummary
      }));
    });
  }

  selectOrder(order: orderSummaryList): void {
    this.selectedOrderDetails = order;
  }

  exportToExcel(): void {
    const dataToExport = this.orderSummary.map(order => ({
      Название: order.title,
      Дата: order.subTitle,
      Цена: order.price,
      Адрес: order.customerAddress || '',
      Телефон: order.customerPhone || '',
      Продукты: order.products.map(product =>
        `${product.productName} (x${product.OrderProduct.quantity}) - ${product.productPrice}₽`
      ).join(', ')
    }));

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Заказы');

    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'orders_week');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${fileName}_export_${new Date().getTime()}.xlsx`);
  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
