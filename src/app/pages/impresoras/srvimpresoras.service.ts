import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Impresoraa } from '../../shared/models/impresoraa.interface';

@Injectable({
  providedIn: 'root'
})
export class SrvimpresorasService {
  impresoraas!: Observable<Impresoraa[]>;

  private impresoraasCollection: AngularFirestoreCollection<Impresoraa>;

  constructor( private readonly afs: AngularFirestore ) {
    this.impresoraasCollection = afs.collection<Impresoraa>('impresoraas');
    this.getImpresoraas();
   }

   onDeleteImpresoraas(impId: string): Promise<void>{
     return new Promise (async (resolve, reject) => {
       try {
         const result = this.impresoraasCollection.doc(impId).delete();
         resolve(result);
       } catch (err) {
        console.error(err);
       }
     });
    }

   onSaveImpresoraa(impresoraas: Impresoraa, impId: string): Promise<void>{ 
     return new Promise( async (resolve, reject) => {
     try {
       const id = impId || this.afs.createId();
       const data = { id, ... impresoraas};
       const result = await this.impresoraasCollection.doc(id).set(data);
       resolve(result);
      } catch (err) {
        console.error(err);
      }
     });
    }

   private getImpresoraas(): void{
     this.impresoraas = this.impresoraasCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Impresoraa))
     );
    }

}

