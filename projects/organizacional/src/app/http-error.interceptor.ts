import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpErrorInterceptor {
  intercept(
    resquest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(resquest).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
