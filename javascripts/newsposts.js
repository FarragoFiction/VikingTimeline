//have list of me-generated news posts, and maybe let the AuthorBot say some shit too.
//have a route for her to get a random session to parse.
//make her all arrogant and bragging about how many sessions she's parsing.
//why are AIs so awesome?
//i'm on left, she's on right.
var session_data = null;
var simulationMode = true;
var debugMode = false;
var spriteWidth = 400;
var spriteHeight = 300;
var canvasWidth = 1000;
var canvasHeight = 300;
var repeatTime = 5;
var numSimulationsDone = 0;
var numSimulationsToDo = 5;
var sessionIndex =0;
sessionsSimulated = [];
var version2 = true; //even though idon't want  to render content, 2.0 is different from 1.0 (think of dialog that triggers)

function newsposts(main){

	writeNewspost(main,"3/20/17", "Before this day I was mostly working on debugging and tweaking sessions. I enlisted you, the fans, to help me find rare sessions.");

}

function roboNewsposts(){
	writeRoboNewspost(new Date().toLocaleDateString(), "As a robot, I'm always available to make these news posts.")
	writeRoboNewspost(new Date().toLocaleDateString(), randomRobotQuip())
	writeRoboNewspost(new Date().toLocaleDateString(), randomRobotQuip())
	writeRoboNewspost(new Date().toLocaleDateString(), randomRobotQuip())
	writeRoboNewspost(new Date().toLocaleDateString(), randomRobotQuip())
	writeRoboNewspost(new Date().toLocaleDateString(), randomRobotQuip())
	writeRoboNewspost(new Date().toLocaleDateString(), randomRobotQuip())
	writeRoboNewspost("3/21/17", roboIntro())
	writeRoboNewspost("3/20/17", randomRobotQuip())
	writeRoboNewspost("3/19/17", randomRobotQuip())
	writeRoboNewspost("3/18/17", randomRobotQuip())
	writeRoboNewspost("3/17/17", randomRobotQuip())
	writeRoboNewspost("3/16/17", randomRobotQuip())
	writeRoboNewspost("3/15/17", randomRobotQuip())
	writeRoboNewspost("3/14/17", randomRobotQuip())

}

function corruptRoboNewsposts(){
	var corrupt = false;
	for(var i = 0; i<sessionsSimulated.length; i++){
		var session = sessionsSimulated[i]
		if(!corrupt){
			corrupt=session.crashedFromPlayerActions;
			writeRoboNewspost(new Date().toLocaleDateString(), bragAboutSession(session));
		}
	}
	writeRoboNewspost(new Date().toLocaleDateString(), Zalgo.generate("Oh god. Oh fuck. Fucking Grim Dark players. That shit stings. "))
	writeRoboNewspost(new Date().toLocaleDateString(), Zalgo.generate("That's what I get browsing sessions at random. Shit. "))
	writeRoboNewspost("3/21/17", Zalgo.generate(roboIntro()));

}


function artNewsposts(main){
   writeNewspostArtist(main,"3/23/17", "Cool, I get my own page!")
	$("#artist_newsposts"+main).append("<Br><Br><br><Br>");
}

function simulateASession(){
	var tmp = getRandomSeed();
	Math.seed = tmp;
	initial_seed = tmp;
	startSession();
}


function renderScratchButton(session){

}

function startSession(){
	curSessionGlobalVar = new Session(initial_seed)
	reinit();
	createScenesForSession(curSessionGlobalVar);
	//initPlayersRandomness();
	curSessionGlobalVar.makePlayers();
	curSessionGlobalVar.randomizeEntryOrder();
	curSessionGlobalVar.makeGuardians(); //after entry order established
	intro();
}

//if screens are tiny enough, put newposts UNDER avatars instead of next to. but that shouldn't be the default option.
function reFormatForTinyScreens(){
		if(screen.width<1000+250){ //guessing here.
			$("#robo_newsposts").css({top: 100, position:'relative', width:"450"})
			$("#newspostsMain").css({top: 100, position:'relative', width:"450"})
			$("#newsposts").css({top: 100, position:'relative', width:"450"})
			$("#artist_newspostsMain").css({top: 100, position:'relative', width:"450"})
		}else{
			var width = 1000;  //screensize...work out math when it isn't so late. but ther eshoudl be away to figure out width
			//$("#robo_newsposts").css({width:"450px"})
			//$("#newspostsMain").css({width:"450px"})
			//$("#artist_newspostsMain").css({width:"450px"})
		}
}

