import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle,
   IonContent,IonFooter,IonButtons ,
   IonIcon,IonMenuButton,IonSearchbar,IonBreadcrumb,IonCard,IonCardHeader,IonCardTitle,
   IonCardSubtitle,IonCardContent,IonList,IonLabel,IonItem, IonTabs, IonTabBar, IonTabButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent
     ,IonFooter,IonToolbar,IonButtons,IonMenuButton,IonSearchbar
     ,IonBreadcrumb,IonIcon,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonList,IonLabel,IonItem,
    IonTabs,IonTabBar,IonTabButton,RouterLink],
})
export class HomePage {
  constructor() {}
}
