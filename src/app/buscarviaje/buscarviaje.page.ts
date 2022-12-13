import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BdLocalService } from '../services/bd-local.service';
import { Viajescreados } from '../interfaces/viajescreados';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-buscarviaje',
  templateUrl: './buscarviaje.page.html',
  styleUrls: ['./buscarviaje.page.scss'],
})
export class BuscarviajePage implements OnInit {

  viaje: Viajescreados[] = [];
  data: any;
  email: any;

constructor(private emailComposer: EmailComposer,private menuCtrl: MenuController,private activeroute: ActivatedRoute,private router: Router,private toastController: ToastController, public bdlocalservice: BdLocalService) { 
  this.activeroute.queryParams.subscribe(params => { 
    if (this.router.getCurrentNavigation().extras.state) { 
      this.data = this.router.getCurrentNavigation().extras.state.viaje; 
      console.log(this.data) 
    }else{this.router.navigate(["/buscarviaje"])} 
  });
}

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

  enviarEmail() {
    let email = {
      to: 'fe.domazos@duocuc.cl',
      subject: 'Viaje Reservado',
      body: 'Viaje reservado con exito, con destino a '+this.data.destino+' el dia '+this.data.fecha+' a las '+this.data.hora+'. Valor del pasaje: $'+this.data.precio+'.',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
