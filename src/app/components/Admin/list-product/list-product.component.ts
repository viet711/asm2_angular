import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ListProductComponent  {
  products: Iproduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }

  deleteProduct(id: string) {
    if(confirm("bạn chắc chắn muốn xóa"))
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}
