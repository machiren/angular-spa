import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthUserResolver implements Resolve<any> {
    constructor() { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return of(true);
        // return this.api.auth.getAuthUser(route.params.id);
    }
}
