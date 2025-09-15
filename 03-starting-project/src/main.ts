import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {
  HttpEventType,
  HttpHandler,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
}).catch((err) => console.error(err));

function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  console.log(req);
  // use this to set jwt or any other
  // const request = req.clone({
  //   headers:req.headers.set()
  // })
  return next(req); // to pass req. to next interceptor or to app
  
  // to deal with response interceptor
  
  // return next(req).pipe(
  //   tap({
  //     next: (event) => {
  //       if (event.type === HttpEventType.Response) console.log(event.status);
  //     },
  //   })
  // ); 
}

/**
 * include this HttpClient in providers -> so that we can use everywhere in app
 * 
 * req and res. interceptor
 * 
 * Class based Interceptor
 * 
 * @Injectable()
class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL: ' + req.url);
    return handler.handle(req);
  }
}
 */
