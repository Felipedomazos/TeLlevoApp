import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Viajescreados } from '../interfaces/viajescreados';


      @Injectable({
        providedIn: 'root'
      })
      export class BdLocalService {

        viaje: Viajescreados[]=[];
        private _storage: Storage | null = null;

        constructor(private storage: Storage, public toastController: ToastController) {
          this.init();
          //cargo el contenido de localStorage en agenda
          this.cargarViajes();
        }

        guardarViajes(fecha:Date, hora:Date, pasajeros:Number, destino:String, precio:Number){
            this.viaje.unshift({fecha:fecha,hora:hora,pasajeros:pasajeros,destino:destino,precio:precio})
            this._storage.set('viaje',this.viaje);
            this.presentToast("Viaje creado con Exito!!")
        }
        async cargarViajes() {
          const miViaje=await this.storage.get('viajes');
          if (miViaje) {
            this.viaje=miViaje;
          }
        }

        async init() {
          // If using, define drivers here: await this.storage.defineDriver(/*...*/);
          const storage = await this.storage.create();
          this._storage = storage;
        }

        async presentToast(mensaje:string) {
          const toast = await this.toastController.create({
            message: mensaje,
            translucent:true,
            color:'medium',
            position: 'top',
            duration: 2000
          });
          toast.present();
        }
      }
