import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CountryService } from './country.service';
import { CountryComponent } from './country.component';
import { CountryRoutingModule } from './country-routing.module';

import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { HeaderComponent } from '../layout/components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        CountryRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [CountryComponent, SidebarComponent, HeaderComponent],
    providers: [CountryService],
})
export class CountryModule {}
