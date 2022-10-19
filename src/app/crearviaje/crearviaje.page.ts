import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BdLocalService } from '../services/bd-local.service';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {

  fecha: Date;
  hora: Date;
  pasajeros: Number;
  destino: string;
  precio: Number;

  constructor(private toastController: ToastController, private menuCtrl: MenuController,private activeroute: ActivatedRoute,private router: Router, public bdlocalservice: BdLocalService) { }

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

  atras(){
    this.router.navigate(['/home'])
  }

  guardar(){
    this.bdlocalservice.guardarViajes(this.fecha,this.hora,this.pasajeros,this.destino,this.precio)
  }
}
