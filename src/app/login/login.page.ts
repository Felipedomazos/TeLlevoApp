import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    usuario:"",
    contrasena:""
  }

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  ingresar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/home'],navigationExtras);
  }

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Formulario enviado al correo exitosamente!',
      duration: 2000,
      position: position
    });

    await toast.present();
  }

}
