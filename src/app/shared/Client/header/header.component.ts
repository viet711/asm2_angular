import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef,   private router: Router,) {}
  isLoggedIn: boolean = false;
  userAvatar: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png';

  ngOnInit() {
    this.renderer.listen('document', 'click', (event: any) => {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.isMenuVisible = false;
      }
    });
  }
  isMenuVisible: boolean = false;
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  logout() {
    // Xóa hết dữ liệu trong localstorage
    localStorage.clear(); // Hoặc bạn có thể xóa từng key một nếu muốn giữ lại một số dữ liệu

    // Chuyển hướng đến trang đăng nhập
    this.router.navigate(['/signin']);
  }
  loginSuccess(userData: any) {
    this.isLoggedIn = true;
    this.userAvatar = userData.avatar;
  }
}
