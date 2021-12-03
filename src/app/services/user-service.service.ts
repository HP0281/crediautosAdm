import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user: Observable<any[]>;
  userAdmin: Observable<any[]>;

  private usercollection: AngularFirestoreCollection<User>;
  private usercollectionAdmin: AngularFirestoreCollection<User>;

  constructor(private readonly afs: AngularFirestore) {
    this.usercollection = afs.collection<User>('users');
    this.usercollectionAdmin = afs.collection<User>('usersAdmin');
    this.getUsers();
    this.getUsersAdmin();
   }

  onDeleteUser(vehicleid: string): Promise<void>{
  return new Promise(async (resolve, reject)=>{
    try {
      const result = await this.usercollection.doc(vehicleid).delete();
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  });
  }
  onDeleteUserAdmin(userid: string): Promise<void>{
    return new Promise(async (resolve, reject)=>{
      try {
        const result = await this.usercollectionAdmin.doc(userid).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
    }
  onSaveUser(user: User, userId?: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const id = userId || this.afs.createId();
        const data = {id, ...user };
        const result = await this.usercollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  onSaveUserAdmin(user: User, userId?: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const id = userId || this.afs.createId();
        const data = {id, ...user };
        const result = await this.usercollectionAdmin.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  private getUsers(): void{
    this.user = this.usercollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as any))
     );
  }
  getUserById(id:string){
    return this.afs.collection(('users'), ref => ref.where('id', '==', id)).valueChanges();
  }
  private getUsersAdmin(): void{
    this.userAdmin = this.usercollectionAdmin.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as any))
     );
  }
  getUserByIdAdmin(id:string){
    return this.afs.collection(('usersAdmin'), ref => ref.where('id', '==', id)).valueChanges();
  }
  validateuserAdmin(email:string){
    return this.afs.collection(('usersAdmin'), ref => ref.where('email', "==", email)).valueChanges().pipe(
      map(actions => actions.map(a => a as User))
    );
  }
}