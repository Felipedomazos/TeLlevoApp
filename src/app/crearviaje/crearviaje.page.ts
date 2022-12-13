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

  viaje={
    fecha: "",
    hora: "",
    pasajeros: "",
    destino: "",
    precio: ""
  }

  field: string= "";

  constructor(private toastController: ToastController, private menuCtrl: MenuController,private activeroute: ActivatedRoute,private router: Router, public bdlocalservice: BdLocalService) { }

  ngOnInit() {
  }

  ingresar(){
    if (this.validateModel(this.viaje)) {
    let navigationExtras: NavigationExtras = {
      state: {
        viaje: this.viaje
      }
    };
    this.router.navigate(['/buscarviaje'],navigationExtras);
  }else{
    this.presentToast("Falta ingresar "+this.field,4000)
  }
}

  validateModel(model: any){
    for (var [key, value] of Object.entries(model)) {
      if (value == "") {
        this.field = key;
      return false;
      }
      return true;
    }
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
    this.bdlocalservice.guardarViajes(this.viaje.fecha,this.viaje.hora,this.viaje.pasajeros,this.viaje.destino,this.viaje.precio)
  }
}
