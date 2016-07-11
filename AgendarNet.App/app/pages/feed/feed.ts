import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PostService} from '../../services/post';

@Component({
    templateUrl: 'build/pages/feed/feed.html'
})
export class FeedPage {
    constructor(private navController: NavController, private post : PostService) {
    }
}
