import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

/**
 * 에러 처리 인터셉터
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private toastr: ToastrService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);

                this.toastr.error('에러 났어염', 'Error');
                // this.toastr.error(error.message, 'Error');

                return throwError(error);
            })
        );
    }
}
