import { Articulo } from 'src/app/shared/models/articulo1.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Srvinv1Service {
  // articulo!: Observable<Articulo[]>;
  articulos!: Observable<Articulo[]>;

  // private articuloCollection: AngularFirestoreCollection<Articulo>;
  private articulosCollection: AngularFirestoreCollection<Articulo>;

  constructor(private readonly afs: AngularFirestore) { 
    this.articulosCollection = afs.collection<Articulo>('articulos');
    this.getArticulos();

   }

   onDeleteArticulos(artId: string): Promise<void>{ 
     return new Promise (async (resolve, reject) => {
       try {
         const result = await this.articulosCollection.doc(artId).delete();
         resolve(result);
       } catch (err) {
        //  reject(err.message);
        console.error(err);
       }
     })
    }
   
   onSaveArticulo(articulo: Articulo, artId: string): Promise<void>{ 
     return new Promise( async (resolve, reject) => {
      try {
        const id = artId || this.afs.createId();
        const data = { id, ... articulo};
        const result = await this.articulosCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        // reject(err.message);
        console.error(err);
      }
     });
    }

   private getArticulos(): void { 
     this.articulos = this.articulosCollection.snapshotChanges().pipe(
      map(actions => actions.map (a=> a.payload.doc.data() as Articulo))
     );
    }
}
