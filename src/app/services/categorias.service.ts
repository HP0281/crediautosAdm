import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  categories: Observable<Category[]>;
  
  private categoriasCollection: AngularFirestoreCollection<Category>;

  constructor(private readonly afs: AngularFirestore) {
    this.categoriasCollection = afs.collection<Category>('categorias');
    this.getCategories();
   }

   onDeleteCategory(categoryId: string): Promise<void>{
      return new Promise(async (resolve, reject ) => {
        try {
          const result = this.categoriasCollection.doc(categoryId).delete();
          resolve(result);
        } catch (error) {
          reject(error.message);
        }
      });
   }
   onSaveCategory(category:Category, categoryId: string): Promise<void>{
    return new Promise(async (resolve, reject) => {
      try {
        const id = categoryId || this.afs.createId();
        const data = {id, ...category};
        const result = await this.categoriasCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    })
   }
   private getCategories():void{
     this.categories = this.categoriasCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => a.payload.doc.data() as Category))
        
     );
     console.log("categorias", this.categories);
   }
}
