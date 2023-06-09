import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct } from 'src/app/interface/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [MessageService],
})
export class ProductDetailComponent implements OnInit {
  productsAll!: Iproduct[];
  responsiveOptions!: any[];
  valueQuantity: number = 1;
  isInputEmpty: boolean = true;
  // call api lấy product
  product!: Iproduct;
  //lấu màu và size
  selectedSize!: string;
  selectedColor!: string;
  //sản phẩm mới
  nonFeaturedProducts!: Iproduct[];
  selectedIndex: number = 0;
  //lấy user localStorage
  user: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private messageService: MessageService
  ) {}
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Add Product Successfully',
    });
  }
  handleInput(event: KeyboardEvent) {
    this.handleInputChange(event);
  }
  //validate input
  handleInputChange(event: KeyboardEvent) {
    if (
      event.key === 'e' ||
      event.key === '.' ||
      event.key === '+' ||
      event.key === '-' ||
      event.key === 'E' ||
      event.key === ' '
    ) {
      event.preventDefault();
    }
  }



  ngOnInit() {
    this.ngOnInit1();
  }
  ngOnInit1() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.productService.getProduct(id!).subscribe((products: any) => {
        this.product = products;
        console.log(this.product);

        this.valueQuantity = 1;
      });
    });
  }


}
