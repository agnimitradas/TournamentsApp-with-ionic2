import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { TournamentService } from '../../app/shared/shared-pages';
declare var window: any;

@Component({
   templateUrl: 'map.page.html'
})
export class MapPage{

    map: any={
      lat: '',
      lng: '',
      zoom: 15,
      markerLabel: '' 
    };

    constructor(public navParams: NavParams,private _tournamentService:TournamentService) { }

ionViewDidLoad(){
    let games = this.navParams.data;
    let tourneyData = this._tournamentService.getCurrentTournamentDetails();
    let location = tourneyData.locations[games.locationUrl];

    this.map = {
      lat: location.latitude,
      lng: location.longitude,
      zoom: 12,
      markerLabel: games.location 
    };
    console.log(this.map);
  }

  getDirections() { 
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`; 
  }
}