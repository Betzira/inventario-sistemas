import { Servidorr } from './../../shared/models/servidorr.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SrvservidoresService {
  servidorrs!: Observable<Servidorr[]>;

  private servidorrsCollection: AngularFirestoreCollection<Servidorr>;

  constructor( private readonly afs: AngularFirestore ) {
    this.servidorrsCollection = afs.collection<Servidorr>('servidorrs');
    this.getServidorrs();
   }

   onDeleteServidorrs(servId: string): Promise<void>{
     return new Promise (async (resolve, reject) => {
       try {
         const result = this.servidorrsCollection.doc(servId).delete();
         resolve(result);
       } catch (err) {
        console.error(err);
       }
     });
    }

    onSaveServidorr(servidorr: Servidorr, servId: string): Promise<void>{ 
     return new Promise( async (resolve, reject) => {
     try {
       const id = servId || this.afs.createId();
       const data = { id, ... servidorr};
       const result = await this.servidorrsCollection.doc(id).set(data);
       resolve(result);
      } catch (err) {
        console.error(err);
      }
     });
    }

   private getServidorrs(): void{
     this.servidorrs = this.servidorrsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Servidorr))
     );
    }

}
