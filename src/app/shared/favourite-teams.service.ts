import { Injectable } from '@angular/core';

@Injectable()
export class FavouriteTournamentService {

    favTeams: any=[
        {
            team: {id: 812,name: "Baltimore Stars",coach: "James",division: "6th grade"},
            tournamentId: "3dd50aaf-6b03-4497-b074-d81703f07ee8",
            tournamentName: "Cager Classic"    
        },
        {
            team: {id: 6157,name: "Baltimore Elite 5th",coach: "Brian Jackson",division: "5th Black"},
            tournamentId: "89e13aa2-ba6d-4f55-9cc2-61eba6172c63",
            tournamentName: "Cager Classic"    
        }

    ]

    constructor() { }

    addNewFavourite(team,tournamentId,tournamentName){
        let newEntry = {
            team: team,
            tournamentId: tournamentId,
            tournamentName: tournamentName
        }
        this.favTeams.push(newEntry);
    }

    removeFromFavourites(teamId){
       for(let i=0; i<this.favTeams.length; i++){
           if(this.favTeams[i].team.id === teamId){
               this.favTeams.splice(i-1,1);
           }
       }console.log(this.favTeams);
    }

    getTheFavourites(){
        return this.favTeams;
    }

    getIsFollowing(teamId){
         let isFollowing = false;
         for(let i=0; i< this.favTeams.length; i++){
           if(this.favTeams[i].team.id === teamId){
               isFollowing = true;
               break;
           }else{
               isFollowing = false;
           }
          }
        return isFollowing;
       }
}