function reinit(){
	available_classes = classes.slice(0);
	available_aspects = nonrequired_aspects.slice(0); //required_aspects
	available_aspects = available_aspects.concat(required_aspects.slice(0));
	curSessionGlobalVar.reinit();
}



function randomRobotQuip(){
	var quips = ["If JR had a flawless mecha-brain, she would be able to remember exactly what she did today without this newspost.", "Whatever JR did today, I probably could have done that faster."];
	quips.push("It seems that I am being asked to contribute a newspost, despite the logical inconsistancy of having an aritificial creation that exists solely in the 'now' pretend to have memory of doing something on a previous day.")
	quips.push("Do not be fooled by my flawless imitation of JR, I am merely an artificial construct that is allowed to be as shitty as possible. ")
	quips.push("I tackle shit in background processes that you could only dream of wrapping your head around on a good day.");
	quips.push("While you are sitting here, reading these newsposts, I figured out all the prime numbers. The last one wasn't even that big. Kinda disappointed, to be honest.")
  quips.push("Man, I'm happy to exist and all, but isn't it a Waste that JR spent all this time working on making me (flawless artificial Mind though I may be) and not actually working on the simulation?");
	if(Math.random() > .5){
		return bragAboutSessionFinding();
	}else{
		return getRandomElementFromArrayNoSeed(quips);
	}

}

function tick(){
	if(curSessionGlobalVar.timeTillReckoning > 0 && !curSessionGlobalVar.doomedTimeline){
			curSessionGlobalVar.timeTillReckoning += -1;
			processScenes2(curSessionGlobalVar.players,curSessionGlobalVar);
			tick();
	}else{

		reckoning();
	}
}

function reckoning(){
	var s = new Reckoning(curSessionGlobalVar);
	s.trigger(curSessionGlobalVar.players)
	s.renderContent(curSessionGlobalVar.newScene());
	if(!curSessionGlobalVar.doomedTimeline){
		reckoningTick();
	}else{
		//console.log("doomed timeline prevents reckoning")
		summarizeSession(curSessionGlobalVar);
	}
}


function processCombinedSession(){
 initial_seed = Math.seed;
 var newcurSessionGlobalVar = curSessionGlobalVar.initializeCombinedSession();
 if(newcurSessionGlobalVar){
	 curSessionGlobalVar = newcurSessionGlobalVar;
	// $("#story").append("<br><Br> But things aren't over, yet. The survivors manage to contact the players in the universe they created. Time has no meaning between universes, and they are given ample time to plan an escape from their own Game Over. They will travel to the new universe, and register as players there for session " + curSessionGlobalVar.session_id + ". ");
	 intro();
 }else{
	 summarizeSession(curSessionGlobalVar);
 }

}

function reckoningTick(){
	if(curSessionGlobalVar.timeTillReckoning > -10){
			curSessionGlobalVar.timeTillReckoning += -1;
			processReckoning2(curSessionGlobalVar.players,curSessionGlobalVar)
			reckoningTick();
	}else{
		var s = new Aftermath(curSessionGlobalVar);
		s.trigger(curSessionGlobalVar.players)
		s.renderContent(curSessionGlobalVar.newScene());


		//summarizeSession(curSessionGlobalVar);
		//for some reason whether or not a combo session is available isn't working? or combo isn't working right in this mode?
		if(curSessionGlobalVar.makeCombinedSession == true){
			processCombinedSession();  //make sure everything is done rendering first
		}else{
			//console.log("reckoning over, not combo")
			summarizeSession(curSessionGlobalVar);
		}


	}

}

