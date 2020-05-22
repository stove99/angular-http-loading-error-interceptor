import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoadingInterceptor } from './common/interceptor/loading.interceptor';
import { ErrorInterceptor } from 'src/app/common/interceptor/error.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [
        // 요기 순서대로 인터셉터 실행됨
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
