import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  form: FormGroup;
  loginError = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitForm(): void {
    this.submitted = true;

    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.productService.login(email, password).subscribe(
        (response: any) => {
          if (response.length > 0) {
            // User exists, proceed with login
            this.loginError = false;
            this.router.navigate(['/home']);
            alert("Đăng Nhập Thành Công");
          } else {
            // User does not exist
            this.loginError = true;
            alert("Đăng Nhập Thất Bại");
          }
        },
        (error) => {
          console.log('Login failed', error);
          this.loginError = true;
          alert("Đăng Nhập Thất Bại");
        }
      );
    }
  }
}
