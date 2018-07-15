import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})

export class HomeComponent implements OnInit {

    public countryServive;

    constructor(private _countryService: CountryService, private router: Router) {
        this.countryServive = _countryService;
    }

    ngOnInit() {}

}
