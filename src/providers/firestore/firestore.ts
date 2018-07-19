import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Item } from '../../models/item.interface';

@Injectable()
export class FirestoreProvider {
  constructor(public firestore: AngularFirestore) {}

  getItemList(): AngularFirestoreCollection<Item> {
    return this.firestore.collection(`itemList`);
  }

  deleteItem(itemId: string): Promise<void> {
    return this.firestore.doc(`itemList/${itemId}`).delete();
  }
  createItem(
    itemName: string,
    itemId: string,
    serialNumber: string,
    itemType: string
  ): Promise<void> {

    const id = this.firestore.createId();

    return this.firestore.doc(`itemList/${id}`).set({
      id,
      itemName,
      itemId,
      serialNumber,
      itemType,
    });

  }
}