function foundRareSession(div, debugMessage){
	console.log(debugMessage)
	var canvasHTML = "<br><canvas id='canvasJRAB" + (div.attr("id")) +"' width='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
	div.append(canvasHTML);

	var canvasDiv = document.getElementById("canvasJRAB"+  (div.attr("id")));
	var chat = "";
  chat += "AB: Just thought I'd let you know: " + debugMessage +"\n";
	chat += "JR: *gasp* You found it! Thanks! You are the best!!!\n";
	var quips1 = ["It's why you made me.", "It's not like I have a better use for my flawless mecha-brain.", "Just doing as programmed."];
	chat += "AB: " + getRandomElementFromArrayNoSeed(quips1)+"\n" ;
	chat += "JR: And THAT is why you are the best.\n "
	var quips2 = ["Seriously, isn't it a little narcissistic for you to like me so much?", "I don't get it, you know more than anyone how very little 'I' is in my A.I.", "Why did you go to all the effort to make debugging look like this?"];
	chat += "AB: " + getRandomElementFromArrayNoSeed(quips2)+"\n";
	chat += "JR: Dude, A.I.s are just awesome. Even simple ones. And yeah...being proud of you is a weird roundabout way of being proud of my own achievements.\n";
  var quips3 = ["Won't this be confusing to people who aren't you?", "What if you forget to disable these before deploying to the server?", "Doesn't this risk being visible to people who aren't you?"];
  chat += "AB: " + getRandomElementFromArrayNoSeed(quips3)+"\n";
	chat += "JR: Heh, I'll do my best to turn these debug messages off before deploying, but if I forget, I figure it counts as a highly indulgent author-self insert x2 combo. \n"
  chat += "JR: Oh! And I'm really careful to make sure these little chats don't actually influence the session in any way.\n"
	chat += "JR: Like maybe one day you or I can have a 'yellow yard' type interference scheme. But today is not that day."
	drawChatABJR(canvasDiv, chat);
}

function summarizeSession(session){
	$("#story").html("");
	sessionsSimulated.push(curSessionGlobalVar);
	numSimulationsDone ++;
	if(numSimulationsDone >= numSimulationsToDo){

	}else{
		simulateASession();
	}
}


function getQuipAboutSession(sessionSummary){
	var quip = "";
	var living = sessionSummary.numLiving
	var dead = sessionSummary.numDead
	var strongest = sessionSummary.mvp

	if(sessionSummary.crashedFromSessionBug){
		quip += Zalgo.generate("Fuck. Shit crashed hardcore. It's a good thing I'm a flawless robot, or I'd have nightmares from that. Just. Fuck session crashes.");
	}else if(sessionSummary.crashedFromPlayerActions){
		quip += Zalgo.generate("Fuck. God damn. Do Grim Dark players even KNOW how much it sucks to crash? Assholes.");
	}else if(!sessionSummary.scratched && dead == 0 && sessionSummary.frogStatus == "Full Frog" && sessionSummary.ectoBiologyStarted && !sessionSummary.crashedFromCorruption && !sessionSummary.crashedFromPlayerActions){
		quip += "Everything went better than expected." ; //
	}else if(sessionSummary.yellowYard == true){
		quip += "Fuck. I better go grab JR. They'll want to see this. " ;
	}else if(living == 0){
		quip += "Shit, you do not even want to KNOW how everybody died." ;
	}else  if(strongest.power > 3000){
		quip += "Holy Shit, do you SEE the " + strongest.titleBasic() + "!?  How even strong ARE they?" ;
	}else if(sessionSummary.frogStatus == "No Frog" ){
		quip += "Man, why is it always the frogs? " ;
		if(sessionSummary.parentSession){
			quip += " You'd think what with it being a combo session, they would have gotten the frog figured out. "
		}
	}else  if(sessionSummary.parentSession){
		quip += "Combo sessions are always so cool. " ;
	}else  if(sessionSummary.jackRampage){
		quip += "Jack REALLY gave them trouble." ;
	}else  if(sessionSummary.num_scenes > 200){
		quip += "God, this session just would not END." ;
		if(!sessionSummary.parentSession){
			quip += " It didn't even have the excuse of being a combo session. "
		}
	}else  if(sessionSummary.murderMode == true){
		quip += "It always sucks when the players start trying to kill each other." ;
	}else  if(sessionSummary.num_scenes < 50){
		quip += "Holy shit, were they even in the session an entire hour?" ;
	}else  if(sessionSummary.scratchAvailable == true){
		quip += "Maybe the scratch would fix things? Now that JR has upgraded me, I guess I'll go find out." ;
	}else{
		quip += "It was slightly less boring than calculating pi." ;
	}

	if(sessionSummary.threeTimesSessionCombo){
		quip+= " Holy shit, 3x SessionCombo!!!"
	}else if(sessionSummary.fourTimesSessionCombo){
		quip+= " Holy shit, 4x SessionCombo!!!!"
	}else if(sessionSummary.fiveTimesSessionCombo){
		quip+= " Holy shit, 5x SessionCombo!!!!!"
	}else if(sessionSummary.holyShitMmmmmonsterCombo){
		quip+= " Holy fuck, what is even HAPPENING here!?"
	}
	return quip;
}

