import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StandingPage, TeamDetailsPage, MyTeamPage } from '../pages_exports';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.page.html'
})
export class TeamHomePage {
  team: any;
  teamDetailedTab = TeamDetailsPage;
  standingsTab = StandingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.team = navParams.data;
  }
  goHome(){
    this.navCtrl.popToRoot();
  }

}
