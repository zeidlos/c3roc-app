import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController,
  Alert,
} from 'ionic-angular';
import { 
  FormGroup, 
  FormBuilder, 
  Validators 
} from '@angular/forms';
import { FirestoreProvider } from '../../providers/firestore/firestore';


@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  public createItemForm: FormGroup

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreProvider: FirestoreProvider,
    public formBuilder: FormBuilder
  ) {
    this.createItemForm = formBuilder.group({
      itemName: ['', Validators.required],
      itemId: ['', Validators.required],
      serialNumber: ['', Validators.required],
      itemType: ['', Validators.required],
    });
  }

  createItem() {
    const loading: Loading = this.loadingCtrl.create();
    loading.present();

    const itemName = this.createItemForm.value.itemName;
    const itemId = this.createItemForm.value.itemId;
    const serialNumber = this.createItemForm.value.serialNumber;
    const itemType = this.createItemForm.value.itemType;

    console.log(itemName, itemId, serialNumber, itemType)
    this.firestoreProvider
    .createItem(itemName, itemId, serialNumber, itemType)
    .then(
      () => {
        loading.dismiss().then(() => {
          this.navCtrl.pop();
        });
      },
      error => {
        loading.dismiss().then(() => {
          const alert: Alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: 'Ok', role: 'cancel' }],
          });
          alert.present();
        });
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

}
