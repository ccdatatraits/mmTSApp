import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HTTP } from '@ionic-native/http';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Component({
  selector: 'page-pixel-tester',
  templateUrl: 'pixel-tester.html'
})
export class PixelTesterPage {
  mt_id:number;
  mt_adid:number;
  qty:number;
  output:string;
  constructor(public navCtrl: NavController
  , private http: HTTP
  , private uniqueDeviceID: UniqueDeviceID) {
    this.mt_id = 923473;
    this.mt_adid = 151091;
    this.qty = 0;
    this.output = "";
  }

  buttonPressed() {
    // Example
    // uri=http://pixel.mathtag.com/event/img?mt_id=923473&mt_adid=151091&mt_nsync=0, 
    // method=GET, Cookie=uuid=1CBEBF37-C4AC-48B2-8797-B3F7E82A7EA8, host=pixel.mathtag.com
    console.log("mt_id:" + this.mt_id);
    console.log("mt_adid:" + this.mt_adid);
    let uri : string = "http://pixel.mathtag.com/event/img?mt_id=" + this.mt_id +
      "&mt_adid=" + this.mt_adid + "&mt_nsync=0";
    let headers : Map<string, string> = new Map<string, string>();
    headers.set("host", "pixel.mathtag.com");
    //let headers = {"host": "pixel.mathtag.com"};
    console.log(uri);
    console.log(headers);
    /*Promise.resolve(this.uniqueDeviceID.get())
      .then((uuid: any) => {
        console.log("uniqueDeviceID.get():" + uuid);
        headers.set("Cookie", "uuid=" + uuid);
        console.log(headers);
        return Promise.resolve(this.http.get(uri, {}, headers))
      })
      .then(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        this.qty += 1;
        this.output = this.output + "\n" + "fired " + this.qty + " times";
        this.output = this.output + "\n" + data.status;
      })
      .catch(error => {
        console.error(error);
        //console.log(error.status);
        //console.log(error.error); // error message as string
        //console.log(error.headers);
      });*/

    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log("uniqueDeviceID.get():" + uuid);
        headers.set("Cookie", "uuid=" + uuid);
        //headers["Cookie"] = "uuid=" + uuid;
        console.log(headers);
        this.http.get(uri, {}, headers)
          .then(data => {
            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);
            this.qty += 1;
            this.output = this.output + "\n" + "fired " + this.qty + " times";
            this.output = this.output + "\n" + data.status;
          })
          .catch(error => {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
          });
      })
      .catch((error: any) => console.log(error));
  }

}
