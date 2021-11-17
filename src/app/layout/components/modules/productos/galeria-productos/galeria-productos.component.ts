import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-galeria-productos',
  templateUrl: './galeria-productos.component.html',
  styleUrls: ['./galeria-productos.component.css']
})
export class GaleriaProductosComponent implements OnInit {
  selectedFile: File;
  message: string;

  imageName: any;
  retrieveResonse: any;
  base64Data: any;
  retrievedImages: any[]=[];

  imagenes:any[];
  loader=false;

  constructor(   ) { }

  ngOnInit() {
    this.cargarImagenes();
  }
  public onFileChanged(event) {
    //Select File
    console.log("ingreso a seleccion file")
    console.log("loq ue conteien selectefile");
    console.log(this.selectedFile);
    this.selectedFile = event.target.files[0];
    console.log("despues de seleccionar");
    console.log(this.selectedFile);
  }
  cagarImagen() {

    this.loader=true;
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //this.image.picByte = uploadImageData;

  
  }

  getImage() {
   
  }
 cargarImagenes(){
   
 }


}
