import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title1 = 'Uso de Pipes';
  title2 = 'Currency Pipes';
  valor = ' ';
  moneda = 'number';
  symbolMoney = '';
  myDate = Date.now();
}