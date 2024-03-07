import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonLabel, IonSearchbar, IonicModule } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SearchPage,
    RouterLink]
})
export class OrdersPage implements OnInit {
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
   
  ];
  public results = [...this.data];

  handleInput(event: any) {
    console.log(event);
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
  constructor() { }

  ngOnInit() {
  }

}
