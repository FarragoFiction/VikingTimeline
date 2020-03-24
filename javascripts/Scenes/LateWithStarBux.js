function LateWithStarBux(session){
	this.session=session;
	this.canRepeat = true; //THE MAN IS ALWAYS LATE. ALWAYS.
	this.playerList = [];  //what players are already in the medium when i trigger?
	this.bulliedPlayer;
	this.bitchinLands = ["Oars", "Vikings", "Gods", "Cockroaches", "Paladins", "Sheep", "Feasts", "Boats", "Vessels", "Sigils","Powers","Rangers","Minerals","Refrances","Raiders","Empires","Conflicts","Berserkers","Slaughters","Heathens","Heretics","Tidings","Longships","Raids","Skalds","Elders","Voyagers","Mist","Wrestling","Giants","Elves","Dwarves","Norns","Axes","Tomahawks","Bows","Fleets","Ice","Icebergs","Snow","Pines"];

//theoretically i can make a list of things to choose, and from then make it work?
    this.doshit = function(){
        if(Math.seededRandom() > .5){
          this.bulliedPlayer.land = "Realm of " + getRandomElementFromArray(this.bitchinLands) + " and " + getRandomElementFromArray(this.bitchinLands); //pick from this list pls
          return "A PALADYN shows up and makes the " + this.bulliedPlayer.htmlTitle() + " have the land "+ this.bulliedPlayer.land + " or " + this.bulliedPlayer.shortLand() + ".";
        }else{
          this.bulliedPlayer.chatHandle = getRandomElementFromArray(this.bitchinLands).toLowerCase() + getRandomElementFromArray(this.bitchinLands); //pick from this list pls x2
         return "A PALADYN shows up and makes the " + this.bulliedPlayer.htmlTitle() + " have the chathandle " + this.bulliedPlayer.chatHandleShort() + ".";
        }
    }


//if you're particularly unlucky, paladyn just abuses you
//i guess this targets multiple people now. fuck it
	this.trigger = function(playerList){
		this.playerList = playerList;
		this.bulliedPlayer = null;
		for(var i = 0; i<this.playerList.length; i++){ //want to make sure the player is alive so they can be bullied
		      var player = this.playerList[i];
		      var rollValueLow = player.rollForLuck("minLuck") //be REAL BAD at avoiding bad shit
		      if(rollValueLow > 85){
		           this.bulliedPlayer = player;
		           return true;
		       }
	}
    return false;
}

	this.renderContent = function(div){
		div.append("<br> <img src = 'images/sceneIcons/paladyn_icon.png'>"+this.content());
	}

	this.content = function(){

	    return this.doshit();

	    //fucking... okay, how to make this work
	}


}
