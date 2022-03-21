import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Celularr } from 'src/app/shared/models/celularr.interface'

@Injectable({
  providedIn: 'root'
})
export class SrvcelularesService {
  celularrs!: Observable<Celularr[]>;

  private celularrsCollection: AngularFirestoreCollection<Celularr>;

  constructor( private readonly afs: AngularFirestore ) {
    this.celularrsCollection = afs.collection<Celularr>('celularrs');
    this.getCelularrs();
   }

   onDeleteCelularrs(celId: string): Promise<void>{
     return new Promise (async (resolve, reject) => {
       try {
         const result = this.celularrsCollection.doc(celId).delete();
         resolve(result);
       } catch (err) {
        console.error(err);
       }
     });
    }

   onSaveCelularr(celularr: Celularr, celId: string): Promise<void>{ 
     return new Promise( async (resolve, reject) => {
     try {
       const id = celId || this.afs.createId();
       const data = { id, ... celularr};
       const result = await this.celularrsCollection.doc(id).set(data);
       resolve(result);
      } catch (err) {
        console.error(err);
      }
     });
    }

   private getCelularrs(): void{
     this.celularrs = this.celularrsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Celularr))
     );
    }

}
