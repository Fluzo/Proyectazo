import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Sustrato, SustratosService } from 'src/app/services/sustratos-service/sustratos.service';

import SwiperCore, { EffectFade, Navigation, Pagination, Swiper } from "swiper";


@Component({
  selector: 'app-swipper-sustratos',
  templateUrl: './swipper-sustratos.component.html',
  styleUrls: ['./swipper-sustratos.component.css']
})
export class SwipperSustratosComponent implements OnInit, AfterViewInit {

  @Input() sustratos!: Sustrato[];
  
  public sustratosSwiper!: Swiper;

  constructor( private _sustrato: SustratosService) { }

  ngAfterViewInit(): void {
    this.sustratosSwiper = new Swiper('.swiper-container', {
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
    //console.log(this.sustratos);
  }

  onSlideNext(){
    this.sustratosSwiper.slideNext();
  }

  onSlidePrev(){
    this.sustratosSwiper.slidePrev();
  }
  
}