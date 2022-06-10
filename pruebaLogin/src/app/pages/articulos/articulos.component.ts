import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AerticulosAPIService } from 'src/app/services/articulosAPI/aerticulos-api.service';
import { ArticuloAPI } from '../../models/articuloAPI';
import { ArticuloModel} from 'src/app/models/articuloModel';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: ArticuloAPI[] = [];
  art = new ArticuloModel();

  constructor(private servicio: AerticulosAPIService) { }

  ngOnInit(): void {


    this.recibirArticulos();
    // this.servicio.consultarArticulos().subscribe((data)=>{
    //   console.log(data)   
    //   this.articulos = data.data;
    // });
  }

    recibirArticulos(){
      this.servicio.consultarArticulos().subscribe((data)=>{
        console.log(data)   
        this.articulos = data.data;
      });
    }
  
    
    getArticulo(id:any){
      let articuloEditar = this.articulos.filter(articulo=> articulo.iD_ARTICULO === id);
      this.art = articuloEditar[0];
      console.log(this.art);
      this.servicio.setArt(this.art);
    }


    
    desactivarArticulo(id:any){
     this.servicio.desactivarArticulo(id)
     .subscribe(res => this.recibirArticulos());
    }
  
     activarArticulo(id:any){
      this.servicio.activarArticulo(id)
      .subscribe(res => this.recibirArticulos());
      console.log(this.articulos);
    }
 
  }
  


  // consultarArticulos() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 
  //       "Access-Control-Allow-Origin":"*"
  //     })
  //   };
  //   this.http.get('https://localhost:7286/api/Articulos/ObtenerStockArticulos',httpOptions).subscribe(r => {
  //     console.log(r);
  //   })
  // }


