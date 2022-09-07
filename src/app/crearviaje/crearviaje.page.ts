import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {

  constructor(private toastController: ToastController, private menuCtrl: MenuController,private activeroute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duracion ? duracion: 2000
    });
    
    toast.present();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
