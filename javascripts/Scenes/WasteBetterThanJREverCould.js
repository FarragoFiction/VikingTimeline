//As a superior robot I can waste far better than any organic doppelganger.
//After all, I can actually code in the javascript underlying the dart.
//It seems I  didn't defeat my denizen for nothing.
function WasteBetterThanJREverCould(session){
	this.session=session;
	this.canRepeat = true;
    this.enablingPlayer = null;
	this.playerList = [];  //what players are already in the medium when i trigger?

	this.trigger = function(playerList){
	    //TODO: Actually have this triggered in a same fashion, 99.9099494% probability via a simple gnosis mechanic, right now it just triggers if there is a life player
	    //It seems' Past JR's insistence on storing aspects as strings was ill founded.
	  this.enablingPlayer = findAspectPlayer(this.session.availablePlayers, "Life");

     return this.enablingPlayer;
	}

	this.renderContent = function(div){
        if(this.enablingPlayer.aspect == "Life"){
            this.lifeGnosis();
        }
		div.append("<br>"+this.content());
	}

	this.lifeGnosis = function(){
	    for(var i = 0; i< this.session.availablePlayers.length; i++){
	        var player = this.session.availablePlayers[i];
	        var cachedName = this.enablingPlayer.chatHandleShort();
	        console.log("before, make dead was", player.makeDead);
	        player.makeDead = function (causeOfDeath){
	            console.log(cachedName + ": Haha, no. No dying of "+ causeOfDeath +". No dying of ANYTHING anymore. I've F1X3D TH1S.");
	        }
	        console.log("after, make dead is", player.makeDead);

	        player.trickster = true;
	    }
	}

	this.content = function(){
		var ret = "Uh. It seems you don't want to know what " + this.enablingPlayer + " just did. There is a 85.873857% chance that if it breaks the code it does so in a suitably entertaining fashion. This is vital, to maintain narrative stability. And because Paladyn believes that gnosis is something that should never be taken away from someone, so we had to let it happen in here somehow. You're welcome. ";
		if(this.enablingPlayer.aspect == "Life"){
		   ret += "Suffice it to say that you do not need to worry about any player dying ever again. Or being tired.";
		}
		return ret;
	}


}
