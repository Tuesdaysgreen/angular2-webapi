﻿import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{message}}</h1>`
})

export class AppComponent {
    public message = "Hello world!";
}