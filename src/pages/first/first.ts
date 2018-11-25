import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  isBubbleSortReady = false;
  bubbleSortIndex = 0;
  numberString: any;
  resultArray = [];
  bubbleSortSteps = [];
  sortType: String = '';
  isButtonEnable = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sortType = this.navParams.get('sortType');
  }

  //Bubble sort starts here

  sortArray(arr) {
    // console.log('113332 ', arr);


    // setTimeout((indx) => {
    //   if (arr[indx] > arr[indx + 1]) {
    //     let temp = arr[indx + 1];
    //     arr[indx + 1] = arr[indx];
    //     arr[indx] = temp;
    //     console.log('3333 ', arr);
    //     this.resultArray = arr;
    //   }
    // }, 3000, i);

    // }
  }

  bubbleSort(arr) {
    const arr2 = arr.slice()
    for (let i = 0; i < arr2.length - 1; i++) {
      for (let j = 0; j < arr2.length - 1; j++) {
        if (arr2[j] > arr2[j + 1]) {
          let temp = arr2[j + 1];
          arr2[j + 1] = arr2[j];
          arr2[j] = temp;
          // console.log('3333 ', arr2);
          // this.resultarr2ay = arr2;


        }
        const arr3 = arr2.slice()
        this.bubbleSortSteps.push(arr3);
        console.log('bubbleSortSteps: ', this.bubbleSortSteps);
      }
      this.isBubbleSortReady = true;
    }

    // for (let i = 0; i < myArr.length; i++) {

    //   setTimeout((input) => {
    //     console.log(1111, input);
    //     this.sortArray(myArr);
    //   }, 5000, i);

    // }
  }

  //Bubble sort ends here........



  //Merge sort starts here:
  // Split the array into halves and merge them recursively 
  mergeSort(arr) {
    console.log("​FirstPage -> mergeSort -> arr", arr)
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    return this.resultArray = this.merge(
      this.mergeSort(left),
      this.mergeSort(right)
    )
  }

  // compare the arrays item by item and return the concatenated result
  merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  }
  //Merge sort ends here............

  //Selection sort starts here
  selectionSort(array) {
    console.log("​FirstPage -> selectionSort -> array", array)
    let temp;

    for (let i = 0; i < array.length; i++) {
      let mi = i;

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[mi])
          mi = j;
      }

      temp = array[i];
      array[i] = array[mi];
      array[mi] = temp;
    }
    this.resultArray = array;
    //Selection sort ends here

    //Quick starts
    // var a = [2, 4, 5, 63, 4, 5, 63, 2, 4, 43];

    // quickSort(origArray) {
    //   if (origArray.length <= 1) {
    //     return origArray
    //   } else {

    //     var left = [];
    //     var right = [];
    //     var newArray = [];
    //     var pivot = origArray.pop();
    //     var length = origArray.length;

    //     for (var i = 0; i < length; i++) {
    //       if (origArray[i] <= pivot) {
    //         left.push(origArray[i]);
    //       } else {
    //         right.push(origArray[i]);
    //       }
    //     }

    //     return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
    //   }
    // }

    // var myArray = [3, 0, 2, 5, -1, 4, 1];

    // console.log("Original array: " + myArray);
    // var sortedArray = quick_Sort(myArray);
    // console.log("Sorted array: " + sortedArray);

    // this.resultArray;


    //Quick ends

  };

  onKey(event: any) {
    // console.log("​FirstPage -> onKey -> event", event)
    this.isButtonEnable = true;
    console.log("​FirstPage -> onChange -> this.isButtonEnable", this.isButtonEnable)
  }


  // 2 3 5 8 6  -> ['2','3','5','8','6']



  //Codes are done here works and relate to respective pages
  onSubmit() {
    console.log('numberString ', this.numberString);
    console.log('numberString ', typeof this.numberString);
    const numberArray = this.numberString.split(' ').map((el) => {
      return parseInt(el);
    });
    // 2 3 5 8 6 get string--- split -> ['2','3','5','8','6']----map function---get value
    console.log("​FirstPage -> onSubmit -> numberArray", numberArray)
    let inputArray = [];
    console.log('TCL: FirstPage -> onSubmit -> this.sortType', this.sortType);
    if (this.sortType === 'bubblesort') {
      inputArray = numberArray;
      this.bubbleSort(inputArray)
    } else if (this.sortType === 'mergesort') {
      inputArray = numberArray;
      this.mergeSort(inputArray);
    } else if (this.sortType === 'selectionsort') {
      inputArray = numberArray;
      this.selectionSort(inputArray);
    }
    // else if (this.sortType === 'quicksort') {
    //   inputArray = numberArray;
    //   this.quick_Sort(inputArray);
    // }
  }
}