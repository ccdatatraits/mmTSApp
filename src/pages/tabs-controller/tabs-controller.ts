import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PixelTesterPage } from '../pixel-tester/pixel-tester';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = PixelTesterPage;
  constructor(public navCtrl: NavController) {
  }
  
}
