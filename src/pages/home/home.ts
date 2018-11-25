import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { bubbleSort, mergeSort, selectionSort, quickSort } from '../../static';
// import { mergeSort } from '../../static';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onBubbleSort() {
    this.navCtrl.push(DetailPage, { data: bubbleSort, sortType: 'bubblesort' });
    console.log("bubbleSortClick");

  }


  onMergeSort() {
    this.navCtrl.push(DetailPage, { data: mergeSort, sortType: 'mergesort' });
    console.log("mergeSortClick");

  }

  onInsertionSort() {
    this.navCtrl.push(DetailPage, { data: selectionSort, sortType: 'selectionsort' });
    console.log("selectionSortClick");

  }

  onQuickSort() {
    this.navCtrl.push(DetailPage, { data: quickSort, sortType: 'quicksort' });
    console.log("quickSortClick");

  }
}
