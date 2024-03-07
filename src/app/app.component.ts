import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { IonApp, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList,
   IonMenu, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,IonHeader, IonToolbar, IonTitle, IonContent,IonToolbar,IonMenu,IonToolbar
    ,IonIcon,IonList,IonLabel,IonItem,IonButton],
})
export class AppComponent {
  constructor() {}
}
