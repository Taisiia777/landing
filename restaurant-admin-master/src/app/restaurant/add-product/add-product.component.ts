import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product = {
    productName: '',
    productPrice: null,
    productDescription: ''
  };

  constructor(private productService: ProductService, private messageService: MessageService) { }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Успешно', detail: 'Продукт добавлен' });
        this.product = { productName: '', productPrice: null, productDescription: '' };
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Ошибка', detail: 'Не удалось добавить продукт' });
      }
    );
  }
}
