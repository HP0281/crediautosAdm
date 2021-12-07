import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Marca } from '../models/marca.interface';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  marcas: Observable<Marca[]>;

  private marcaCollection : AngularFirestoreCollection<Marca>;

  constructor(private readonly afs: AngularFirestore) { 
    this.marcaCollection = afs.collection<Marca>('marcas');
    this.getMarcas();
  }

  onDeleteMarca(categoryId: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const result = this.marcaCollection.doc(categoryId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
 }
 onSaveMarca(marca:Marca, marcaId: string): Promise<void>{
  return new Promise(async (resolve, reject) => {
    try {
      const id = marcaId || this.afs.createId();
      const data = {id, ...marca};
      const result = await this.marcaCollection.doc(id).set(data);
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  })
 }
 private getMarcas():void{
   console.log('get marcas')
   this.marcas = this.marcaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Marca))
   );
 }
 getMarcaByCategoria(name:string){
  return this.afs.collection(('marcas'), ref => ref.where('category','==', name)).snapshotChanges().pipe(
    map(actions => actions.map(a => a.payload.doc.data() as Marca))
  );
}
}
