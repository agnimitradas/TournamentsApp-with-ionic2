import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyTeamPage, TournamentPage, TeamsPage,TeamDetailsPage, Game, StandingPage, TeamHomePage, MapPage} from '../pages/pages_exports';
import { TournamentService,FavouriteTournamentService } from './shared/shared-pages'

@NgModule({
  declarations: [
    MyApp,
    MyTeamPage,
    TournamentPage,
    TeamsPage,
    TeamDetailsPage,
    Game,
    StandingPage,
    TeamHomePage,
    MapPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     AgmCoreModule.forRoot({ apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamPage,
    TournamentPage,
    TeamsPage,
    TeamDetailsPage,
    Game,
    StandingPage,
    TeamHomePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TournamentService,
    HttpModule,
    FavouriteTournamentService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
