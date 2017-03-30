import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TournamentService } from '../../app/shared/shared-pages';

@Component({
  selector: 'page-standing',
  templateUrl: 'standing.page.html',
  
})
export class StandingPage {

  tournamentData:any;
  unsortedTourney:any;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _tournamentService: TournamentService) {}
  
ionViewDidLoad(){
   this.unsortedTourney = this._tournamentService.getCurrentTournamentDetails().standings;
   this.onOrder();

}
 
  onOrder(){
    this.tournamentData = this.unsortedTourney.sort(function(a:any, b:any){
        return b.pointsDiff-a.pointsDiff;
    });
  }

}
