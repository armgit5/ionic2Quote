import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
        <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
        <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {

  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
