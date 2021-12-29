import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Promocion } from 'src/app/models/promocion.interface';
import { PromocionesService } from 'src/app/services/promociones.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from 'src/app/admin/modals/confirmacion/confirmacion.component';



@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  promociones: Promocion[];
  promoform: FormGroup;
  uploadProgress: Observable<number>;
  uploadURL: Observable<any>;
  cargo:boolean= true;
  promo: Promocion;
  msjOK: string = "Registro modificado correctamente";

  productoSeleccionado:"";
  loader = true;

  imgDefecto=false;
  isButtonImage=true;

  imagenes:any[];
  message: string;
  retrievedImage: any;
  failCreado=false;
  creado=false;
  retrieveResonse: any;
  base64Data: any;

  msjErr="";
  idImagen:number=1;

  @ViewChild('ModalModificar', { static: false }) ModalModificar;
  constructor(private router:Router, private promoService: PromocionesService,
    public dialog: NgbModal, private fb: FormBuilder,
    private _storage: AngularFireStorage,
    public matdialog: MatDialog) { 
    this.promoService.promos.subscribe(resp=>{
      this.promociones = resp;
    })
    this.initForm();
  }

  ngOnInit() {
    
    
  }
  checkBoxDefecto(){
    //this.imgDefecto=!this.imgDefecto;
    console.log("cambio de checkbox");
    console.log(this.imgDefecto);
    this.isButtonImage=!this.isButtonImage;
   
  }
  listar(){
    this.router.navigate(["productos/promociones/listar-promocion"]);
  }
  capturarProducto() {
    
  }
  modificarPromocion(promocion, modal){
    this.promoform.patchValue(promocion);
    this.promoform.get('img').setValue(promocion.img);
    this.dialog.open(modal);
    this.promo = promocion;
 
  }
  seleccionarImagen(event, modal){
    
    const file = event.target.files[0];
    const randomId = Math.random().toString(36).substring(2);
    const filepath = `images/${randomId}`;
    const fileref = this._storage.ref(filepath);
    const task = this._storage.upload(filepath, file);
    this.uploadProgress = task.percentageChanges();
    
    task.snapshotChanges().pipe(
      finalize(() => {this.uploadURL = fileref.getDownloadURL();
      this.cargo = true;
      this.uploadURL.subscribe((resp:any)=>{
         this.promoform.get('img').setValue(resp);
      })
    }
      )
    ).subscribe();
  }

  guardarProducto(){
    if (this.promoform.valid) {
      this.promoService.onSavePromo(this.promoform.value, this.promo.id).then( resp=>{
        this.creado = true;
        this.dialog.dismissAll();
      });
    }
  }
  cargarImagenes(){
    
  }
  selecionImagen(imagen){
    
   }
  initForm(){
    this.promoform = this.fb.group({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      //stock: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required])
    })
  }
  eliminarPromocion(promocion){
    this.promoService.onDeletePromo(promocion.id).then(
      resp =>{
        const dialogref = this.matdialog.open(ConfirmacionComponent, {
          width: "250px",
          data: {
            message: "Registro eliminado",
            noresp: true,
            cancel: "Continuar"
          }
        });
      }
    );
  }
}
