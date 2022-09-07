import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-buscarviaje',
  templateUrl: './buscarviaje.page.html',
  styleUrls: ['./buscarviaje.page.scss'],
})
export class BuscarviajePage implements OnInit {

  constructor(private menuCtrl: MenuController,private router: Router,private toastController: ToastController) { }

  ngOnInit() {
  }

  atras(){
    this.router.navigate(['/home'])
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
