import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.interface';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  vehicles: Observable<Vehicle[]>;

  private vehicleCollection: AngularFirestoreCollection<Vehicle>;

  constructor(private readonly afs: AngularFirestore) {
    this.vehicleCollection = afs.collection<Vehicle>('vehicles');
    this.getVehicles();
   }

  onDeleteVehicles(vehicleid: string): Promise<void>{
  return new Promise(async (resolve, reject)=>{
    try {
      const result = await this.vehicleCollection.doc(vehicleid).delete();
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  });
  }
  onSaveVehicle(vehicle: Vehicle, vechicleId: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const id = vechicleId || this.afs.createId();
        const data = {id, ...vehicle };
        const result = await this.vehicleCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  private getVehicles(): void{
    this.vehicles = this.vehicleCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Vehicle))
    );
  }
  getVehiclesByIdVendor(id:string){
    return this.afs.collection(('vehicles'), ref => ref.where('vendedor','==', id)).valueChanges();
  }
  
  getVehiclesById(id:string){
    return this.afs.collection(('vehicles'), ref => ref.where('id','==', id)).valueChanges();
  }
}

