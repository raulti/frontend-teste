import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})

export class ListComponent implements OnInit {

    public countrys;

    constructor(private _countryService: CountryService) {
    }

    ngOnInit() {
        this.getCountrys();
    }

    /**
     * Recupera lista de países.
     */
    getCountrys() {
        this._countryService.getCountrys().subscribe(data => {
            this.countrys = data;
        }, error => {
            alert(error.error.text);
        });
    }
}
