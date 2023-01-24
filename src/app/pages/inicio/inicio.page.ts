import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll! : IonInfiniteScroll;

  data: any[] = Array(3);

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    console.log('Cargando siguientes ...');
    setTimeout(() =>{
      if (this.data.length > 35) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArr = Array(3);
      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1000 );
  }

}
