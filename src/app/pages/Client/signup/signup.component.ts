import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  form!: FormGroup;
  submitted = false;
  constructor(private productService: ProductService, private router: Router) {
    this.form = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),

      },
      { validators: this.passwordMatchValidator }
    );
  }
  submitForm(): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
      // Gọi phương thức đăng ký từ ProductService
      this.productService.register(this.form.value).subscribe(
        (response) => {
          // Xử lý phản hồi từ API khi đăng ký thành công
          this.router.navigate(['/signin']);
          console.log('Đăng ký thành công', response);
          alert("Đăng ký thành công");
        },
        (error) => {
          // Xử lý lỗi từ API khi đăng ký thất bại
          console.log('Đăng ký thất bại', error);
          alert("Đăng Ký Thất Bại");
        }
      );
    }
  }
  //error
  // Custom validator function to check if password and confirmPassword match
  private passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }

    return null;
  }
}
