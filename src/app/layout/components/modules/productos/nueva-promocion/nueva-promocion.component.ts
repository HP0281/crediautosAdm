import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image/image.service';
import { PromocionesService } from 'src/app/services/promociones.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-promocion',
  templateUrl: './nueva-promocion.component.html',
  styleUrls: ['./nueva-promocion.component.css']
})
export class NuevaPromocionComponent implements OnInit {

  uploadProgress:Observable<number>;
  uploadURL: Observable<string>;
  promoform : FormGroup;
  cargo: boolean;
  check : boolean = false;
  creado: boolean = false;
  msjOK: string = "Registro creado correctamente"

  constructor(private fb: FormBuilder,
    private imageService: ImageService,
    private promoService: PromocionesService,
    private _storage: AngularFireStorage,
    public dialog :NgbModal,
    private router: Router ) { 

    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(){
    this.promoform = this.fb.group({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      //stock: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required])
    })
  }
  checkBoxDefecto(){
    this.check = !this.check;
  }
  seleccionarImagen(event, modal){
    try {
      this.dialog.dismissAll();
    } catch (error) {
      
    }
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
         this.dialog.open(modal);
      })
    }
      )
    ).subscribe();
  }
  guardarProducto(){
    if (this.promoform.valid) {
      this.promoService.onSavePromo(this.promoform.value).then( resp=>{
        this.creado = true});
        this.router.navigate(['/productos/promociones']);
    }
  }
}
