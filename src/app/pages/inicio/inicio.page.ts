import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  /**
  ingreso = {
    cantidad:'',
    lugar:''
  }
      **/
  constructor(private menuController: MenuController ,private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  /**
  onSubmit(){
    console.log('submit');
    console.log(this.ingreso);
  }
  **/
  async registro(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Agregadó',
      message: 'ganaste un cupo para starbucks',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
