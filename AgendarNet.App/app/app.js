"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var tabs_1 = require('./pages/tabs/tabs');
var feed_1 = require('./pages/feed/feed');
var notifications_1 = require('./pages/notifications/notifications');
var profile_1 = require('./pages/profile/profile');
var post_1 = require('./services/post');
var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = tabs_1.TabsPage;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Feed', component: feed_1.FeedPage, icon: "home" },
            { title: 'Notifica��es', component: notifications_1.NotificationsPage, icon: "notifications" },
            { title: 'Perfil', component: profile_1.ProfilePage, icon: "contact" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav), 
        __metadata('design:type', ionic_angular_1.Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'build/app.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
ionic_angular_1.ionicBootstrap(MyApp, [post_1.PostService], {});
