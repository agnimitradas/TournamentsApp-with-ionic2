import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TournamentService{

    private baseUrl = 'https://tournament-mobileapp-ionic2.firebaseio.com/';

    currentTournamentData: any = {};

    constructor(private _http: Http){}

    getTournament(){
        let apiUrl='/tournaments.json';
        return new Promise(resolve => {
                this._http.get(this.baseUrl+apiUrl).subscribe(res => resolve(res.json()));
            })
    };

    getCurrentTournamentData(tournamentId): Observable<any>{
        return this._http.get(`${this.baseUrl}/tournaments-data/${tournamentId}.json`)
        .map((response:Response) => {
            this.currentTournamentData = response.json();
            return this.currentTournamentData;
        })
    }

    getCurrentTournamentDetails(){
        return this.currentTournamentData;
    }
}