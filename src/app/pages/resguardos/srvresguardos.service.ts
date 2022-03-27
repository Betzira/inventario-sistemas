import { Resguardoo } from './../../shared/models/resguardoo.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SrvresguardosService {
  resguardoos!: Observable<Resguardoo[]>;

  private resguardoosCollection: AngularFirestoreCollection<Resguardoo>;

  constructor( private readonly afs: AngularFirestore ) {
    this.resguardoosCollection = afs.collection<Resguardoo>('resguardoos');
    this.getResguardoos();
   }

   onDeleteResguardoos(resId: string): Promise<void>{
     return new Promise (async (resolve, reject) => {
       try {
         const result = this.resguardoosCollection.doc(resId).delete();
         resolve(result);
       } catch (err) {
        console.error(err);
       }
     });
    }

    onSaveResguardoo(resguardoo: Resguardoo, resId: string): Promise<void>{ 
     return new Promise( async (resolve, reject) => {
     try {
       const id = resId || this.afs.createId();
       const data = { id, ... resguardoo};
       const result = await this.resguardoosCollection.doc(id).set(data);
       resolve(result);
      } catch (err) {
        console.error(err);
      }
     });
    }

   private getResguardoos(): void{
     this.resguardoos = this.resguardoosCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Resguardoo))
     );
    }

}
