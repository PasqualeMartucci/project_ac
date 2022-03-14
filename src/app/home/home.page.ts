import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [BluetoothSerial]
})
export class HomePage {
  Devices: any;
  SwitchButton : Boolean = false;
  constructor(private bserial: BluetoothSerial,
    private alertCtrl: AlertController,private routing: Router) {}


  bluetooth_on(){
    this.bserial.isEnabled().then(response =>{
      this.alert("Bluetooth On")
      this.listDevices();
    },error =>{
      this.alert("Bluetooth Off")
    })
  }

  async alert(msg){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: msg,
      buttons:[{
        text: 'Ok',
        handler: () =>{
          this.alertCtrl.dismiss();
        }
      }]
    });
    await alert.present();
  }

  listDevices(){
    this.bserial.list().then(response=>{
      this.Devices = response;
    },error=>{
      console.log("error");
    })
  }

  connect(address){
    this.bserial.connect(address).subscribe(success=>{
      this.alert("Connected");
      this.SwitchButton = true;
    },error=>{
      console.log("error");
    })
  }

  disconnected(){
    this.bserial.disconnect().then(()=>{
     this.alert("Disconnected");
    })
  }

  sendUp(){
    this.bserial.write('w').then(response=>{
      this.alert("Message sent");
    }).catch(error=>{
      this.bserial.write('w').then(response=>{
        this.alert("Message sent");
      })
    }).catch(error=>{
      this.bserial.write('w').then(response=>{
        this.alert("Message sent");
      })
    }).catch(error=>{
      this.alert("Error Occurred");
    })
  }
  sendDown(){
    this.bserial.write('s').then(response=>{
      this.alert("Message sent");
    }).catch(error=>{
      this.bserial.write('s').then(response=>{
        this.alert("Message sent");
      })
    }).catch(error=>{
      this.bserial.write('s').then(response=>{
        this.alert("Message sent");
      })
    }).catch(error=>{
      this.alert("Error Occurred");
    })
  }
  sendLeft(){
    this.bserial.write('a').then(response=>{
      this.alert("Message sent");
    }).catch(error=>{
      this.bserial.write('a').then(response=>{
        this.alert("Message sent");
      })
    }).catch(error=>{
      this.bserial.write('a').then(response=>{
        this.alert("Message sent");
      })
    }).catch(error=>{
      this.alert("Error Occurred");
    })
  }
  sendRight(){
    this.bserial.write('d').then(response=>{
      this.alert("Message sent");
    }).catch(error=>{
      this.bserial.write('d').then(response=>{
        this.alert("Message sent");
      })
    }).catch(error=>{
      this.bserial.write('d').then(response=>{
        this.alert("Message sent");
      })
    }).catch(error=>{
      this.alert("Error Occurred");
    })
  }



  deviceConnected(){
    this.bserial.subscribe('/n').subscribe(success=>{
      this.handler(success);
    })
  }

  handler(value){
    console.log(value);
  }
}
