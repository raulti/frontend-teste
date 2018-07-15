import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';

const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
        children: [
            { path: '', redirectTo: 'country' },
            { path: 'country', loadChildren: './home/home.module#HomeModule' },
            { path: 'country/list', loadChildren: './list/list.module#ListModule' }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountryRoutingModule {}
