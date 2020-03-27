//As a superior robot I can waste far better than any organic doppelganger.
//After all, I can actually code in the javascript underlying the dart.
//It seems I  didn't defeat my denizen for nothing.
function WasteBetterThanJREverCould(session){
	this.session=session;
	this.canRepeat = true;
    this.enablingPlayers = [];
	this.playerList = [];  //what players are already in the medium when i trigger?



	this.aspectTextHash = {
    	    "Life": "Suffice it to say that you do not need to worry about any player dying ever again. Or being tired.",
    	    "Void": "voidGnosis",
    	    "Doom": "doomGnosis",
    	    "Space": "spaceGnosis",
    	    "Time": "timeGnosis",
    	    "Heart": "heartGnosis",
    	    "Mind": "mindGnosis",
    	    "Rage": "rageGnosis",
    	    "Hope": "hopeGnosis",
    	    "Blood": "bloodGnosis",
    	    "Breath": "breathGnosis",
    	    "Light": "lightGnosis",
    	}

	this.trigger = function(playerList){
	    //It seems' Past JR's insistence on storing aspects as strings was ill founded.
		this.enablingPlayers = [];
        for(var i = 0; i<this.session.availablePlayers.length; i++){
            var player = this.session.availablePlayers[i];
            var rollValueHigh = player.rollForLuck("maxLuck");
            if(rollValueHigh > -98897987 && (!player.gnosis || player.gnosis <5)){
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
        console.log("function is " + this.aspectHash[enablingPlayer.aspect]);
        //pass in session because apparently "this" changes if i call a function this way
        this.aspectHash[enablingPlayer.aspect](enablingPlayer,session);

        div.append("<br>"+this.content(enablingPlayer));
      }else{
            div.append("<br> It seems " + enablingPlayer + " is getting into things best left alone. Their Gnosis Level is: " +enablingPlayer.gnosis);
      }
	}

	this.lifeGnosis = function(enablingPlayer,session){
	    for(var i = 0; i< session.availablePlayers.length; i++){
	        var player = session.availablePlayers[i];
	        var cachedName = enablingPlayer.chatHandleShort();
	        player.makeDead = function (causeOfDeath){
	        		this.renderSelf();//but go ahead and rerender just in case they can't see you're a trickster yet.
	            console.log(cachedName + ": Haha, no. No dying of "+ causeOfDeath +". No dying of ANYTHING anymore. I've F1X3D TH1S.");
	        }

	        player.trickster = true;
	    }
	}

	this.mindGnosis = function(enablingPlayer,session){
    	    //what if we...hacked the yellow yard?
        console.log("TODO " + enablingPlayer.aspect + "GNOSIS");
    }

    this.hopeGnosis = function(enablingPlayer,session){
     //paladyn gets dibs here
             console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

    }

    this.breathGnosis = function(enablingPlayer,session){
         //maybe hack escaping battle?
                 console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

    }

    this.voidGnosis = function(enablingPlayer,session){
       //oh i know we should hack the thing that generates divs
       session.newScene = function (){
       this.currentSceneNum ++;
       $("#story").append("<div>" + enablingPlayer.htmlTitle() + "says no.</div>");
       return document.createElement("div"); //but don't append it to the screen so the observers cna't see
       }
    }

    this.rageGnosis = function(enablingPlayer,session){
        //crash the game on purpose? rage quit?
                console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

    }

    this.bloodGnosis = function(enablingPlayer,session){
      //hack findfriends or whatever to just return everyone?
              console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

    }

    this.lightGnosis = function(enablingPlayer,session){
     //hack find player by aspect etc
             console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

    }

    this.heartGnosis = function(enablingPlayer,session){
            console.log("TODO " + enablingPlayer.aspect + "GNOSIS");


    }

    this.doomGnosis = function(enablingPlayer,session){
            console.log("TODO " + enablingPlayer.aspect + "GNOSIS");


    }

    this.spaceGnosis = function(enablingPlayer,session){
     //is there a function to determine frog or something?
             console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

    }

    this.timeGnosis = function(enablingPlayer,session){
      //some kind of function for time clones? can hack scenes directly, it occurs to me, or at least instances
              console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

    }

    this.aspectHash = {
        "Life": this.lifeGnosis,
        "Void": this.voidGnosis,
        "Doom": this.doomGnosis,
        "Space": this.spaceGnosis,
        "Time": this.timeGnosis,
        "Heart": this.heartGnosis,
        "Mind": this.mindGnosis,
        "Rage": this.rageGnosis,
        "Hope": this.hopeGnosis,
        "Blood": this.bloodGnosis,
        "Breath": this.breathGnosis,
        "Light": this.lightGnosis,
    }

	this.content = function(enablingPlayer){
		var ret = "Uh. It seems you don't want to know what " + enablingPlayer + " just did. There is a 85.873857% chance that if it breaks the code it does so in a suitably entertaining fashion. This is vital, to maintain narrative stability. And because Paladyn believes that gnosis is something that should never be taken away from someone, so we had to let it happen in here somehow. You're welcome. ";
		ret+= this.aspectTextHash[enablingPlayer.aspect];
		return ret;
	}


}
