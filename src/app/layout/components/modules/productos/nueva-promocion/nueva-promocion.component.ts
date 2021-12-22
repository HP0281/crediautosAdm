import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image/image.service';
import { PromocionesService } from 'src/app/services/promociones.service';

@Component({
  selector: 'app-nueva-promocion',
  templateUrl: './nueva-promocion.component.html',
  styleUrls: ['./nueva-promocion.component.css']
})
export class NuevaPromocionComponent implements OnInit {

    
  promoform : FormGroup;
  check : boolean = false;

  constructor(private fb: FormBuilder,
    private imageService: ImageService,
    private promoService: PromocionesService) { 

    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(){
    this.promoform = this.fb.group({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required])
    })
  }
  checkBoxDefecto(){
    this.check = !this.check;
  }
  seleccionarImagen(event){
    
  }
}
