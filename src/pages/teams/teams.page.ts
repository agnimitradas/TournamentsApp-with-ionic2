import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamHomePage } from '../pages_exports';
import { TournamentService } from '../../app/shared/shared-pages';

@Component({
  selector: 'page-tournament',
  templateUrl: 'teams.page.html'
})
export class TeamsPage {

  tournamentDetails: any;
  teamsDetails: any;
  searchKey:string="";
  teamsDetailsInfo:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private _tournamentService:TournamentService,
              private _loadingController: LoadingController) {
    
        this.tournamentDetails = this.navParams.data;
  }

  ionViewDidLoad(){
    let loader= this._loadingController.create({
      content: 'Loading...'
    });

    

    loader.present().then(()=>{
        this._tournamentService.getCurrentTournamentData(this.tournamentDetails.id)
         .subscribe(data =>{
                      this.teamsDetails = data.teams;
                      this.teamsDetailsInfo= this.teamsDetails;
                    });
         loader.dismiss();
    })
  }

  itemTapped($event,teamDetails){
    this.navCtrl.push(TeamHomePage,teamDetails)
  } 

  updateTeams(){
    let searchKeyText = this.searchKey.toLowerCase();
    var updatedTeams = [];
    for(let i=0; i< this.teamsDetailsInfo.length; i++){
      if( this.teamsDetailsInfo[i].name.toLowerCase().indexOf(searchKeyText) >= 0 ){
          updatedTeams.push(this.teamsDetailsInfo[i]);
      }else{

      }
    }
    this.teamsDetails = updatedTeams;
  } 

}
