import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-top-choferes',
  templateUrl: './top-choferes.page.html',
  styleUrls: ['./top-choferes.page.scss'],
})
export class TopChoferesPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  choferes: any =[];

  runHttp() {
    this.http.get('https://tellevoapp-95dd1-default-rtdb.firebaseio.com/topchoferes.json')
      .subscribe(data =>  {
        console.log(data);
        this.choferes = data;
      });
}


}
