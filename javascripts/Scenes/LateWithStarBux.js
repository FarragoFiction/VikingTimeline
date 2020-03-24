function LateWithStarBux(session){
	this.session=session;
	this.canRepeat = true; //THE MAN IS ALWAYS LATE. ALWAYS.
	this.playerList = [];  //what players are already in the medium when i trigger?
	this.bulliedPlayers = [];

//theoretically i can make a list of things to choose, and from then make it work?
    this.doshit = function(){
        this.bulliedPlayers[0].land = "Land of Butts and Stuff"; //HOLD ON. I CAN MAKE THIS A LIST.
    }
//if you're particularly unlucky, paladyn just abuses you
//
	this.trigger = function(playerList){
		this.playerList = playerList;
		this.bulliedPlayers = [];
		for(var i = 0; i<this.playerList.length; i++){ //want to make sure the player is alive so they can be bullied
		      var player = this.playerList[i];
		      var rollValueLow = player.rollForLuck("minLuck") //be REAL BAD at avoiding bad shit
		      if(rollValueLow > 85){
		           this.bulliedPlayers.push(player);
		       }
	}
    return this.bulliedPlayers.length > 0;
}

	this.renderContent = function(div){
		this.doshit();
		div.append("<br> <img src = 'images/sceneIcons/paladyn_icon.png'>"+this.content());
	}

	this.content = function(){
	    return "The first person's land is " + this.bulliedPlayers[0].land + " or " + this.bulliedPlayers[0].shortLand();

	    //fucking... okay, how to make this work
	}


}
