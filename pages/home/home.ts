import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  h: number;
  w: number;
  b: number;
  m: string;

  constructor(public navCtrl: NavController) {

  }

  calculateBMI() {
    this.b =  this.w/(this.h * this.h)
    this.b = parseFloat (this.b.toFixed(2));
    
    if (this.b < 18.5) {
      this.m = "Underweight";
      
  } else if (this.b >= 18.5 && this.b < 24.5) {
    this.m = "Normal";

  } else if (this.b >= 24.5 && this.b < 30) {
    this.m = "Overweight";
  } else {

    this.m = "Obese";
  }


  }

}





