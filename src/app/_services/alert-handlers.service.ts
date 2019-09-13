import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AlertHandlersService {
  isLoading = false;
  loading: any;

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController) { }

  // presentConfirm(title, message, btnText): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const confirmPopup = this.alertCtrl.create({
  //       title: title,
  //       message: message,
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           role: 'Cancel',
  //           handler: () => {
  //             reject(null);
  //           }
  //         },
  //         {
  //           text: btnText,
  //           handler: () => {
  //             resolve(null);
  //           }
  //         }
  //       ]
  //     });
  //     confirmPopup.present();
  //   });
  // }

  // presentCustomConfirm(title, message, btn1Text, btn2Text): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const confirmPopup = this.alertCtrl.create({
  //       title: title,
  //       message: message,
  //       buttons: [
  //         {
  //           text: btn1Text,
  //           handler: () => {
  //             reject();
  //           }
  //         },
  //         {
  //           text: btn2Text,
  //           handler: () => {
  //             resolve(2);
  //           }
  //         }
  //       ]
  //     });
  //     confirmPopup.present();
  //   });
  // }

  // presentAlert(title, message): Promise<any> {
  //   return new Promise(resolve => {
  //     const alertPop = this.alertCtrl.create({
  //       title: title,
  //       message: message,
  //       buttons: [
  //         {
  //           text: 'Ok',
  //           handler: () => {
  //             resolve(1);
  //           }
  //         }
  //       ]
  //     });
  //     alertPop.present();
  //   });
  // }

  async presentErrorAlert(title, message) {
    const alert = await this.alertCtrl.create({
    message: message,
    subHeader: title,
    buttons: ['Dismiss']
   });
    await alert.present();
  }

  // presentErrorAlert(title, msg): Promise<any> {
  //   return new Promise(resolve => {
  //     const title = '<div class="error-icon">&#9888;</div>';
  //     let message = msg;
  //     let alertPop = this.alertCtrl.create({
  //       title: title,
  //       message: message,
  //       buttons: [
  //         {
  //           text: 'Ok',
  //           handler: () => {
  //             resolve(1);
  //           }
  //         }
  //       ],
  //       cssClass: "error-alert"
  //     });
  //     alertPop.present();
  //   });
  // }

  // async presentLoading() {
  //   this.loading =  this.loadingCtrl.create({
  //     message: 'Loading...',
  //   });
  //   this.loading.present();

  //   // const { role, data } = await loading.onDidDismiss();

  //   console.log('Loading dismissed!');
  // }

  // dismissLoading() {
  //   this.loading.onDidDismiss();
  // }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }
}
