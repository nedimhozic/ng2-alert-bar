import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AlertBarOptions } from './alert-bar.options';

@Injectable()
export class AlertBar {

    public open = new Subject();

    constructor() {
    }

    public success(title: string, body: string) {
        this.open.next({ type: Type.success, title: title, body: body });
    }

    public error(title: string, body: string) {
        this.open.next({ type: Type.error, title: title, body: body });
    }

    public warning(title: string, body: string) {
        this.open.next({ type: Type.warning, title: title, body: body });
    }

    public info(title: string, body: string) {
        this.open.next({ type: Type.info, title: title, body: body });
    }
}

export enum Type {
    success,
    error,
    warning,
    info
}