import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmacionModule } from '../admin/modals/confirmacion/confirmacion.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        ConfirmacionModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
