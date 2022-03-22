import { Switchh } from './../../shared/models/switchh.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SrvswitchsService {
  switchhs!: Observable<Switchh[]>;

  private switchhsCollection: AngularFirestoreCollection<Switchh>;

  constructor( private readonly afs: AngularFirestore ) {
    this.switchhsCollection = afs.collection<Switchh>('switchhs');
    this.getSwitchhs();
   }

   onDeleteSwitchhs(swiId: string): Promise<void>{
     return new Promise (async (resolve, reject) => {
       try {
         const result = this.switchhsCollection.doc(swiId).delete();
         resolve(result);
       } catch (err) {
        console.error(err);
       }
     });
    }

   onSaveSwitchh(switchh: Switchh, swiId: string): Promise<void>{ 
     return new Promise( async (resolve, reject) => {
     try {
       const id = swiId || this.afs.createId();
       const data = { id, ... switchh};
       const result = await this.switchhsCollection.doc(id).set(data);
       resolve(result);
      } catch (err) {
        console.error(err);
      }
     });
    }

   private getSwitchhs(): void{
     this.switchhs = this.switchhsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Switchh))
     );
    }

}
