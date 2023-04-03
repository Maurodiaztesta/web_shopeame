import { Component, OnInit } from '@angular/core';
import { ObjectsService } from 'src/app/shared/services/objects.service';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.scss']
})
export class ProdsComponent implements OnInit{

  buscador: string = "";

  products:any;

  gallery: any = true;

  constructor(private objectService: ObjectsService){}

  ngOnInit(): void {
    this.objectService.getProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  findByName(){
    this.objectService.getProducts().subscribe((res: any) => {
      this.products = res.filter((product: any) => {
        if (product.name.toLowerCase().includes(this.buscador.toLowerCase())) {
          return product;}
    });
  })}


  changeFormatTrue(){
    if (this.gallery == true) {
      this.gallery = false
    } 
  }
  changeFormatFalse(){
    if (this.gallery == false) {
      this.gallery = true
    } 
  }

}
