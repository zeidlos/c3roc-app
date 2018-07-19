import { FirestoreProvider } from './../../providers/firestore/firestore';
import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  AlertController,
  Alert,
  Loading,
  LoadingController,
} from 'ionic-angular';
import { Item } from '../../models/item.interface';

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreProvider: FirestoreProvider,
  ) {
    this.item = this.navParams.get('item');
  }

  deleteItem(itemId: string, itemName: string): void {
    const loading: Loading = this.loadingCtrl.create();
    loading.present();
    const alert: Alert = this.alertCtrl.create({
      message: `Are you sure you want to delete ${itemName} from your list?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Clicked Cancel');
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.firestoreProvider.deleteItem(itemId).then(() => {
              loading.dismiss().then(() => {
                this.navCtrl.pop();
              })
            });
          },
        },
      ],
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

}
