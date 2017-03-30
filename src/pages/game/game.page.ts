import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../pages_exports';
import { TournamentService } from '../../app/shared/shared-pages';
declare var window:any;

@Component({
  selector: 'page-tournament',
  templateUrl: 'game.page.html'
})
export class Game {

  gameData:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _tournamentService:TournamentService) {
      this.gameData = navParams.data;
  }

  goToNavigation(){
    let tourneyData = this._tournamentService.getCurrentTournamentDetails();
    let location = tourneyData.locations[this.gameData.locationUrl];
    console.log(location);
    window.location = `geo:${location.latitude},${location.longitude};u=35;`;
  }

  goToMap(){
    this.navCtrl.push(MapPage, this.gameData);
  }

}
