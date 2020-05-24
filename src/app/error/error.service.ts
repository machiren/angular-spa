import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private message: NzMessageService) { }

  showSuccess(message: string) {
    return this.message.create('success', message);
  }

  showInfo(message: string) {
    return this.message.create('info', message);
  }

  showLoading(message: string) {
    return this.message.create('loading', message);
  }

  showWarn(message: string) {
    return this.message.create('warn', message)
  }

  showError(message: string) {
    return this.message.create('error', message);
  }
}
