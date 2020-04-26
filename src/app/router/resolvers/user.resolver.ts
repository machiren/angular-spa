import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../api/user.service';
import { User } from '../../model/user';

@Injectable({
    providedIn: 'root',
})
export class UserResolver implements Resolve<User[]> {
    constructor(private userService: UserService) { }

    resolve(): Observable<User[]> {
        return this.userService.get();
    }
}
