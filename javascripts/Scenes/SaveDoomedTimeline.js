//if leader dies before last player is in OR before performing ectobiology, it's a doomed timeline.
function SaveDoomedTimeLine(session){
	this.session=session;
	this.playerList = [];  //what players are already in the medium when i trigger?
	this.timePlayer = null;
	this.leaderPlayer = null;
	this.reason = "";
	this.doomedTimeClone = null;
	this.enablingPlayer = null;
	this.trigger = function(playerList){
		this.timePlayer = null;
		this.enablingPlayer = null;
		var times = findAllAspectPlayers(this.session.players, "Time"); //they don't have to be in the medium, though
		this.enablingPlayer = getRandomElementFromArray(times); //ironically will probably allow more timeless sessions without crashes.
		this.leaderPlayer = getLeader(session.players);
		this.playerList = playerList;
		
		if(this.enablingPlayer){
			if(this.enablingPlayer.isActive() || Math.seededRandom() > .5){
				this.timePlayer = this.enablingPlayer;
			}else{  //somebody else can be voided.
				this.timePlayer = getRandomElementFromArray(this.session.players);  //passive time players make doomed clones of others.
			}
		}
		/*
		if(this.timePlayer.dead){  //a dead time player can't prevent shit.
			//console.log("time player is dead, not triggering")
			//console.log(this.timePlayer);
			return false;
		}*/
		//console.log("time player is not dead,  do i trigger?")
		return (this.timePlayer && (this.ectoDoom() || this.playerDoom() || this.randomDoom(times.length)));
	}



	this.renderContent = function(div){
	    if(!this.timePlayer){
	    		this.timePlayer = findAspectPlayer(this.session.players, "Time"); //they don't have to be in the medium, though

	    }
	    if(!this.timePlayer){
        	    		this.timePlayer = this.session.players[0]; //pick someone, dont crash

        }
        if(!this.enablingPlayer){
            this.enablingPlayer = this.timePlayer;
        }
		console.log("time clone " + this.timePlayer + " " + this.session.session_id);
		div.append("<br><img src = 'images/sceneIcons/time_icon.png'>"+this.content());
		var divID = (div.attr("id"))
		var canvasHTML = "<br><canvas id='canvas" + divID+"' width='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
		div.append(canvasHTML);
		var canvas = document.getElementById("canvas"+ divID);
		drawTimeGears(canvas, this.doomedTimeClone);
		drawSinglePlayer(canvas, this.doomedTimeClone);

	}

	this.leaderIsFucked = function(){
		if(this.leaderPlayer.dead && !this.leaderPlayer.dreamSelf && !this.leaderPlayer.godTier && !this.leaderPlayer.godDestiny){
			//console.log('leader is fucked')
			return true;
		}
		return false;
	}

	this.ectoDoom = function(){
		if(this.leaderIsFucked() && !this.session.ectoBiologyStarted){
			this.reason = "Leader killed before ectobiology."
			//console.log(this.reason)
			return true; //paradox, the babies never get made.
		}
		return false;
	}

	this.playerDoom = function(){
		//greater time pressure for getting all players in, can't wait for a revive.
		if(this.leaderPlayer.dead && this.playerList.length < this.session.players.length && this.playerList.length != 1){ //if i die before entering, well, that's yellowYard bullshit
			this.reason = "Leader killed before all players in medium.";  //goddamn it past jr, there was a TYPO here, no WONDER it never happened.
			console.log("!!!!!!!!!!!!!!!oh hell YES " + this.session.session_id)
			return true; //not everybody is in, leader can't be server for final player
		}
		return false;
	}

	//if there are multiple time players, multiple shots and doing rnadom shit.
	this.randomDoom = function(numTries){
		this.reason = "Shenanigans"
		for(var i = 0; i< numTries; i++){
			 if(Math.seededRandom() > .99) return true;
		}
		return false;
	}

	this.content = function(){
		var ret = "Minutes ago, but not many, in a slightly different timeline, a " + this.timePlayer.htmlTitleBasic() + " can't do much before a VERY COOL VERY RELIGIOUS PALADIN swoops in to kill them for the sin of being a clone.";
		ret += " They'd normally come with a dire warning of a doomed timeline, but they're dead, so it's totally cool. It never happened. ";
		if(this.enablingPlayer != this.timePlayer){
			console.log("nonTime player doomed time clone: " + this.session.session_id)
			ret += " The " + this.enablingPlayer.htmlTitleBasic() + " is properly horrified at this series of events. ";

		} 

		if(this.reason == "Leader killed before ectobiology."){
			//alert("ecto doom")
			ret += " But... if the " + this.leaderPlayer.htmlTitleBasic() + " dies right now, ";
			ret += " none of the Players will even be born in the first place. ";

			this.session.doomedTimelineReasons.push(this.reason)
			this.leaderPlayer.dead = false;
			this.leaderPlayer.renderSelf();
			var r = this.timePlayer.getRelationshipWith(this.leaderPlayer);
			if(r && r.value != 0){
					if(r.value > 0){
						console.log(" fully restoring leader health from time shenanigans: " + this.session.session_id)
						ret += " They're kind of dead so they... really... can't do that... but it's okay! The COOL PALADYN makes it so that never happened. Forget about it. ";
						this.leaderPlayer.currentHP = this.leaderPlayer.hp;
					}else{
						console.log(" barely restoring leader health from time shenanigans: " + this.session.session_id)
						ret += " Their dead body isn't too good at solving the fuck out of this timeline loop. Instead, the PALADYN just YOINKS the " + this.leaderPlayer.htmlTitleBasic() + "'s ass out of the danger zone. ";
						this.leaderPlayer.currentHP = this.leaderPlayer.hp/10;
					}
			}else{
				console.log(" half restoring leader health from time shenanigans: " + this.session.session_id)
				this.leaderPlayer.currentHP = this.leaderPlayer.hp/2;
				ret += " The body just flies off, hitting the " + this.leaderPlayer.htmlTitleBasic() +  " in the face to interrupt them. Score! ";
			}

		}else if(this.reason == "Leader killed before all players in medium."){
			ret += " But... if the " + this.leaderPlayer.htmlTitleBasic() + " dies right now, ";
			ret += " the " +this.session.players[this.session.players.length-1].htmlTitleBasic() + " will never even make it into the medium. "; //only point of paradox is for last player
			ret += " After all, the " + this.leaderPlayer.htmlTitleBasic() + " is their server player. ";
			this.leaderPlayer.dead = false;
			this.leaderPlayer.renderSelf();
			var r = this.timePlayer.getRelationshipWith(this.leaderPlayer);
			if(r && r.value != 0){
					if(r.value > 0){
						console.log(" fully restoring leader health from time shenanigans before all players in session: " + this.session.session_id)
						ret += " Welp. PALADYN makes it so that never happened. Forget about it. ";
						this.leaderPlayer.currentHP = this.leaderPlayer.hp;
					}else{
						console.log(" barely restoring leader health from time shenanigans before all players in session : " + this.session.session_id)
						ret += " Their dead body isn't too good at solving the fuck out of this timeline loop. Instead, the PALADYN just YOINKS the " + this.leaderPlayer.htmlTitleBasic() + "'s ass out of the danger zone. ";
						this.leaderPlayer.currentHP = this.leaderPlayer.hp/10;
					}
			}else{
				console.log(" half restoring leader health from time shenanigans before all players in session: " + this.session.session_id)
				ret += " The body just flies off, hitting the " + this.leaderPlayer.htmlTitleBasic() +  " in the face to interrupt them. Score! ";
				this.leaderPlayer.currentHP = this.leaderPlayer.hp/2;
			}
			this.session.doomedTimelineReasons.push(this.reason)
		}else{
			if(this.timePlayer.leader && !this.session.ectoBiologyStarted ){
					console.log("time player doing time ectobiology: " + this.session.session_id)
					this.timePlayer.performEctobiology(this.session);
					this.reason = "Time player didn't do ectobiology."
					session.doomedTimelineReasons.push(this.reason)
					ret += " They need to do the ectobiology right freaking now, or none of the players will ever even be born.";
			}else{
				this.reason = "Shenanigans"
				session.doomedTimelineReasons.push(this.reason)
				ret += " So, uh. Dead body aside. It's too complicated to explain, but everyone has already screwed up beyond repair. Really. ";
			}
		}



		var living = findLivingPlayers(this.session.players);
		if(living.length > 0){
			ret += " The " + this.timePlayer.htmlTitleBasic() + " has sacrificed(?) themselves to change the timeline. ";
			ret += " YOUR session's " + this.timePlayer.htmlTitle() + " is fine, don't worry about it... this one is still dead as fuck. ";
			ret += " You know, the plan was to time travel to where they can do the most good, but clones are disgusting and heretic, so that's the world we live in now. ";
			ret += " After being dead and doing nothing, they vanish in a cloud of clocks and gears. ";
		}else{
			console.log("death's hand maid in: " + this.session.session_id)
			ret += " Time really is the shittiest aspect. PALADYN kicks the their body to the side, makes sure everybody is dead in this timeline, as per inevitability's requirements, and then poofs out in a cloud of smoke. "
		}
		this.doomedTimeClone = makeDoomedSnapshot(this.timePlayer);
		this.timePlayer.doomedTimeClones.push(this.doomedTimeClone);
		this.timePlayer.sanity += -10;
		this.timePlayer.flipOut("their own doomed time clones")
		return ret;
	}
}
