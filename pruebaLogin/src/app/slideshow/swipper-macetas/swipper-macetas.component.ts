import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MacetasService } from 'src/app/services/macetas-service/macetas.service';
import { Maceta } from 'src/app/services/macetas-service/macetas.service';

import SwiperCore, { EffectFade, Navigation, Pagination, Swiper } from "swiper";

@Component({
  selector: 'app-swipper-macetas',
  templateUrl: './swipper-macetas.component.html',
})
export class SwipperMacetasComponent implements OnInit, AfterViewInit {

  @Input() macetas!: Maceta[];
  
  public macetaSwiper!: Swiper;

  constructor( private _maceta: MacetasService) { }

  ngAfterViewInit(): void {
    this.macetaSwiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      freeMode: true,
      spaceBetween: 0,
      effect: "fade",
      fadeEffect:{
        crossFade: true
      },
      pagination: {
        type: 'fraction'
      }
    });
  };

  ngOnInit(): void {
    //console.log(this.macetas);
  }

  onSlideNext(){
    this.macetaSwiper.slideNext();
  }

  onSlidePrev(){
    this.macetaSwiper.slidePrev();
  }
  
}