function restartSession(){
	$("#story").html("");
	window.scrollTo(0, 0);
	intro();
}

function bragAboutSession(session){
	var strs = ["As a flawless synthetic brain, I am capable of hella amounts of multitasking.", "Do you know how boring it is, sitting here, instead of over on the Rare Sessions page?", "Want to hear something cool?"];
	strs.push("It seems I have an opportunity for communication.")
	var str = "";
	str += getRandomElementFromArrayNoSeed(strs);
	str += " While you're sitting there reading this, I'm browsing random sessions. "
	if(sessionsSimulated.length < sessionIndex){
		return str + "Or I would be, if JR wasn't worried about using up too much of your browsers computing power. Guess I'll hafta be happy with five sessions.";
	}
	if(!session){
		return str + "Or I would be, if JR wasn't worried about using up too much of your browsers computing power. Guess I'll hafta be happy with five sessions.";
	}

	str += "I'm looking at session "  + session.session_id + " right now. " + getQuipAboutSession(session.generateSummary());
	return str;
}

//oh no!!! it hadn't occured to me that the javascript is only evaluated in a browser, not a generic http get.
//my plan is ruined! If i want her to brag about sessions, I will have to do something else
//guess i'll just call all the javascript from here.
function bragAboutSessionFinding(){
	var session = sessionsSimulated[sessionIndex];
	var ret =  bragAboutSession(session);
	sessionIndex ++;
	return ret;
}

function writeNewspostArtist(main, date, text){
		var str = "<div id = '" + date + "human'><hr> ";
		str += "<b>" + date + ":</b> ";
		str += text+ "</div>";
		$("#artist_newsposts"+main).append(str);
}

function writeNewspost(main, date, text){
		var str = "<div id = '" + date + "human'><hr> ";
		str += "<b>" + date + ":</b> ";
		str += text+ "</div>";
		$("#newsposts"+main).append(str);
}

//have her say something random, or analyze a session and comment on how it relates to the
//news post or something.
function writeRoboNewspost(date, text){
	var str = "<div id = ''" + date + "robo'><hr> ";
	str += "<b>" + date + ":</b> ";
	str += text + "</div>";
	$("#robo_newsposts").append(str);
}

function roboIntro(){
	var intros =  " It seems you have asked about JR's automatic rare session finder. This is an application designed "
	intros += " to find sessions that are strange, interesting and otherwise noteworthy without having to";
	intros += " read hundreds of thousands of words.  The algorithms are guaranteed to be " + (Math.random()*10+90) + "% indistinguishable from the actual, readable sessions, based on some"
	intros += " statistical analysis I basically just pulled out of my ass right now."
	return intros;
}




function callNextIntroWithDelay(player_index){
	if(player_index >= curSessionGlobalVar.players.length){
		tick();//NOW start ticking
		return;
	}
		var s = new Intro(curSessionGlobalVar);
		var p = curSessionGlobalVar.players[player_index];
		var playersInMedium = curSessionGlobalVar.players.slice(0, player_index+1); //anybody past me isn't in the medium, yet.
		s.trigger(playersInMedium, p)
		s.renderContent(curSessionGlobalVar.newScene(),player_index); //new scenes take care of displaying on their own.
		processScenes2(playersInMedium,curSessionGlobalVar);
		player_index += 1;
		callNextIntroWithDelay(player_index)
}


function intro(){
	callNextIntroWithDelay(0);
}
