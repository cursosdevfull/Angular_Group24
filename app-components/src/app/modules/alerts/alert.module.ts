import { Inject, Injectable, InjectionToken, ModuleWithProviders, NgModule } from "@angular/core";

export const ALERT_OPTIONS = new InjectionToken("ALERT_OPTIONS");

export type OPTIONS_ALERT = { important: boolean };

@Injectable()
export class AlertService {
    constructor(@Inject(ALERT_OPTIONS) private options: { important: boolean }) { }

    showAlert(message: string) {
        const msg = this.options.important ? `IMPORTANT: ${message}` : message;
        alert(msg);
    }
}


@NgModule()
export class AlertModule {
    static forRoot(config: OPTIONS_ALERT): ModuleWithProviders<AlertModule> {
        return {
            ngModule: AlertModule,
            providers: [
                {
                    provide: ALERT_OPTIONS,
                    useValue: config
                },
                AlertService
            ]
        }
    }
}