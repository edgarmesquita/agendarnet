import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/common';

@Component({
    templateUrl: 'build/pages/establishment/establishment.html'
})
export class EstablishmentPage {

    public loginForm: any;

    constructor(private navController: NavController, private form: FormBuilder) {
        // Create a new form group
        this.loginForm = form.group({
            // name should match [ngFormModel] in your html
            username: ["", Validators.required], // Setting fields as required
            password: ["", Validators.required]
        });
    }
    // This is called on form submit
    login(event) {
        console.log(this.loginForm.value) // {username: <usename>, password: <password> }
        event.preventDefault();
    }
}
