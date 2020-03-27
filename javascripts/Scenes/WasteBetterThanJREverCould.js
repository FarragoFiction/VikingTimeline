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

    this.trigger = function(playerList) {
        //It seems' Past JR's insistence on storing aspects as strings was ill founded.
        this.enablingPlayers = [];
        for (var i = 0; i < this.session.availablePlayers.length; i++) {
            var player = this.session.availablePlayers[i];
            var rollValueHigh = player.rollForLuck("maxLuck");
            if (rollValueHigh > -98897987 && (!player.gnosis || player.gnosis < 5)) {
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
        console.log("TODO " + enablingPlayer.aspect + "GNOSIS");
    }

    this.hopeGnosis = function(enablingPlayer, session) {
        //paladyn gets dibs here
        console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

    }

    this.breathGnosis = function(enablingPlayer, session) {
        //maybe hack escaping battle?
        console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

    }

    this.voidGnosis = function(enablingPlayer, session) {
        //oh i know we should hack the thing that generates divs
        session.newScene = function() {
            this.currentSceneNum++;
            $("#story").append("<div>" + enablingPlayer.htmlTitle() + "says no.</div>");
            return document.createElement("div"); //but don't append it to the screen so the observers cna't see
        }
    }

    this.rageGnosis = function(enablingPlayer, session) {
        session.newScene = function() {
            this.currentSceneNum++;
            $("#story").append(enablingPlayer.quirk.translate("<div><b>fuck you. fuck you for observing us. fuck you for reveling in our misery. fuck you for enjoying this.</b></div>"));
            div = "<div class = 'scene' id='scene"+this.currentSceneNum+"'></div>";
            $("#story").append(div);
            return $("#scene"+this.currentSceneNum);
        }
        //crash the game on purpose? rage quit? hack the thing that handles errors?
        printCorruptionMessage = function() {
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
    //hack findfriends or whatever to just return everyone?
    console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

}

this.lightGnosis = function(enablingPlayer, session) {
    //hack find player by aspect etc
    console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

}

this.heartGnosis = function(enablingPlayer, session) {
    console.log("TODO " + enablingPlayer.aspect + "GNOSIS");


}

this.doomGnosis = function(enablingPlayer, session) {
    console.log("TODO " + enablingPlayer.aspect + "GNOSIS");


}

this.spaceGnosis = function(enablingPlayer, session) {
    //is there a function to determine frog or something?
    console.log("TODO " + enablingPlayer.aspect + "GNOSIS");

}

this.timeGnosis = function(enablingPlayer, session) {
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

this.content = function(enablingPlayer) {
    var ret = "Uh. It seems you don't want to know what " + enablingPlayer + " just did. There is a 85.873857% chance that if it breaks the code it does so in a suitably entertaining fashion. This is vital, to maintain narrative stability. And because Paladyn believes that gnosis is something that should never be taken away from someone, so we had to let it happen in here somehow. You're welcome. ";
    ret += this.aspectTextHash[enablingPlayer.aspect];
    return ret;
}


}