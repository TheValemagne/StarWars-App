import {Component} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Image} from "./images.model";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images: Image[] = [
    new Image('assets/images/star-wars-fight.jpg', 'combat entre Kylo Ren et Fynn'),
    new Image('assets/images/dark-side.jpg', 'image de Kylo Ren'),
    new Image('assets/images/asoka-vador.jpg', 'combat entre Dark Vador et Asoka Tano')
  ];

  customOptions: OwlOptions = {
    autoWidth: true,
    autoplay: true,
    autoplaySpeed: 8,
    items: 1,
    loop: true,
    center: true,
    merge: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsiveRefreshRate: 200,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  changeOptions() {
    this.customOptions = {...this.customOptions, loop: false} // this will make the carousel refresh
  }
}
