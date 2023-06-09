import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct } from 'src/app/interface/product';
declare var Jodit: any;
import { Router } from '@angular/router';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],

})
export class AddComponent {
  productForm: FormGroup;
product: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router

  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: [0],
      description: ['']
    });
  }
  ngOnInit() {}

  ngAfterViewInit() {
    const editor = new Jodit('#editor', {
      toolbar: true, // Hiển thị thanh công cụ
      minHeight: 300 // Chiều cao tối thiểu của trình soạn thảo
    });

    editor.events.on('change', () => {
      this.productForm.patchValue({
        description: editor.value
      });
    });
  }
  addProduct() {
    const name = this.productForm.value.name;
    const price = this.productForm.value.price;
    const description = this.productForm.value.description;

    if (!name || !price || !description) {
      alert('Mời bạn nhập đầy đủ thông tin');
      return;
    }

    if (price < 0) {
      alert('Giá không được là số âm');
      return;
    }

    if (name.length < 4) {
      alert('Tên sản phẩm phải có ít nhất 4 ký tự');
      return;
    }

    if (description.length < 4) {
      alert('Mô tả sản phẩm phải có ít nhất 4 ký tự');
      return;
    }

    // Tiếp tục xử lý thêm sản phẩm khi đủ thông tin và các yêu cầu được đáp ứng

    const product: Iproduct = {
      id: '',
      name: name,
      price: price,
      description: description,
      image: ''
    };

    this.productService.addProduct(product).subscribe(
      (response) => {
        // Xử lý khi thêm sản phẩm thành công
        console.log('Sản phẩm đã được thêm thành công');
        alert('Thêm thành công');
        this.router.navigate(['/admin/products']);

        // Làm mới danh sách sản phẩm
      },
      (error) => {
        // Xử lý khi có lỗi trong quá trình thêm sản phẩm
        console.log('Lỗi khi thêm sản phẩm:', error);
      }
    );
  }




}
