import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
  @Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

}
async presentModal() {
  const modal = await this.modalController.create({
    component: ModalPage
  });
  return await modal.present();