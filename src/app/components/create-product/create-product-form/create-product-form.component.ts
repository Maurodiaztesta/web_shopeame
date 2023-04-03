import { Component, Output, EventEmitter } from '@angular/core';
import { ObjectsService } from 'src/app/shared/services/objects.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent {

  @Output() saveEmitter = new EventEmitter();

  nombre: string = "Jarabe marca blanca";
  precio: string = "12.5";
  descripcion: string = "No cura el COVID, pero está muy rico.";
  img: string = "https://i.ibb.co/mhgHWnf/jarabe.jpg";
  opinion: string = "Estrellas 1";

  constructor (private objectsService : ObjectsService) {};
  
  newProduct = 
    {
      image: this.img,
      name: this.nombre,
      description: this.descripcion,
      price: this.precio,
      stars: this.opinion,
    }
  

  saveData(){
    this.objectsService.postProducts(this.newProduct)
  }

}
