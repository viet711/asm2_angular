import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: Iproduct[] = [];
  sortedProducts: Iproduct[] = []; // Mảng sản phẩm được sắp xếp
  sortOrder: 'asc' | 'desc' = 'asc'; // Thứ tự sắp xếp mặc định
  sortOption: '1' | '2' | '3' = '1'; // Giá trị mặc định là '1' (tăng dần theo giá)
  searchKeyword: string = ''; // Từ khóa tìm kiếm
  isLoading: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Iproduct[]) => {
      this.products = products;
      this.sortProductsByOption(); // Sắp xếp sản phẩm ban đầu
    });
  }

  sortProductsByOption() {
    // Sao chép mảng sản phẩm để tránh ảnh hưởng đến danh sách gốc
    this.sortedProducts = [...this.products];

    // Sắp xếp sản phẩm theo lựa chọn của người dùng
    switch (this.sortOption) {
      case '1': // Tăng dần theo giá
        this.sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case '2': // Giảm dần theo giá
        this.sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case '3': // Từ A đến Z
        this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortProductsByOption();
  }

  filterProductsByOption() {
    this.isLoading = true; // Bắt đầu hiển thị loading

    setTimeout(() => {
      this.sortedProducts = [...this.products];

      switch (this.sortOption) {
        case '1': // Giá tăng dần
          this.sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case '2': // Giá giảm dần
          this.sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case '3': // Chữ cái từ A đến Z
          this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }

      this.isLoading = false; // Kết thúc hiển thị loading
    }, 2000); // Giả định thời gian lọc là 2 giây (có thể thay đổi)
  }

  filterProductsBySearch() {
    this.sortedProducts = this.products.filter((product) =>
      this.isProductMatchSearch(product)
    );
  }

  isProductMatchSearch(product: Iproduct): boolean {
    if (this.searchKeyword.trim() === '') {
      // Nếu từ khóa tìm kiếm trống, hiển thị tất cả sản phẩm
      return true;
    }

    const keyword = this.searchKeyword.toLowerCase();
    const productName = product.name.toLowerCase();

    return productName.includes(keyword);
  }
}
