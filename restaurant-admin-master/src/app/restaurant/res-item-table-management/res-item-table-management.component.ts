
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ProductService } from '../../product.service';  // Убедитесь, что путь правильный

// @Component({
//   selector: 'res-item-table-management',
//   templateUrl: './res-item-table-management.component.html',
//   styleUrls: ['./res-item-table-management.component.scss']
// })
// export class ResItemTableManagementComponent implements OnInit {
//   products: any[] = [];
//   statusOptions: any;
//   statusFilter: any;
//   displayAddProductDialog: boolean = false;

//   @ViewChild('dt') tableData: any;

//   constructor(private productService: ProductService) { }  // Инжектируем сервис

//   ngOnInit(): void {
//     this.loadProducts();  // Загружаем продукты при инициализации

//     this.statusFilter = [
//       { label: 'Доступно', value: 'on' },
//       { label: 'Недоступно', value: 'off' }
//     ];

//     this.statusOptions = [
//       { icon: 'pi pi-unlock', value: 'on' },
//       { icon: 'pi pi-lock', value: 'off' }
//     ];
//   }

//   loadProducts() {
//     this.productService.getProducts().subscribe(
//       (data) => {
//         this.products = data;  // Привязываем данные к переменной products
//       },
//       (error) => {
//         console.error('Ошибка при загрузке продуктов', error);
//       }
//     );
//   }

//   showAddProductDialog() {
//     this.displayAddProductDialog = true;
//   }

//   handleFilterStatus($event) {
//     this.tableData.filter($event.value.map(el => el.value), 'status', 'in');
//   }
// }
// res-item-table-management.component.ts

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

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();

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
        this.products = data;
      },
      (error) => {
        console.error('Ошибка при загрузке продуктов', error);
      }
    );
  }

  showAddProductDialog() {
    this.displayAddProductDialog = true;
  }

  deleteProduct(productName: string) {
    if (confirm(`Вы уверены, что хотите удалить продукт "${productName}"?`)) {
      this.productService.deleteProduct(productName).subscribe(
        () => {
          this.loadProducts();
        },
        (error) => {
          console.error('Ошибка при удалении продукта', error);
        }
      );
    }
  }

  handleFilterStatus($event) {
    this.tableData.filter($event.value.map(el => el.value), 'status', 'in');
  }
}
