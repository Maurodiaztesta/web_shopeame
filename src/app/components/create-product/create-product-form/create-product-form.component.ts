import { Component, Output, EventEmitter } from '@angular/core';
import { ObjectsService } from 'src/app/shared/services/objects.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent {

  @Output() saveEmitter = new EventEmitter();

  nombre: string = "";
  precio: string = "";
  descripcion: string = "";
  img: string = "";
  opinion: string = "";

  constructor (private objectsService : ObjectsService) {};
  
  
  

  saveData(){
    let newProduct = 
    {
      image: this.img,
      name: this.nombre,
      description: this.descripcion,
      price: this.precio,
      stars: this.opinion,
    }

    this.objectsService.postProducts(newProduct)
    
  }

}
