import {Component, ViewChild} from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {TabsPage} from './pages/tabs/tabs';
import {FeedPage} from './pages/feed/feed';
import {NotificationsPage} from './pages/notifications/notifications';
import {ProfilePage} from './pages/profile/profile';

import {PostService} from './services/post';

@Component({
    templateUrl: 'build/app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    private rootPage: any = TabsPage;

    pages: Array<{ title: string, component: any, icon: string }>;

    constructor(private platform: Platform) {
        this.initializeApp();

        // set our app's pages
        this.pages = [
            { title: 'Feed', component: FeedPage, icon: "home" },
            { title: 'Notificações', component: NotificationsPage, icon: "notifications" },
            { title: 'Perfil', component: ProfilePage, icon: "contact" }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {

        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });

        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
ionicBootstrap(MyApp, [PostService], {})