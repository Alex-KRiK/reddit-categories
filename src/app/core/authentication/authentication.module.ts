import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthComponent } from './auth.component';
import { MaterialModule } from 'src/app/shared/libraries/material.module';


@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        MaterialModule
    ]
})
export class AuthenticationModule { }
