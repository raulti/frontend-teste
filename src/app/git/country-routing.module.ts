import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';

const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
        children: [
            { path: '', redirectTo: 'list' },
            { path: 'list', loadChildren: './list/list.module#ListModule' },
            { path: 'cadastrar', loadChildren: './form/form.module#FormModule'},
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountryRoutingModule {}
