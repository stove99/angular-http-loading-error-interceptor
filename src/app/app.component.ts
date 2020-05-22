import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    users$;

    @ViewChild('result') result: ElementRef;

    constructor(
        private http: HttpClient,
        private renderer: Renderer2
    ) { }
    callAPI() {
        this.users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    callAPIWithError() {
        this.users$ = this.http.get('https://jsonplaceholder.typicode.com/usersgg');
    }

    clear() {
        this.renderer.setProperty(this.result.nativeElement, 'innerHTML', '');
    }
}
