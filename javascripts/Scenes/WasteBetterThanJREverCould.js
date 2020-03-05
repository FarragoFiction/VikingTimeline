//As a superior robot I can waste far better than any organic doppelganger.
//After all, I can actually code in the javascript underlying the dart.
//It seems I  didn't defeat my denizen for nothing.
function WasteBetterThanJREverCould(session){
	this.session=session;
	this.canRepeat = true;
    this.enablingPlayers = [];
	this.playerList = [];  //what players are already in the medium when i trigger?

	this.trigger = function(playerList){
	    //It seems' Past JR's insistence on storing aspects as strings was ill founded.
		this.enablingPlayers = [];
        for(var i = 0; i<this.session.availablePlayers.length; i++){
            var player = this.session.availablePlayers[i];
            var rollValueHigh = player.rollForLuck("maxLuck");
            if(rollValueHigh > 33 && (!player.gnosis || player.gnosis <5)){
                this.enablingPlayers.push(player);
                if(!player.gnosis){
                    player.gnosis = 0;
                }
            }
        }
     return this.enablingPlayers.length > 0;
	}

	this.renderContent = function(div){
      for(var i = 0; i<this.enablingPlayers.length; i++){
          var player = this.enablingPlayers[i];
          this.ohGod(div, player);
      }
	}

	this.ohGod = function(div, enablingPlayer){
	    if(enablingPlayer.gnosis == null){
            enablingPlayer.gnosis = 1;
      }else{
        enablingPlayer.gnosis ++;
      }

      if(enablingPlayer.gnosis == 4){
        enablingPlayer.gnosis ++;

        if(enablingPlayer.aspect == "Life"){
            this.lifeGnosis(enablingPlayer);
        }

        div.append("<br>"+this.content(enablingPlayer));
      }else{
            div.append("<br> It seems " + enablingPlayer + " is getting into things best left alone. Their Gnosis Level is: " +enablingPlayer.gnosis);
      }
	}

	this.lifeGnosis = function(enablingPlayer){
	    for(var i = 0; i< this.session.availablePlayers.length; i++){
	        var player = this.session.availablePlayers[i];
	        var cachedName = enablingPlayer.chatHandleShort();
	        console.log("before, make dead was", player.makeDead);
	        player.makeDead = function (causeOfDeath){
	        		this.renderSelf();//but go ahead and rerender just in case they can't see you're a trickster yet.
	            console.log(cachedName + ": Haha, no. No dying of "+ causeOfDeath +". No dying of ANYTHING anymore. I've F1X3D TH1S.");
	        }
	        console.log("after, make dead is", player.makeDead);

	        player.trickster = true;
	    }
	}

	this.content = function(enablingPlayer){
		var ret = "Uh. It seems you don't want to know what " + enablingPlayer + " just did. There is a 85.873857% chance that if it breaks the code it does so in a suitably entertaining fashion. This is vital, to maintain narrative stability. And because Paladyn believes that gnosis is something that should never be taken away from someone, so we had to let it happen in here somehow. You're welcome. ";
		if(enablingPlayer.aspect == "Life"){
		   ret += "Suffice it to say that you do not need to worry about any player dying ever again. Or being tired.";
		}
		return ret;
	}


}
