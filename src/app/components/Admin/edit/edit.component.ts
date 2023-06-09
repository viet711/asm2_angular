import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct } from 'src/app/interface/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  product!: Iproduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    description: [''],
    image: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.productService.getProduct(id).subscribe(
          (data) => {
            console.log(data);
            this.product = data;

            this.productForm.patchValue({
              name: data.name,
              price: data.price,
              description: data.description,
              image: data.image
            });
          },
          (error) => console.log(error.message)
        );
      }
    });
  }

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: Iproduct = {
        id: this.product.id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        image: this.productForm.value.image || '',
        description: this.productForm.value.description || ''
      };

      this.productService.updateProduct(product.id, product).subscribe(
        (updatedProduct) => {
          console.log('Updated product:', updatedProduct);
          this.router.navigate(['/admin/products']);
          alert("sửa thành công");

        },
        (error) => {
          console.log('Error updating product:', error);
        }
      );
    }
  }
}
