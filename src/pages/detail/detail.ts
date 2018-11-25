import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirstPage } from '../first/first';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {

  passedObj: any = null;
  sortType: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.passedObj = this.navParams.get('data');
    this.sortType = this.navParams.get('sortType');
    console.log('TCL: DetailPage -> ngOnInit -> this.sortType', this.sortType);
  }

  onClickNext() {
    this.navCtrl.push(FirstPage, { sortType: this.sortType });

  }

}
