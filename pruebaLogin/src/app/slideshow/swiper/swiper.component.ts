import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Bonsai } from 'src/app/services/bonsais-service/bonsais.service';

import { Swiper } from "swiper";

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
})
export class SwiperComponent implements OnInit, AfterViewInit {

  @Input() bonsais!: Bonsai[];
  
  // public mySwiper!: Swiper;

  constructor( ) { }

  ngAfterViewInit(): void {
      const mySwiper = new Swiper('.swiper', {
      loop:true,
      slidesPerView: 2,
      // freeMode: true,
      spaceBetween: 50,
      // effect: "fade",
      // pagination: {
      //   type: 'fraction'
      // }
    })
  }

  ngOnInit(): void {

  }

}
