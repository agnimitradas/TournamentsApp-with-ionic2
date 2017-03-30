import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TournamentService, FavouriteTournamentService } from '../../app/shared/shared-pages'
import { Game } from '../game/game.page'
import { IonicStorageModule } from  '@ionic/storage';

@Component({
  selector: 'page-tournament',
  templateUrl: 'team-detail.page.html'
})
export class TeamDetailsPage {

  team: any;
  tournamentData: any;
  games:any;
  allGames:any = [];
  winIndicator: string;
  isFollowing : boolean;
  sliderFlag: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _tournamentService:TournamentService,
              private _toastr:ToastController,
              private _favouriteTournamentService: FavouriteTournamentService) {
                 this.team = navParams.data;
              }
  
  ionViewDidLoad(){
    let tourn = this.tournamentData = this._tournamentService.getCurrentTournamentDetails();
    let gamesData = tourn.games;
    for(let i=0; i< gamesData.length; i++){
      if(gamesData[i].team1Id === this.team.id || gamesData[i].team2Id === this.team.id){
          if(gamesData[i].team1Id === this.team.id){
            var opponentName =gamesData[i].team2;
            var scoreDisplay = this.getScoreDisplay(gamesData[i].team1Score,gamesData[i].team2Score);
            var homeAway = "vs";
          }else{
            var opponentName =gamesData[i].team1;
            var scoreDisplay = this.getScoreDisplay(gamesData[i].team2Score,gamesData[i].team1Score);
            var homeAway = "at";
          };
          let gamesObj= {
                          team1: gamesData[i].team1,
                          team2: gamesData[i].team2,
                          gameId: gamesData[i].id,
                          opponent: opponentName,
                          team1Score: gamesData[i].team1Score,
                          team2Score: gamesData[i].team2Score,
                          time: Date.parse(gamesData[i].time),
                          location: gamesData[i].location,
                          locationUrl: gamesData[i].locationId,
                          scoreDisplay: scoreDisplay,
                          homeAway: homeAway
                      } 
       this.allGames.push(gamesObj);
      } 
            
    } 

    //Get isFollowing or not
    this.sliderFlag =  this.isFollowing = this._favouriteTournamentService.getIsFollowing(this.team.id); 
   console.log(this.isFollowing);

  }

  getScoreDisplay(team1Score, team2Score) {
        if (team1Score && team2Score) {
            var teamScore = team1Score ;
            var opponentScore =  team2Score ;
            this.winIndicator = teamScore > opponentScore ? "W: " :teamScore === opponentScore ? "D: ": "L: ";
            return this.winIndicator + teamScore + "-" + opponentScore;
        }
        else {
            return "";
        }
    }

  gameClicked($event,game){
     this.navCtrl.parent.parent.push(Game,game);
  }

  winOrLossBadge(game){
    return game.scoreDisplay ? game.scoreDisplay[0]: '';
  }

  getWinOrLossClass(game){
    return game.scoreDisplay.indexOf('W:') === 0 ? 'primary': 'danger';
  }

  addToFavourites(team){
    if(!this.sliderFlag){
      if(this.isFollowing){
          this._favouriteTournamentService.addNewFavourite(team,this.tournamentData.tournament.id,this.tournamentData.tournament.name);
        }else{
          this._favouriteTournamentService.removeFromFavourites(team.id);
        }
        let toastr = this._toastr.create({
        message: this.toasterMsg(),
        duration: 2000,
        position: 'bottom',
        cssClass: 'primary'
      })
      toastr.present();
    }else{
        this.sliderFlag = !this.sliderFlag;
    }
  }
  toasterMsg(){
    if(this.isFollowing){
      return 'Added to favourites';
    }else{
      return 'Removed from favourites';
    }
  }
}
