import {Component} from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TournamentPage, TeamHomePage } from '../pages_exports';
import { TournamentService,FavouriteTournamentService } from '../../app/shared/shared-pages';

@Component({
    templateUrl: './my-teams.page.html'
})
export class MyTeamPage{
    teamsDetails: any;
    favTeams:any;

    constructor(private _nav: NavController,
                private _tournamentService: TournamentService,
                private _loadingController:LoadingController,
                private _favouriteTournamentService:FavouriteTournamentService){}

    // ionViewDidLoad(){
       
    // }            

    ionViewDidLoad(){
         this.favTeams = this._favouriteTournamentService.getTheFavourites();
     }

    goToTournaments(): void{
        this._nav.push(TournamentPage);
    }

    favTeamTapped(favTeam){
        let loader = this._loadingController.create({
            content: "Loading..."
        });
        loader.present().then(() =>{
            this._tournamentService.getCurrentTournamentData(favTeam.tournamentId)
            .subscribe(data =>this._nav.push(TeamHomePage,favTeam.team));
            loader.dismiss();
        })
    }
    
}