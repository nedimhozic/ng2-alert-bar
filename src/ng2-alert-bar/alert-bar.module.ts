import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertBar } from './alert-bar.service';
import { AlertBarComponent } from './alert-bar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        AlertBarComponent
    ],
    providers: [
        AlertBar
    ],
    exports: [
        AlertBarComponent
    ]
})
export class AlertBarModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AlertBarModule,
            providers: [AlertBar]
        }
    }
}