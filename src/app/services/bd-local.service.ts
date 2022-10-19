import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Viajescreados } from '../interfaces/viajescreados';


@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  viaje: Viajescreados[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    this.cargarViajes();
  }

  async ionViewWillEnter() {
    await this.storage.create();
  }

  guardarViajes(fecha: Date, hora: Date, pasajeros: Number, destino: String, precio: Number) {
    this.viaje.unshift({ fechaViaje: fecha, horaViaje: hora, pasajeroViaje: pasajeros, destinoViaje: destino, precioViaje: precio })
    this._storage.set('viaje', this.viaje);
    this.presentToast("Viaje creado con Exito!!")
  }
  async cargarViajes() {
    const miViaje = await this.storage.get('viaje');
    console.log('Viaje', miViaje);
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent: true,
      color: 'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
