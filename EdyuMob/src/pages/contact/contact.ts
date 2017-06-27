import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  message = 'sundar'
  items = []

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

    this.items = [1,2,3,4,5,6]



  }

 itemSelected(item){
  var title = 'odd'
  if(item%2==0){
      title = 'even'
  }




    let alert = this.alertCtrl.create({
      title: title,
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();

    
  }

}
