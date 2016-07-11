import {Component} from '@angular/core';
import {FeedPage} from '../feed/feed';
import {SearchPage} from '../search/search';
import {EstablishmentPage} from '../establishment/establishment';
import {NotificationsPage} from '../notifications/notifications';
import {ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

    private tab1Root: any;
    private tab2Root: any;
    private tab3Root: any;
    private tab4Root: any;
    private tab5Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = FeedPage;
    this.tab2Root = SearchPage;
    this.tab3Root = EstablishmentPage;
    this.tab4Root = NotificationsPage;
    this.tab5Root = ProfilePage;
  }
}
