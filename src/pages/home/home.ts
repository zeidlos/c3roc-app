import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../models/item.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public itemList: Observable<Item[]>;
  constructor(
    public navCtrl: NavController,
    public firestoreProvider: FirestoreProvider
  ) {

    this.items = [
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
    ]

  }

  goToDetailPage(item: Item): void {
    this.navCtrl.push('ItemPage', { item: item });
  }

  goToAddItemPage(): void {
    this.navCtrl.push('AddItemPage');
  }

  ionViewDidLoad(){
    this.itemList = this.firestoreProvider.getItemList().valueChanges();
  }
}
