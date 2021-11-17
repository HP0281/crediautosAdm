import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';



import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  constructor(private httpClient: HttpClient,
    private router: Router,
    private serviceModal:NgbModal) { }
  administrador = false;
  categoriasNoVacia = false;
  empresaIs=false;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  msjErr = '';
  msjOK = '';
  creado = false;
  failCreado = false;
  categoriaSeleccionada: string = '0';
  empresaSeleccionada: String = '0';
  loader = true;
  loaderCat = true;

  capturaEmpresa = false;
  imagenes:any[];

  idImagen:number=1;
  imgDefecto=false;
  isButtonImage=true;

  

  
  //Gets called when the user selects an image

  public onFileChanged(event) {
    //Select File
    console.log("ingreso a seleccion file")
    this.selectedFile = event.target.files[0];
  }
  isAdmin() {
    
  }
  isEmpresa() {
    
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    //  this.imageService.upload(uploadImageData)
   

  }

  cagarImagen() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

   // this.image.picByte = uploadImageData;
  }

  checkBoxDefecto(){
    //this.imgDefecto=!this.imgDefecto;
    console.log("cambio de checkbox");
    console.log(this.imgDefecto);
    this.isButtonImage=!this.isButtonImage;
   
  }
  guardarProducto(){



    
    if(this.administrador){
      console.log("la empresa que se envia es");

    }else {
      console.log("la empresa que se envia es");

    }
      
  }
  //Gets called when the user clicks on retieve image button to get the image from back end

  getImage2() {
    //Make a call to Sprinf Boot to get the Image Bytes.
  
  }
  getImage() {

    
  }

  ngOnInit() {
    this.isAdmin();
    this.isEmpresa();
   
 
    this.cargarEmpresas();
  }
  cargarEmpresas() {
   
  }
  cargarCateogiras() {
    
  }

  getEmpresa(){
    
  }
  capturarEmpresa() {

  }
  seleccionarImagen(modal) {
    if(this.imagenes!=null){

    }else
    this.cargarImagenes();
    this.serviceModal.open(modal);
  }
  capturarCategoria() {
    
  }
  getCategoria(){
    
  }
  cargarImagenes(){
    
  }
  selecionImagen(imagen){
    
   }
}
