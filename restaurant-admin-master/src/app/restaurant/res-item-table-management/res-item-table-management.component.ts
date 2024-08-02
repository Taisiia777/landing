
// import { Component, OnInit, ViewChild } from '@angular/core';

// @Component({
//   selector: 'res-item-table-management',
//   templateUrl: './res-item-table-management.component.html',
//   styleUrls: ['./res-item-table-management.component.scss']
// })
// export class ResItemTableManagementComponent implements OnInit {
//   products: any[]
//   statusOptions: any;
//   statusFilter: any;
//   displayAddProductDialog: boolean = false;

//   @ViewChild('dt') tableData: any;
//   constructor() { }

//   ngOnInit(): void {
//     this.statusFilter = [{
//       label: 'Доступно',
//       value: 'on'
//     },
//     {
//       label: 'Недоступно',
//       value: 'off'
//     }
//   ]
//     this.products = [
//       {
//         image: 'assets/idli.jpg',
//         name: 'Идли',
//         category: 'Завтрак',
//         cuisine: 'Южноиндийская кухня',
//         price: '23',
//         count: '4',
//         status: 'off'
//       },
//       {
//         image: 'assets/CBiryani.jpg',
//         name: 'Куриный Бирьяни',
//         category: 'Бирьяни',
//         cuisine: 'Южноиндийская кухня',
//         price: '232',
//         count: '4',
//         status: 'on'
//       },
//       {
//         image: 'assets/Gobi.jpg',
//         name: 'Гоби Манчурия',
//         category: 'Закуски',
//         cuisine: 'Североиндийская кухня',
//         price: '421',
//         count: '4',
//         status: 'on'
//       },
//     ]
//     this.statusOptions = [
//       {
//         // label: 'Доступно',
//         icon: 'pi pi-unlock',
//         value: 'on'
//       },
//       {
//         // label: 'Недоступно',
//         icon: 'pi pi-lock',
//         value: 'off'
//       }
//     ]
//   }
  
//   showAddProductDialog() {
//     this.displayAddProductDialog = true;
//   }
//   handleFilterStatus($event) {
//     this.tableData.filter($event.value.map(el => el.value), 'status', 'in')
//   }

// }
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../product.service';  // Убедитесь, что путь правильный

@Component({
  selector: 'res-item-table-management',
  templateUrl: './res-item-table-management.component.html',
  styleUrls: ['./res-item-table-management.component.scss']
})
export class ResItemTableManagementComponent implements OnInit {
  products: any[] = [];
  statusOptions: any;
  statusFilter: any;
  displayAddProductDialog: boolean = false;

  @ViewChild('dt') tableData: any;

  constructor(private productService: ProductService) { }  // Инжектируем сервис

  ngOnInit(): void {
    this.loadProducts();  // Загружаем продукты при инициализации

    this.statusFilter = [
      { label: 'Доступно', value: 'on' },
      { label: 'Недоступно', value: 'off' }
    ];

    this.statusOptions = [
      { icon: 'pi pi-unlock', value: 'on' },
      { icon: 'pi pi-lock', value: 'off' }
    ];
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;  // Привязываем данные к переменной products
      },
      (error) => {
        console.error('Ошибка при загрузке продуктов', error);
      }
    );
  }

  showAddProductDialog() {
    this.displayAddProductDialog = true;
  }

  handleFilterStatus($event) {
    this.tableData.filter($event.value.map(el => el.value), 'status', 'in');
  }
}
