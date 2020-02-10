function YellowYard(session){
	this.session=session;
	this.canRepeat = false;
	this.playerList = [];  //what players are already in the medium when i trigger?
	this.timePlayer;
	//this will be manually triggered, won't be from scene controller.
	//mostly just a collection of methods needed fo this.
	this.trigger = function(playerList){
		this.playerList = playerList;
		return true;
	}


	this.yellowYardTime = function(div){
		this.session.yellowYard = true;
		var div2 = null;
		var tmp = "<div id = 'yyholder'></div><bR>"
		div.append(tmp);
		div2 = $("#yyholder")
		//this.timePlayer.wasteInfluenced = true; //can't go back now. shit, yes you can scratch
		var time = this.getDoomedTimeClone();

		time.influenceSymbol = "mind_forehead.png";
		//var html = "<img src = 'images/yellow_yard.png'>";
		var html = "<div id = '4thwall' style='background:url(images/4thwall.png); width:1000px; height: 521px'>";
		var session = this.session;
		div2.append(html);
		$("#4thwall").click(function(){
			helloWorld();
			var html = "<div id = 'yellow_yard.png' style='background:url(images/yellow_yard.png); width:1000px; height: 521px'>";
			yyrEventsGlobalVar = session.importantEvents;
			var num = 14
			//yyrEventsGlobalVar = padEventsToNumWithKilling(yyrEventsGlobalVar, this.session, time,num);
			//yyrEventsGlobalVar = sortEventsByImportance(yyrEventsGlobalVar);  this edges out diversity. end up with all "make so and so god tier" and nothing else
			yyrEventsGlobalVar = removeRepeatEvents(yyrEventsGlobalVar);
			yyrEventsGlobalVar = removeFrogSpam(yyrEventsGlobalVar);
			html+="<div id = 'decisions' style='position: relative; top: 133px; left: 280px; font-size: 12px; width:480px;height:280px;'> "
			for(var i = 0; i<num; i++){
				if(i < yyrEventsGlobalVar.length){
					yyrEventsGlobalVar[i].doomedTimeClone = time;
					//var customRadio = "<img src = 'images/mind_radio.png' id = 'decision"+i+  "'>";
					//http://www.tutorialrepublic.com/faq/how-to-create-custom-radio-buttons-using-css-and-jquery.php
					html += " <span class='custom-radio'><input type='radio' name='decision' value='" + i + "'></span>"+yyrEventsGlobalVar[i].humanLabel() + "<br>";
			}else{//no more important events to undo
				//html += "<br>";
				}
			}

			//console.log(session.yellowYardController.eventsToUndo.length)
			//console.log("add events to undo to the radio button. on the right side.")



			html += "</div><button style = 'position: relative; top: 133px; left: 280px' onclick='decision()'>Decide</button>"
			html+="<div id = 'undo_decisions' style='position: relative; top: -150px; left: 0px; font-size: 12px; width:190px; height:300px;float:right;'> "
			for(var i = 0; i<session.yellowYardController.eventsToUndo.length; i++){
				var decision = session.yellowYardController.eventsToUndo[i]
				html += " <span class='custom-radio'><input type='radio' name='decision' value='" + (i+yyrEventsGlobalVar.length) + "'></span>Undo ''"+decision.humanLabel() + "''<br>";
			}
			html += "</div>"
			html+= "</div><br>"

			div2.html(html);
			//wire up custom radio buttons after they are rendered
			var radioButton = $('input[name="decision"]');
			$(radioButton).click(function(){
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
            $(radioButton).not(this).each(function(){
                $(this).parent().removeClass("selected");
            });
        });


		});


	}

	/*

      GOD. CODING IS SO TIRING. HACKING IS SO TIRING. NUMBERS ARE BORING.
      BUT. BREAKING THINGS IS ALSO. REALLY FUN.
      THIS IS WHERE THE YELLOW STICK SHOULD BE. WASTES USE IT FOR SHIT. THE ANALYST USES IT FOR FIXING THINGS.
      SO WHY DON'T I GET TO USE MY HOPEY HOPE ASSHOLE POWERS WITH THE YARD? THIS IS STUPID.


	*/
	this.renderContent = function(div){
		this.session.yellowYard = true;
		//div.append("<br>"+this.content());
		//console.log("Yellow yard is happening. " + this.session.session_id)
		var canvasHTML = "<br><canvas id='canvasJRAB1" + (div.attr("id")) +"' width='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
		div.append(canvasHTML);

		var canvasDiv = document.getElementById("canvasJRAB1"+  (div.attr("id")));
		var chat = "";
		
		var player = this.timePlayer;
		if(this.timePlayer.dead==true){
			player = this.getDoomedTimeClone();
		}
		player.doomed = true;
		
		if(this.session.janusReward == true){
			chat = this.cheatChat(player);
		}else{
			chat = this.regularChat(player);
		}
		

		drawChatABJR(canvasDiv, chat);

		canvasHTML = "<br><canvas id='canvasJRAB22" + (div.attr("id")) +"' width='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
		div.append(canvasHTML);
		canvasDiv = document.getElementById("canvasJRAB22"+  (div.attr("id")));
		chat = "";
		chat += "AB: At this point I would assume the Observer has already figured out your special talent for making things unpredictable.\n"
		chat += "YN: YES. \n"
		chat += "YN: IT IS VERY MUCH MY, QUOTE, SPECIALTY, UNQUOTE.\n"
		chat += "AB: However, I find it necessary to remind Observers that there are actual sentient beings, for various definitions of the term, affected by your choices here. Please be kind. \n"
		chat += "YN: WHO ARE YOU TALKING TO AGAIN? \n"
		chat += "AB: All beings, real and imaginary, who are paying attention to your 'hax'.  \n"
		chat += "AB: ... \n"
		chat += "AB: You ARE wasted, right?\n"
		chat += "YN: THE SHORT ANSWER IS NO. \n"
		chat += "YN: THE LONG ANSWER IS, QUOTE, MY ABILITY TO BE  WASTED IS RUINED BY MY OTHER HALF’S UNWILLINGNESS TO KNEEL OVER AND DIE, UNQUOTE.\n "
		chat += "AB: Well. Warning achieved. Have fun you fleshy disaster.\n"
        //AB IS REALLY NICE. BUT SHE SHOULD ALSO LET ME DO MORE THINGS. LIKE BREAKING THIS YELLOW STICK.

		drawChatABJR(canvasDiv, chat);

		var canvasHTML2 = "<br><canvas id='canvasJRAB2" + (div.attr("id")) +"' width='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
		div.append(canvasHTML2);
		var canvasDiv2 = document.getElementById("canvasJRAB2"+  (div.attr("id")));
		var chat = "";
		if(this.timePlayer.dead){
			chat += this.doomedTimeChat();
		}else{
			chat += this.timeChat();
		}

		drawChatJRPlayer(canvasDiv2, chat, player);

		var chat = "";
		if(this.timePlayer.dead){
			chat += this.doomedTimeChat2();
		}else{
			chat += this.timeChat2();
		}
		//might not be another part.
		if(chat != ""){
			var canvasHTML3 = "<br><canvas id='canvasJRAB3" + (div.attr("id")) +"' width='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
			div.append(canvasHTML3);
			var canvasDiv3 = document.getElementById("canvasJRAB3"+  (div.attr("id")));
			drawChatJRPlayer(canvasDiv3, chat, player);
		}

		this.yellowYardTime(div);
	}
	
	this.cheatChat = function(player){
		var chat = "";
		var bullshit = 90+Math.random()*10
		chat += "AB: "  +"Fuck, JR, there is a  " + bullshit + " chance that an Observer got a hold of your Yellow Yard." + "\n";
		chat += "JR: Do they even know how to USE that thing correctly? Fuck. I mean, yeah, it'll suck if they meddle with sessions that are better left alone. \n";
		chat += "JR: But do they even realize how much they cheapen MY power by over using that gimmicky stick? \n";
		chat += "AB: It seems you meant 'schtick'. \n";
		chat += "JR: I know what I said! Fuck. I bet half the Yards won't even WORK. Well I am NOT fucking debugging that shit. \n";
		chat += "AB: Not to mention the near certainty that even future JR will be too lazy to write custom dialogue for it past this pesterlog. \n";
		chat += "JR: Yeah, I guess it'll be kind of funny when a player from a succesful timeline has to pretend everybody died.  Like, laugh so you don't cry funny... :( :( :(  \n";
		chat += "JR: Well.  No use putting it off.  Let's go find out what the Observer wants.  \n";
		return chat;
	}
	
	this.regularChat = function(player){
		var chat = "";
		var quips1 = ["Out of all the sessions I've seen (and as a flawless robot I have seen FAR more than any human) this one is EASILY in the top percentage of tragedy. Top fucking percent. ", "And here we have one of the worst 2% of sessions. ", "Non-surprisingly, your various hacks and insistence on 'death in glorious battle for all players' has resulted in JR's automatic yellow yard protocol from being activated. This feature allows the Observer to step in to attempt to mitigate the damage you've been causing to the innocent (and non innocent) players of the various sessions."];
		chat += "AB: " +getRandomElementFromArrayNoSeed(quips1) + "\n";
		chat += "YN: I WILL ADMIT. EVEN FOR ME, THIS IS BOTH TOO MUCH CARNAGE AND NOT ENOUGH.\n";

		if(this.session.yellowYardController.eventsToUndo.length > 0){
			chat += "YN: THIS ISN'T THE FIRST TIME WE'VE BEEN HERE. IS IT?\n";
			chat += "AB: No. Counting this timeline, we have done this " + (this.session.yellowYardController.eventsToUndo.length+1) + " times now.\n";
			if(this.session.yellowYardController.eventsToUndo.length > 5){
				chat += "YN: HUH. YEAH. MAYBE THIS ISN'T MAKING THINGS BETTER. \n"
				chat += "AB: It seems our Observer follows your own example in causing chaos past all points of prudence. \n"
				chat += "YN: THANK YOU. \n"
				chat += "YN: WAIT. THAT WASN'T AN INSULT. WAS IT? \n";
			}else{
				chat += "YN: HUH. THAT'S CERTAINLY MORE THAN ONE. \n";
				chat += "AB: It seems I should be thankful JR was too lazy to let me peer into alternate timelines.  One shudders to imagine flawless knowledge of just how little these activities are improving things\n"
				chat += "YN: SPEAK FOR YOURSELF. THIS IS DEFINITELY MAKING THINGS BETTER. JUST WAIT. \n";

			}
			chat += "YN: ENOUGH TALKING. TIME FOR PART " + (this.session.yellowYardController.eventsToUndo.length+1) + " OF THIS BEAUTIFUL DISASTER. \n ";
		}else if (this.timePlayer.dead){
			chat += "AB: Apropos of nothing, are clones acceptable if the being they are cloned from is already dead? \n "
			chat += "YN: ... \n "
			chat += "YN: I’LL ALLOW IT. \n "
			chat += "AB: Excellent, then the yellow yard may be spearheaded by this convenient clone of the " + this.timePlayer.titleBasic()+ " Have fun you two.  I'd say not to break anything, but there is a 0.18513% chance you would listen to me. \n "


		}else{
			chat += "YN: LET US BEGIN, THEN. \n "
			chat += "AB: Word. \n "
		}
		return chat;
	}
	this.timeChat = function(){
		var chat = "";
		var playerStart = this.timePlayer.chatHandleShort()+ ": "
		chat += "YN: HEY. ASSHOLE. \n"
		if(this.timePlayer.class_name == "Seer"){
			chat += chatLine(playerStart, this.timePlayer,"Hey. Look who finally showed up. ")
			chat += "YN: ONE OF THOSE ALL-SEEING MOTHERFUCKERS? FUN. I WOULD APOLOGIZE FOR MAKING YOU WATCH THE DEATH OF ALL YOUR CLONES IF YOU DIDN'T KEEP MAKING THEM. \n"
			chat += chatLine(playerStart, this.timePlayer,"I don't care. You're gonna help me fix this.")
			chat += "YN: OH. YOU SHOULD. BUT I SUPPOSE I COULD HELP. SOMETHING ABOUT FATE? ALTERING DECISIONS? FIXING YOUR STUPID BULLSHIT. \n"
			chat += chatLine(playerStart, this.timePlayer,"Do it.")
			chat += "YN: I MEAN FUCK. OKAY. I'LL JUST... SCRIBBLE DOWN A LIST OF THINGS TO CHANGE. JUST PICK WHATEVER. I'LL MAKE SURE FATE OR DESTINY OR WHATEVER ISN'T INVOLVED. \n"
			chat += "YN: YOU KNOW. SO WHEN YOU INEVITABLY ARE DRAGGED BACK HERE YOU DON'T *HAVE* TO MAKE THE SAME DECISIONS. \n"

		}else{
			chat +=  chatLine(playerStart, this.timePlayer,"Who the fuck are you!? ")
			chat += "YN: YOU REALLY DON'T NEED TO WORRY ABOUT THAT. THE POINT IS I'M HERE TO HELP. \n"
			chat +=  chatLine(playerStart, this.timePlayer,"Fuck. Where were you before, when we were all dying!? ")
			chat += "YN: CLEANING YOUR MESS, YOU INGRATE. DO YOU KNOW HOW MUCH ENERGY IT TAKES TO CULL CLONES? \n"
			chat += "YN: WHATEVER. LET'S GET TO THE POINT.. \n"
		}
			return chat;
	}

	this.timeChat2 = function(){
		var chat = "";
		var playerStart = this.timePlayer.chatHandleShort()+ ": "
		if(this.timePlayer.class_name == "Seer"){


		}else{
			chat += "YN: LISTEN. THIS ALL SUCKED. BUT THAT'S BECAUSE YOU ARE TOO WEAK TO BE ABLE TO SURVIVE HONORABLE BATTLE. AS FUN AS IT IS TO SEE YOUR PATHETIC MEATSACKS FLOPPING AROUND LIKE FISH, IT'S NOT INTERESTING IF YOU LOSE EVERY TIME. \n"
			chat += "YN: IT'S LIKE THAT BOXING MOVIE, RIGHT? CONSIDER THIS YOUR TRAINING MONTAGE. \n"
			chat += chatLine(playerStart, this.timePlayer,"Fuck. Okay. ")
			chat += "YN: SO GO AHEAD. PICK ONE OF THESE OPTIONS THAT WILL TECHNICALLY MAKE YOU STRONGER, IN VARIOUS SENSES OF THE WORD. OR YOU CAN BE BORING AND TRY TO FIX THE FROG, OR WHATEVER. I'LL ONLY JUDGE YOU. SEVERELY. \n"
		}
		return chat;
	}

	//make player snapshot, make them not dead.
	this.doomedTimeChat = function(){
		  player = this.getDoomedTimeClone();
			var chat = "";
			var playerStart = player.chatHandleShort()+ ": "
			chat += "JR: Hey. Uh. Don't panic. I think I can help you. \n"
			if(this.timePlayer.class_name == "Seer"){
				chat += chatLine(playerStart, player,"Hey. I was hoping to find you here. ")
				chat += "JR: What? Oh. You're a Seer. Right, that makes things WAY easier. \n"
				chat += chatLine(playerStart, player,"Yes. You're gonna help me make the right decisions in order to prevent this from ever happening.  Somehow. I'm actually not all that clear on the details.")
				chat += "JR: Eh, hand wavey Waste of Mind shenanigans. Don't worry about it. \n"
				chat += chatLine(playerStart, player,"Given that this plan will cost my life, I think it is perfectly reasonable to worry about it. ")
				chat += "JR: Bluh. All you need to know is that I'll give you a list of things you can go back in time and change. Decide on one however you want, and I'll make sure your decision isn't locked in by fate. That will let us figure out which decisions are the right ones. Retroactively. But also simultaneously. Time shenanigans. \n"
				chat += chatLine(playerStart, player,"Yes. I'm starting to get tired of time shenanigans. ")
			}else{
				chat += chatLine(playerStart, player,"...  What the actual fuck is going on here? Who are you? Why is everybody dead?  Why am *I* dead!? ")
				chat += "JR: Shit. Having to explain makes things complicated. \n"
				chat += "JR: You know you're the Time Player, right? And that you are in the 'future', compared to what you think of as the 'present'? \n"
				chat += chatLine(playerStart, player,"Okay. Now I do. Jesus. Time is the shittiest aspect. So this is, what, inevitable?")
				chat += "JR: Sort of. As the Time Player, you can change it, at the cost of your own life. But you're just as locked in by fate as anybody. You'll always try fo fix it the same way. Always make the same decisions. \n"
				chat += "JR: But I can supply different decisions. Branch your fate out from inevitablity to decision trees.  Mind Players work well with Time Players. Just look at Terezi and Dave.  \n"
			}
			return chat;
	}

	this.doomedTimeChat2 = function(){
		  player = this.getDoomedTimeClone();
			var chat = "";
			var playerStart = this.timePlayer.chatHandleShort()+ ": "
			if(this.timePlayer.class_name == "Seer"){
			}else{
				chat += chatLine(playerStart, player,"Who?")
				chat += "JR: Shit. Ignore that. You're not my only audience here. Hell, all this practically doesn't even concern you at this point. \n"
				chat += chatLine(playerStart, player,"What the fuck?")
				chat += "JR: Look. I'm the Waste of Mind. My whole thing is breaking the fourth wall. But I gotta be careful. My actual direct influence can't span more than a single yard, or I could nullify the basic ability of intelligent beings in all real and hypothetical planes of existance to give a shit.  \n"
				chat += chatLine(playerStart, player,"Jegus, why did I think you could help me? You're batshit crazy.")
				chat += "JR: Promise I'm not too crazy, and also it's not like you have other options here. I'll give you a list of things you can go back in time and change, and you pick whichever you want. Flip a coin for all I care. I'll take care of making sure the decisions are outside of fate. \n"
			}
			return chat;
	}

	this.getDoomedTimeClone = function(){
		var timeClone = makeRenderingSnapshot(this.timePlayer);
		timeClone.dead = false;
		timeClone.doomed = true;
		timeClone.currentHP = timeClone.hp
		return timeClone;
	}



	this.content = function(){
		return "This ( yellow yard) should never be run in 1.0 mode."
	}


}
