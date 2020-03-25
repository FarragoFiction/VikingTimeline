function LateWithStarBux(session){
	this.session=session;
	this.canRepeat = true; //THE MAN IS ALWAYS LATE. ALWAYS.
	this.playerList = [];  //what players are already in the medium when i trigger?
	this.bulliedPlayer;
	this.bitchinLands = ["Oars", "Vikings", "Gods", "Cockroaches", "Paladins", "Sheep", "Feasts", "Boats", "Vessels", "Sigils","Powers","Rangers","Minerals","Refrances","Raiders","Empires","Conflicts","Berserkers","Slaughters","Heathens","Heretics","Tidings","Longships","Raids","Skalds","Elders","Voyagers","Mist","Wrestling","Giants","Elves","Dwarves","Norns","Axes","Tomahawks","Bows","Fleets","Ice","Icebergs","Snow","Pines"];
	this.bitchinSprites = ["Viking","Prophet","Sheep","Moth","Son"]

//theoretically i can make a list of things to choose, and from then make it work?
    this.doshit = function(){
        this.bulliedPlayer.flipOutReason = "a weird paladin bullying them"
        if(Math.seededRandom() > 0.3){
          this.bulliedPlayer.land = "Realm of " + getRandomElementFromArray(this.bitchinLands) + " and " + getRandomElementFromArray(this.bitchinLands); //pick from this list pls
          return "A MIGHTY PALADYN has been watching by the sidelines, and he's decided he doesn't like " + this.bulliedPlayer.htmlTitle() + "'s groove. With a flick of his brush, their land is now "+ this.bulliedPlayer.land + ", or " + this.bulliedPlayer.shortLand() + " for short. This is definitely an improvement.";
        }else if(Math.seededRandom() > 0.3){
          this.bulliedPlayer.chatHandle = getRandomElementFromArray(this.bitchinLands).toLowerCase() + getRandomElementFromArray(this.bitchinLands); //pick from this list pls x2
         return "A GREAT PALADYN has decided that " + this.bulliedPlayer.htmlTitle() + "'s chathandle is STUPID and also DUMB. With a flick of his brush, they now go by " + this.bulliedPlayer.chatHandleShort() + " instead.";
        }
        else{
          this.bulliedPlayer.sprite.name = getRandomElementFromArray(this.bitchinSprites) + "sprite"; //hook it up to an actual spritelist later you godless animal
          return "A FANTASTIC PALADYN swoops in, deciding that " + this.bulliedPlayer.htmlTitle() + "'s sprite is not nearly cool enough. With a flick of his brush, the previous sprite explodes, and a poorly drawn " +this.bulliedPlayer.sprite + " descends from the sky."
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
        var player2 = getLeader(findLivingPlayers(	this.session.players));
        if (player2 != this.bulliedPlayer){
		var repeatTime = 1000;
		var divID = (div.attr("id")) + "_" + this.bulliedPlayer.chatHandle;
        		var canvasHTML = "<br><canvas id='canvas" + divID+"' width='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
        		div.append(canvasHTML);
        		//different format for canvas code
        		var canvasDiv = document.getElementById("canvas"+ divID);
        				chatText = this.normalConvo(div, this.bulliedPlayer, player2);
		drawChat(canvasDiv, this.bulliedPlayer, player2, chatText, repeatTime,"discuss_jack.png");
		}
	}

	this.normalConvo = function(div, player1, player2){
    		var player1Start = player1.chatHandleShort()+ ": "
    		var player2Start = player2.chatHandleShortCheckDup(player1.chatHandleShort())+ ": "; //don't be lazy and usePlayer1Start as input, there's a colon.
    		var r1 = player1.getRelationshipWith(player2);
    		var r2 = player2.getRelationshipWith(player1);
    		var chatText = "";

    		chatText += chatLine(player1Start, player1,getRelationshipFlavorGreeting(r1, r2, player1, player2))
    		chatText += chatLine(player2Start, player2,getRelationshipFlavorGreeting(r2, r1, player2, player1))
    		chatText += chatLine(player1Start, player1,"So, new plan. Jack is WAY too stabby, we need to exile him.")

    		return chatText;
    	}

	this.content = function(){

	    return this.doshit();

	    //fucking... okay, how to make this work
	}


}
