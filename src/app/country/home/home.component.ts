import { saveAs } from 'file-saver';
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

    ngOnInit() { }

    /**
     * Recupera lista de países para download no formato .csv.
     */
    getCountrysCsv() {
        this._countryService.downloadCsv().subscribe(data => saveAs(data, `coutrys.csv`));
    }

    /**
     * Recupera lista de países para download no formato .xlsx.
     */
    getCountrysXlsx() {
        this._countryService.downloadXlsx().subscribe(data => saveAs(data, `coutrys.xlsx`));
    }
}
