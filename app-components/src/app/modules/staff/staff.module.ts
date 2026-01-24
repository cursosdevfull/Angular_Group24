import { Inject, Injectable, ModuleWithProviders, NgModule } from "@angular/core";

export type STAFF_MODULE_CONFIG = {
    environment: string;
    apiKey: string;
};

@Injectable()
export class StaffService {
    constructor(@Inject("StaffModuleConfig") private config: STAFF_MODULE_CONFIG) { }

    getStaff() {
        return {
            environment: this.config.environment,
            apiKey: this.config.apiKey,
            apiUrl: this.config.environment === "production" ? "https://staff.api.production.com" : "https://staff.api.staging.com"
        }
    }
}

@NgModule()
export class StaffModule {
    static forRoot(config: STAFF_MODULE_CONFIG): ModuleWithProviders<StaffModule> {
        return {
            ngModule: StaffModule,
            providers: [
                {
                    provide: "StaffModuleConfig",
                    useValue: config
                },
                StaffService
            ]
        }
    }
}