import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Modelo } from '../models/modelo.interface';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  modelos: Observable<Modelo[]>;

  private modeloCollection: AngularFirestoreCollection<Modelo>;

  constructor(private readonly afs: AngularFirestore) {
    this.modeloCollection = afs.collection<Modelo>('modelos');
    this.getModelos();
  }


  onDeleteModelo(modeloId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.modeloCollection.doc(modeloId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  onSaveModelo(modelo: Modelo, modeloId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = modeloId || this.afs.createId();
        const data = { id, ...modelo };
        const result = await this.modeloCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    })
  }
  private getModelos(): void {
    console.log('get modelos')
    this.modelos = this.modeloCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Modelo))
    );
  }
  getModelosforMarca(marca: string, categoria: string) {
    return this.afs.collection(('modelos'), ref => ref.where('marca', '==', marca).where('category', '==', categoria)).snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Modelo)));
  }
}
