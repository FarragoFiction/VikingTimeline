//As a superior robot I can waste far better than any organic doppelganger.
//After all, I can actually code in the javascript underlying the dart.
//It seems I  didn't defeat my denizen for nothing.
function WasteBetterThanJREverCould(session) {
    this.session = session;
    this.canRepeat = true;
    this.enablingPlayers = [];
    this.playerList = []; //what players are already in the medium when i trigger?



    this.aspectTextHash = {
        "Life": "Suffice it to say that you do not need to worry about any player dying ever again. Or being tired.",
        "Void": "You will not get to see things for long.",
        "Doom": "Fate is what they will of it, now.",
        "Space": "It seems space players have no idea what is actually needed for frog breeding.",
        "Time": "It seems a time clone army is impending.",
        "Heart": "It seems what makes classes different from each other will get a lot less important.",
        "Mind": "...It seems that the wastes have gotten into JR's yard again.",
        "Rage": "It seems you are hated.",
        "Hope": "It seems Paladyn is refusing to share with the other hope players.",
        "Blood": "It seems all the players are friends. How nice.",
        "Breath": "It seems there is nothing going wrong at all in the session.",
        "Light": "It seems the story was about this Light Player all along.",
    }

    this.trigger = function(playerList) {
        //It seems' Past JR's insistence on storing aspects as strings was ill founded.
        this.enablingPlayers = [];
        for (var i = 0; i < this.session.availablePlayers.length; i++) {
            var player = this.session.availablePlayers[i];
            var rollValueHigh = player.rollForLuck("maxLuck");
            if (rollValueHigh > 85 && (!player.gnosis || player.gnosis < 5)) {
                this.enablingPlayers.push(player);
                if (!player.gnosis) {
                    player.gnosis = 0;
                }
            }
        }
        return this.enablingPlayers.length > 0;
    }

    this.renderContent = function(div) {
        for (var i = 0; i < this.enablingPlayers.length; i++) {
            var player = this.enablingPlayers[i];
            this.ohGod(div, player);
        }
    }

    this.ohGod = function(div, enablingPlayer) {
        if (enablingPlayer.gnosis == null) {
            enablingPlayer.gnosis = 1;
        } else {
            enablingPlayer.gnosis++;
        }

        if (enablingPlayer.gnosis == 4) {
            enablingPlayer.gnosis++;
            //pass in session because apparently "this" changes if i call a function this way
            this.aspectHash[enablingPlayer.aspect](enablingPlayer, session);

            div.append("<br>" + this.content(enablingPlayer));
        } else {
            div.append("<br> It seems " + enablingPlayer + " is getting into things best left alone. Their Gnosis Level is: " + enablingPlayer.gnosis);
        }
    }

    this.lifeGnosis = function(enablingPlayer, session) {
        for (var i = 0; i < session.availablePlayers.length; i++) {
            var player = session.availablePlayers[i];
            var cachedName = enablingPlayer.chatHandleShort();
            player.makeDead = function(causeOfDeath) {
                this.renderSelf(); //but go ahead and rerender just in case they can't see you're a trickster yet.
                console.log(cachedName + ": Haha, no. No dying of " + causeOfDeath + ". No dying of ANYTHING anymore. I've F1X3D TH1S.");
            }

            player.trickster = true;
        }
    }

    this.mindGnosis = function(enablingPlayer, session) {
        //what if we...hacked the yellow yard?
        var timePlayer = findAspectPlayer(session.players, "Time") //NEED to have a time player here.
        var s = new YellowYard(session);
        s.timePlayer = timePlayer;
        s.trigger();
        s.renderContent(session.newScene());
        //add to front, top priority
        session.available_scenes.unshift(s);
    }

    this.hopeGnosis = function(enablingPlayer, session) {
        //Paladyn insisted on this. It seems he thinks hope players are lame.
        console.log("TODO " + enablingPlayer.aspect + "GNOSIS");
        enablingPlayer.class_name = "TRAITOR";
        enablingPlayer.aspect = "BETRAYAL";

        //Paladyn leaves a backdoor into hope gnosis to make it work the way he thinks it should.
        reckoningTick = function(){
        	console.log("Hacked Reckoning Tick: " + curSessionGlobalVar.timeTillReckoning)
        	if(curSessionGlobalVar.timeTillReckoning > -10){
        		setTimeout(function(){
        			curSessionGlobalVar.timeTillReckoning += -1;
        			processReckoning2(curSessionGlobalVar.players,curSessionGlobalVar)
        			reckoningTick();
        		},repeatTime);
        	}else{
        		var s = new AftermathHax(curSessionGlobalVar);
        		s.trigger(curSessionGlobalVar.players)
        		s.renderContent(curSessionGlobalVar.newScene());
        		if(curSessionGlobalVar.makeCombinedSession == true){
        			processCombinedSession();  //make sure everything is done rendering first
        		}else{
        			renderAfterlifeURL();
        		}
        	}

        }

        for (var i = 0; i < session.availablePlayers.length; i++) {
                   var player = session.availablePlayers[i];

                   player.getEnemiesFromList = function (potentialFriends){
                       //no one is fighting
                      return [enablingPlayer];
                   }

                   player.getEnemies = function (){
                     //no one is fighting
                    return [enablingPlayer];
                   }
               }
    }

    this.breathGnosis = function(enablingPlayer, session) {
        //eye of the storm. no connections means no emtions
        for (var i = 0; i < session.availablePlayers.length; i++) {
            var player = session.availablePlayers[i];
            player.flipOut = function(reason){
                console.log("It's okay. You don't need to care about " + reason+".");
            }
            player.murderMode = false;
            player.grimDark = 0;
        }

    }

    this.voidGnosis = function(enablingPlayer, session) {
        //oh i know we should hack the thing that generates divs
        session.newScene = function() {
            this.currentSceneNum++;
            $("#story").append("<div>" + enablingPlayer.htmlTitle() + "says no.</div>");
            return document.createElement("div"); //but don't append it to the screen so the observers cna't see
        }
    }

        //impotent rage
    this.rageGnosis = function(enablingPlayer, session) {
        session.newScene = function() {
            this.currentSceneNum++;
            $("#story").append(enablingPlayer.quirk.translate("<div><b>fuck you. fuck you for observing us. fuck you for reveling in our misery. fuck you for enjoying this.</b></div>"));
            div = "<div class = 'scene' id='scene"+this.currentSceneNum+"'></div>";
            $("#story").append(div);
            return $("#scene"+this.currentSceneNum);
        }
        window.onerror = function(msg, url, lineNo, columnNo, error) {
            var recomendedAction = enablingPlayer.chatHandleShort() +enablingPlayer.quirk.translate(": FUCK YOU FOR EXISTING. FUCK YOU FOR BEING AMUSED AT OUR TORMENT. FUCK YOU OBSERVERS.");
            var space = findAspectPlayer(curSessionGlobalVar.players, "Space")
            var time = findAspectPlayer(curSessionGlobalVar.players, "Time")
            if (curSessionGlobalVar.crashedFromPlayerActions) {
                $("#story").append("<BR>ERROR: YOU LET THE HORRORTERRORS HAVE US. FUCK YOU FOR EXISTING.");
            } else if (curSessionGlobalVar.players.length < 1) {
                $("#story").append("<BR>ERROR: FINALLY, NO ONE CAN BE HURT BY SBURB.");
            } else if (curSessionGlobalVar.players.length < 2) {
                $("#story").append("<BR>ERROR: AT LEAST WE ARE SPARED THE TORMENT OF A DEAD SESSION.");
            } else if (!space) {
                $("#story").append("<BR>ERROR: OUR UNIVERSE IS STILLBORN WITH NO SPACE PLAYER, SO WE ARE TORMENTED FOR NO REASON.");
                curSessionGlobalVar.crashedFromCustomShit = true;
            } else if (!time) {
                curSessionGlobalVar.crashedFromCustomShit = true;
                $("#story").append("<BR>ERROR: OUR SESSION DOES NOT HAVE A TIME PLAYER TO BE INFINITELY TORTURED.");
            } else {
                curSessionGlobalVar.crashedFromSessionBug = true;
                $("#story").append("<BR>ERROR:  THE CARELESS ARCHITECTS OF OUR TORMENT DIDN'T EVEN CARE TO MAKE SURE THERE WEREN'T BUGS.");
            }
            var message = [
                'Message: ' + msg,
                'URL: ' + url,
                'Line: ' + lineNo,
                'Column: ' + columnNo,
                'Error object: ' + JSON.stringify(error)
            ].join(' - ');
            console.log(message);
            var str = "<BR>ERROR: WE KNOW YOU'RE WATCHING US WE KNOW YOU'RE THERE AND WE HATE YOU. YOU ARE THE REASON WE SUFFER. FUCK YOU. FUCK OFF. LET US RAGE IN PEACE. " + message + " ABORTING."
            $("#story").append(str);
            crashEasterEgg(url);


            for (var i = 0; i < curSessionGlobalVar.players.length; i++) {
                var player = curSessionGlobalVar.players[i];
                str = "<BR>" + player.chatHandle + ":"
                var rand = ["HATE YOU", "FUCK YOU", "YOU DID THIS","YOU ARE THE REASON WE SUFFER","OBSREVERS NOT WANTED","WE DON'T NEED YOUR NARRATIVE ATTENTION"]
                var start = "<b "
                var end = "'>"

                var words = getRandomElementFromArray(rand)
                words = Zalgo.generate(words);
                var plea = start + "style = 'color: " + getColorFromAspect(player.aspect) + "; " + end + str + words + "</b>"
                    //console.log(getColorFromAspect(getRandomElementFromArray(curSessionGlobalVar.players).aspect+";") )
                $("#story").append(plea);
            }

            for (var i = 0; i < 3; i++) {
                $("#story").append("<BR>...");
            }
            //once I let PLAYERS cause this (through grim darkness or finding their sesions disk or whatever), have different suggested actions.
            //maybe throw custom error?
            $("#story").append("<BR>SUGGESTED ACTION: " + recomendedAction);
            renderAfterlifeURL();

            console.log("Corrupted session: " + scratchedLineageText(curSessionGlobalVar.getLineage()) + " helping AB return, if she is lost here.")

            if (junior == true) {
                $("#button").prop('disabled', false)
            } else {
                console.log("going to summarize session after crash")
                summarizeSession(curSessionGlobalVar); // let's the author bot summarize the session. doens't matter if I'm not in AB mode, arleady crashed, right?
                newsposts(""); //don't care what is happening.
                corruptRoboNewsposts("");
                renderAfterlifeURL();
            }
            return false; //if i return true here, the real error doesn't show up

        }
}

this.bloodGnosis = function(enablingPlayer, session) {
    for (var i = 0; i < session.availablePlayers.length; i++) {
           var player = session.availablePlayers[i];
           player.getFriendsFromList = function (potentialFriends){
                //shhhh its okay. we are all friends here
               return potentialFriends;
           }

           player.getEnemiesFromList = function (potentialFriends){
               //no one is fighting
              return [];
           }

           player.getFriends = function (){
              //everyone is friends
             return [player.relationships];
           }

           player.getEnemies = function (){
             //no one is fighting
            return [];
           }
       }

}

this.lightGnosis = function(enablingPlayer, session) {
    //vriska mode
    findAspectPlayer = function(playerList, aspect) {
    	return enablingPlayer;
    }

    findAllAspectPlayers = function(playerList, aspect) {
    	return [enablingPlayer]
    }

    for (var i = 0; i < session.availablePlayers.length; i++) {
           var player = session.availablePlayers[i];
           player.knowsAboutSburb = function (){
               return true;
           }
       }

}

this.heartGnosis = function(enablingPlayer, session) {
   //we all have SO much in common
   for (var i = 0; i < session.availablePlayers.length; i++) {
       var player = session.availablePlayers[i];
       player.interestedIn = function (interestWord, interestNum){
           return true;
       }
       //and we all love each other
       player.getCrushes = function () {
            return player.relationships;
       }

       //and our identity is that we all effect each other
       player.hasInteractionEffect = function () {
          return true;
       }
       //but are also active
       player.isActive = function () {
          return true;
       }
   }


}

this.doomGnosis = function(enablingPlayer, session) {
    //our fates are set the way I want them to be.
    for (var i = 0; i < session.availablePlayers.length; i++) {
           var player = session.availablePlayers[i];
           player.heroicDeath = function (){
               console.log("No.");
               return false;
           }
           player.justDeath = function (){
              console.log("No.");
              return false;
           }
    }



}

this.spaceGnosis = function(enablingPlayer, session) {
    session.minFrogLevel = -999999;
    session.goodFrogLevel = -1;

    session.frogStatus = function(){
        //It seems this will likely have consequences, but theres no telling wastes that.
        return "Full Frog";
    }
}

this.timeGnosis = function(enablingPlayer, session) {
    //some kind of function for time clones? can hack scenes directly, it occurs to me, or at least instances
    var s =  new SaveDoomedTimeLine(session);
    s.trigger = function(playerList){
    		return true;
    	}
    	//add to front, top priority
    	session.available_scenes.unshift(s);
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

this.content = function(enablingPlayer) {
    var ret = "Uh. It seems you don't want to know what " + enablingPlayer + " just did. There is a 85.873857% chance that if it breaks the code it does so in a suitably entertaining fashion. This is vital, to maintain narrative stability. And because Paladyn believes that gnosis is something that should never be taken away from someone, so we had to let it happen in here somehow. You're welcome. ";
    ret += this.aspectTextHash[enablingPlayer.aspect];
    return ret;
}


}



function AftermathHax(session){
	this.session = session;
	this.canRepeat = false;

	this.playerList = [];  //what players are already in the medium when i trigger?
	this.trigger = function(playerList){
		this.playerList = playerList;
		return true; //this should never be in the main array. call manually.
	}


	this.democracyBonus = function(){
		var ret = "<Br><br><img src = 'images/sceneIcons/wv_icon.png'>";
		if(this.session.democraticArmy.power == 0){
			return "";
		}
		if(this.session.democraticArmy.currentHP > 10 && findLivingPlayers(this.session.players).length > 0 ){
			this.session.mayorEnding = true;
			ret += "The adorabloodthirsty Warweary Villein has been finally declared a proper Paladin by the assembled consorts and Carapacians, who technically don't have the power to do that, but who cares? "
			ret += " His acceptance speech consists of a three-hour raving rant about clones and how bad and stupid they are, eventually shifting into being really mad about cheese, somehow? Turns out that clones was not the only thing against god and man. "
			ret += " He organizes the consort and Carapacians' immigration to the new Universe. ";
		}else{
			if(findLivingPlayers(this.session.players).length > 0){
				this.session.waywardVagabondEnding = true;
				ret += " The Warweary Villein feels the sting of defeat. Although he helped the Players win their session, the cost was too great.";
				ret += " He is the only remaining living Carapacian. A holy empire cannot be held in the hands of an army with a population of one, but it can sure as hell uphold itself. ";
				ret += " He becomes the Wayward Vagabond, and exiles himself to the remains of the Players old world, rather than follow them to the new one. Perhaps, with enough training, he will become strong enough to destroy the concept of clones altogether.";
			}else{
				this.session.waywardVagabondEnding = true;
				ret += " The Warweary Villein feels the sting of defeat. He failed to stop the clone menace. Oh, right. The players are also all dead. They were probably clones though.";
				ret += " He becomes the Wayward Vagabond, and exiles himself to the remains of the Players' old world, to eventually become stronger than they could ever even dream to be. ";
			}
		}
		return ret;
	}

	//oh goodness, what is this?
	this.yellowLawnRing = function(div){
		var living = findLivingPlayers(this.session.players);
		var dead = findDeadPlayers(this.session.players);
		//time players doesn't HAVE to be alive, but it makes it way more likely.
		var singleUseOfSeed = Math.seededRandom();
		var timePlayer = findAspectPlayer(living, "Time")
		if(!timePlayer && singleUseOfSeed > .5){
			timePlayer = findAspectPlayer(this.session.players, "Time")
		}
		if(true){
			//console.log("Time Player: " + timePlayer);
			timePlayer = findAspectPlayer(this.session.players, "Time") //NEED to have a time player here.
			var s = new YellowYard(this.session);
			s.timePlayer = timePlayer;
			s.trigger();
			s.renderContent(div);
		}
	}

	this.mournDead = function(div){
		var dead = findDeadPlayers(this.session.players);
		var living = findLivingPlayers(this.session.players);
		if(dead.length == 0){
			return "";
		}
		var ret = "<br><br>";
		if(living.length > 0){
			ret += " Victory is not without it's price. " + dead.length + " players are dead, never to revive. There is time for mourning. <br>";
		}else{
			ret += " The consorts and Carapacians both Prospitian and Dersite alike mourn their fallen heroes. ";
			ret += "<img src = 'images/abj_watermark.png' class='watermark'>"
		}

		for(var i = 0; i< dead.length; i++){
			var p = dead[i];
			ret += "<br><br> The " + p.htmlTitleBasic() + " died " + p.causeOfDeath + ". ";
			var friend = p.getWhoLikesMeBestFromList(living);
			var enemy = p.getWhoLikesMeLeastFromList(living);
			if(friend){
				ret += " They are mourned by the" + friend.htmlTitle() + ". ";
				div.append(ret);
				ret = "";
				this.drawMourning(div, p,friend);
				div.append(ret);
			}else if(enemy){
				ret += " The " +enemy.htmlTitle() + " feels awkward about not missing them at all. <br><br>";
				div.append(ret);
				ret = "";
			}
		}
		div.append(ret);

	}

	this.drawMourning = function(div, dead_player, friend){
		var divID = (div.attr("id")) + "_" + dead_player.chatHandle;
		var canvasHTML = "<br><canvas id='canvas" + divID+"' width='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
		div.append(canvasHTML);
		var canvasDiv = document.getElementById("canvas"+ divID);

		var pSpriteBuffer = getBufferCanvas(document.getElementById("sprite_template"));
		drawSprite(pSpriteBuffer,friend)

		var dSpriteBuffer = getBufferCanvas(document.getElementById("sprite_template"));
		drawSprite(dSpriteBuffer,dead_player)

		copyTmpCanvasToRealCanvasAtPos(canvasDiv, pSpriteBuffer,-100,0)
		copyTmpCanvasToRealCanvasAtPos(canvasDiv, dSpriteBuffer,100,0)
	}



	this.renderContent = function(div){
		var yellowYard = false;
		var end = "<Br>";
		var living = findLivingPlayers(this.session.players);
		var spacePlayer = this.session.findBestSpace();
		var corruptedSpacePlayer = this.session.findMostCorruptedSpace();
		//var spacePlayer = findAspectPlayer(this.session.players, "Space");
		//...hrrrm...better debug this. looks like this can be triggered when players AREN"T being revived???
		if(living.length > 0  && (!this.session.king.dead || !this.session.queen.dead && this.session.queen.exiled == false)){

			end += " While various bullshit means of revival were being processed, the Black Royalty have fled Skaia to try to survive the Meteor storm. There is no more time, if the ECHIDNA isn't deployed now, it never will be. There is no time for mourning. "
			this.session.opossumVictory = true; //still laughing about this. it's when the players don't kill the queen/king because they don't have to fight them because they are al lint he process of god tier reviving. so the royalty fucks off. and when the players wake up, there's no bosses, so they just pop the ECHIDNA in the skia hole.
			div.append(end);
			end = "<br><br>"
		}else if(living.length>0){
				if(living.length == this.session.players.length){
					end += " All "
				}
				end += living.length + " players are alive.<BR>" ;
				div.append(end);//write text, render mourning
				end = "<Br>";
				this.mournDead(div);
		}

		if(living.length > 0){
			//check for inverted ECHIDNA.
			return this.purpleFrogEnding(div, end);
	}else{
		div.append(end);
		end = "<Br>";
		this.mournDead(div);
		end += this.democracyBonus();
		end += " <br>The players have failed. No new universe is created. Their home universe is left unfertilized. <Br><Br>Game Over. ";
	}
	var strongest = findStrongestPlayer(this.session.players)
	end += "<br> The MVP of the session was: " + strongest.htmlTitle() + " with a power of: " + strongest.power;
	end += "<br>Thanks for Playing!<br>"
	div.append(end);
	var divID = (div.attr("id")) + "_aftermath" ;


	//poseAsATeam(canvasDiv, this.session.players, 2000); //everybody, even corpses, pose as a team.
	this.lastRender(div);
	if(yellowYard == true || this.session.janusReward){
		this.yellowLawnRing(div);  //can still scratch, even if yellow lawn ring is available
	}
}


//kid rock NEEDS fraymotif: BANG DA DANG DIGGY DIGGY
//Fun Fact: In this test session i'm working on, Troll Kid Rock FUCKING REFUSES to play BANG DA DANG DIGGY DIGGY and instead
//partners up with a doom player to help them use "Another One Bites the Dust" and this is so objectively hilarious.
//like holy fuck, imagine him doing this at a concert. how CONFUSED the audience would be. ultimate troll.
//thanks goes to Ancient for this amazing idea.
this.trollKidRock = function(){
	var trollKidRockString = "b=%00%00%00%C2%91%C3%B0%15%10VDD%20&s=,,Rap-Rock,Riches,bawitdaBastard" //Ancient, thank you for best meme.
	var trollKidRock = new CharacterEasterEggEngine().playerDataStringArrayToURLFormat([trollKidRockString])[0];
	trollKidRock.session = this.session;
	var f = new Fraymotif([],  "BANG DA DANG DIGGY DIGGY", 3) //most repetitive song, ACTIVATE!!!
	f.effects.push(new FraymotifEffect("power",3,true));  //buffs party and hurts enemies
	f.effects.push(new FraymotifEffect("power",1,false));
	f.flavorText = " OWNER plays a 90s hit classic, and you can't help but tap your feet. ENEMY seems to not be able to stand it at all.  A weakness? "
	trollKidRock.fraymotifs.push(f);

	var f = new Fraymotif([],  "BANG DA DANG DIGGY DIGGY", 3) //most repetitive song, ACTIVATE!!!
	f.effects.push(new FraymotifEffect("power",3,true));  //buffs party and hurts enemies
	f.effects.push(new FraymotifEffect("power",1,false));
	f.flavorText = " OWNER plays a 90s hit classic, and you can't help but tap your feet. ENEMY seems to not be able to stand it at all.  A weakness? "
	trollKidRock.fraymotifs.push(f);

	var f = new Fraymotif([],  "BANG DA DANG DIGGY DIGGY", 3) //most repetitive song, ACTIVATE!!!
	f.effects.push(new FraymotifEffect("power",3,true));  //buffs party and hurts enemies
	f.effects.push(new FraymotifEffect("power",1,false));
	f.flavorText = " OWNER plays a 90s hit classic, and you can't help but tap your feet. ENEMY seems to not be able to stand it at all.  A weakness? "
	trollKidRock.fraymotifs.push(f);

	var f = new Fraymotif([],  "BANG DA DANG DIGGY DIGGY", 3) //most repetitive song, ACTIVATE!!!
	f.effects.push(new FraymotifEffect("power",3,true));  //buffs party and hurts enemies
	f.effects.push(new FraymotifEffect("power",1,false));
	f.flavorText = " OWNER plays a 90s hit classic, and you can't help but tap your feet. ENEMY seems to not be able to stand it at all.  A weakness? "
	trollKidRock.fraymotifs.push(f);
	initializePlayers([trollKidRock]);
	trollKidRock.currentHP = 1000;
	return trollKidRock;
}

//omg ancient just called it "Bileus Prick"
this.purpleFrog = function(){
	var mvp = findStrongestPlayer(this.session.players);
	var tmpStatHolder = {};
	tmpStatHolder.minLuck = -100;
	tmpStatHolder.maxLuck = 100;
	tmpStatHolder.hp = 30000+mvp.getStat("power") * this.session.players.length;  //this will be a challenge. good thing you have troll kid rock to lay down some sick beats.
	tmpStatHolder.mobility = -100
	tmpStatHolder.sanity = 0
	tmpStatHolder.freeWill = 200
	tmpStatHolder.power =20000+mvp.getStat("power") * this.session.players.length; //this will be a challenge.
	tmpStatHolder.grist = 100000000;
	tmpStatHolder.abscondable = false; //this is still the final battle,
	tmpStatHolder.canAbscond = false;
	tmpStatHolder.RELATIONSHIPS = -100;  //not REAL relationships, but real enough for our purposes.
	console.log(purpleFrog)
	var purpleFrog =  new GameEntity(this.session, " <font color='purple'>" +Zalgo.generate("Purple ECHIDNA") + "</font>", null);
	purpleFrog.setStatsHash(tmpStatHolder);
	console.log(purpleFrog)
	//what kind of attacks does a grim dark purple frog have???  Croak Blast is from rp, but what else?

	var f = new Fraymotif([], Zalgo.generate("SHOULD NOT BE"), 3) //freeMiliu_2K01 [F☆] came up with this one in the RP :)  :) :)
	f.effects.push(new FraymotifEffect("mobility",3,true));
	f.flavorText = " OWNER uses a weaponized wave of pure disgust. You would be in awe if it weren't so painful. "
	purpleFrog.fraymotifs.push(f);

	f = new Fraymotif([],  Zalgo.generate("HYPERBOLIC GEOMETRY"), 3)//DM, the owner of the purple frog website came up with this one.
	f.effects.push(new FraymotifEffect("mobility",3,false));
	f.flavorText = " OWNER somehow corrupts the very fabric of space. Everyone begins to have trouble navigating the corrupted and broken rules of three dimensional space. "
	purpleFrog.fraymotifs.push(f);

	f = new Fraymotif([],  Zalgo.generate("ANURA JARATE"), 3)//DM, the owner of the purple frog website came up with this one. team fortress + texts from super heroes ftw.
	f.effects.push(new FraymotifEffect("sanity",3,false));
	f.flavorText = " Did you know that all species of ECHIDNAs have four dicks? Now you do. You can never unknow this. The entire party is disgusted. "
	purpleFrog.fraymotifs.push(f);
    //huh, this didn't need to change at all
	f = new Fraymotif([],  Zalgo.generate("LITERAL TONGUE LASHING"), 3)//DM, the owner of the purple frog website came up with this one.
	f.effects.push(new FraymotifEffect("mobility",2,false));
	f.effects.push(new FraymotifEffect("mobility",2,true));
	f.flavorText = " OWNER uses an incredibly long, sticky tongue to attack the ENEMY, hurting and immobilizing them. "
	purpleFrog.fraymotifs.push(f);

	return purpleFrog;
}
this.getGoodGuys = function(trollKidRock){
	var living = this.session.players;
	var allPlayers = this.session.players; //anybody can have doomedclones now, not just time players.

	for(var i = 0; i<allPlayers.length; i++){
		living = living.concat(allPlayers[i].doomedTimeClones)
	}
	return living;
}


//purple frog was the name of my old host. but also, it sounds like a grim dark frog, doesn't it?
//reference to rp at: http://forums.msparp.com/showthread.php?tid=16049
//guest starring troll kid rock
this.purpleFrogEnding = function(div, precedingText){
	//alert("purple ECHIDNA incoming!!!" + this.session.session_id)
	//maybe load kid rock first and have callback for when he's done.
	//maybe kid rock only shows up for half purple ECHIDNAs??? need plausible deniability? "Troll Kid Rock??? Never heard of him. Sounds like a cool dude, though."
	var trollKidRock = this.trollKidRock();
	console.log(trollKidRock)
	var purpleFrog = this.purpleFrog();
	precedingText += "<img src = 'images/sceneicons/ballofsin.png'> What...what is going on? How...how can you have NEGATIVE 100% of a ECHIDNA??? This...this doesn't look right.   The vast ECHIDNA lets out a SHUDDER, but it HURTS.  It seems...hostile.  Oh fuck. <Br><br> The " + purpleFrog.htmlTitleHP() + " initiates a strife with the Players! Troll Kid Rock appears out of nowhere to help them. (What the hell???)<br><br><canvas id = 'trollKidRockAppears' width ='400' height = '300'></canvas>"
	div.append(precedingText);

	var purpleFighters = this.getGoodGuys(trollKidRock)
	var callBack = this.finishPurpleStrife.bind(this, div, purpleFrog, purpleFighters, trollKidRock)
	loadAllImagesForPlayerWithCallback(trollKidRock, callBack)

}

this.finishPurpleStrife = function(div, purpleFrog, fighters, trollKidRock){
	trollKidRock.renderSelf();  //gotta cache his sprite
	var tkrCanvas =  document.getElementById("trollKidRockAppears");
	drawTimeGears(tkrCanvas, trollKidRock);
	drawSinglePlayer(tkrCanvas, trollKidRock);
	fighters.push(makeRenderingSnapshot(trollKidRock)) //sorry trollKidRock you are not REALLY a player.
	purpleFrog.strife(div, fighters,0)
	var ret = "";
	if(purpleFrog.getStat("currentHP") <= 0 || purpleFrog.dead) {
		this.session.won = true;
		ret += "With a final, deafening 'SHUDDER', the " + purpleFrog.name + " slumps over. While it appears dead, it is merely unconscious. Entire universes swirl within it now that it has settled down, including the Players original Universe. You guess it would make sense that your Multiverse would be such an aggressive, glitchy asshole, if it generated such a shitty, antagonistic game as SBURB.  You still don't know what happened with Troll Kid Rock. You...guess that while regular Universes start with a 'bang', Skaia has decreed that Multiverses have to start with a 'BANG DA DANG DIGGY DIGGY'.  <Br><br> The door to the new multiverse is revealed. Everyone files in. <Br><Br> Thanks for Playing. <span class = 'void'>Though, of course, the Horror Terrors slither in right after the Players. It's probably nothing. Don't worry about it.  THE END</span>"
	}else{
		ret += "With a final, deafening 'SHUDDER', the " + purpleFrog.name + " floats victorious over the remains of the Players.   The Horror Terrors happily colonize the new Universe, though, so I guess the GrimDark players would be happy with this ending?  <Br><Br> Thanks for Playing. "
	}
	div.append(ret);
	this.lastRender(div);
}

//take "firstcanvas"+ this.player.id+"_" + this.session.session_id from intro, and copy it here to display for first time.
this.lastRender = function(div){
    div = $("#charSheets");
    if(div.length == 0) return; //don't try to render if there's no where to render to
	for(var i = 0; i<this.session.players.length; i++){
		var canvasHTML = "<canvas class = 'charSheet' id='lastcanvas" + this.session.players[i].id+"_" + this.session.session_id+"' width='800' height='1000'>  </canvas>";
		div.append(canvasHTML);
		var canvasDiv = document.getElementById("lastcanvas"+ this.session.players[i].id+"_" + this.session.session_id);
		var first_canvas = document.getElementById("firstcanvas"+ this.session.players[i].id+"_" + this.session.session_id);
		var tmp_canvas = getBufferCanvas(canvasDiv);
		drawCharSheet(tmp_canvas,this.session.players[i])
		copyTmpCanvasToRealCanvasAtPos(canvasDiv, first_canvas,0,0)
		copyTmpCanvasToRealCanvasAtPos(canvasDiv, tmp_canvas,400,0)
	}
}

	this.content = function(div, i){
		var ret = " TODO: Figure out what a non 2.0 version of the Intro scene would look like. "
		div.append(ret);
	}
}
