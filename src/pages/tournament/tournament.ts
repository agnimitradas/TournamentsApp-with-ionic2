import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../pages_exports';
import { TournamentService } from '../../app/shared/shared-pages';

/*
  Generated class for the Tournament page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournament',
  templateUrl: 'tournament.html'
})
export class TournamentPage {

  tournaments: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _tournamentService: TournamentService,
              private _loadingController: LoadingController) {}

  ionViewDidLoad() {
    let loader = this._loadingController.create({
      content: 'Loading...'
    })

    loader.present().then(() =>{
      this._tournamentService.getTournament().then(data => this.tournaments = data);
      loader.dismiss();
    })
    
  }

  itemTapped($event,tournament){
    this.navCtrl.push(TeamsPage, tournament);
  }


}
