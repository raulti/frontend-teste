import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FormRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageHeaderModule } from './../../shared';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule, NgxMaskModule],
    declarations: [HomeComponent]
})
export class HomeModule { }
