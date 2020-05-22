import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * API 호출할때 로딩 에니메이션 처리 인터셉터
 */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    activated = 0;

    constructor(
        private spinner: NgxSpinnerService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (this.activated === 0) {
            console.log('로딩 똥그라미 출력');
            this.spinner.show();
        }

        this.activated++;

        return next.handle(request).pipe(
            delay(4000),    // 테스트용 delay 5초
            finalize(() => {
                this.activated--;
                if (this.activated === 0) {
                    console.log('로딩 똥그라미 지우기');
                    this.spinner.hide();
                }
            })
        );
    }
}
