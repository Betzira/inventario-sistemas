import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';
import { Observable } from 'rxjs';
import { Antenaa } from 'src/app/shared/models/antenaa.interface';
import { map } from 'rxjs/operators';
// import { resolve } from 'path';
// import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class SrvantenasService {
  antenaas!: Observable<Antenaa[]>;

  private antenaasCollection: AngularFirestoreCollection<Antenaa>;

  constructor( private readonly afs: AngularFirestore ) {
    this.antenaasCollection = afs.collection<Antenaa>('antenaas');
    this.getAntenaas();
   }

   onDeleteAntenaas(antId: string): Promise<void>{
     return new Promise (async (resolve, reject) => {
       try {
         const result = this.antenaasCollection.doc(antId).delete();
         resolve(result);
       } catch (err) {
        console.error(err);
       }
     });
    }

   onSaveAntenaa(antenaa: Antenaa, antId: string): Promise<void>{ 
     return new Promise( async (resolve, reject) => {
     try {
       const id = antId || this.afs.createId();
       const data = { id, ... antenaa};
       const result = await this.antenaasCollection.doc(id).set(data);
       resolve(result);
      } catch (err) {
        console.error(err);
      }
     });
    }

   private getAntenaas(): void{
     this.antenaas = this.antenaasCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Antenaa))
     );
    }

}
