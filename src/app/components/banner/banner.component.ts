import { Component,OnInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  slides = [
    { image: 'https://theme.hstatic.net/200000343865/1001052087/14/ms_banner_img3.jpg?v=100', caption: 'Slide 1' },
    { image: 'https://theme.hstatic.net/200000343865/1001052087/14/ms_banner_img2.jpg?v=100', caption: 'Slide 2' },
    { image: 'https://theme.hstatic.net/200000343865/1001052087/14/ms_banner_img1.jpg?v=100', caption: 'Slide 3' }
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
