import { Injectable, ErrorHandler, NgZone, Injector } from '@angular/core';
import { ErrorService } from './error/error.service';

@Injectable()
export class AppErrorHandlerService implements ErrorHandler {
    constructor(private ngZone: NgZone, private injector: Injector) { }

    handleError(err: any): void {
        console.error(err);
        const error = err.rejection || err;
        this.showError(error?.error?.message, error);
    }

    showError(errorMessage: string, error: string) {
        this.ngZone.run(() => {
            const common = this.injector.get(ErrorService);
            common.showError(errorMessage || error);
        });
    }
}
