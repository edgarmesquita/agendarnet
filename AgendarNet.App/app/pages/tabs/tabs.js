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
var feed_1 = require('../feed/feed');
var search_1 = require('../search/search');
var composer_1 = require('../composer/composer');
var notifications_1 = require('../notifications/notifications');
var profile_1 = require('../profile/profile');
var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = feed_1.FeedPage;
        this.tab2Root = search_1.SearchPage;
        this.tab3Root = composer_1.ComposerPage;
        this.tab4Root = notifications_1.NotificationsPage;
        this.tab5Root = profile_1.ProfilePage;
    }
    TabsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/tabs/tabs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
