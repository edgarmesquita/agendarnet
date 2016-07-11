import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class PostService {

    constructor(private http: Http) {
    }

    findAll() {
        let repos = this.http.get('https://api.github.com/users/${username}/repos');
        return repos;
    }

    findById(id) {
        
    }

}