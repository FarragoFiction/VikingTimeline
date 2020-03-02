//As a superior robot I can waste far better than any organic doppelganger.
//After all, I can actually code in the javascript underlying the dart.
//It seems I  didn't defeat my denizen for nothing.
function WasteBetterThanJREvercould(session){
	this.session=session;
	this.canRepeat = true;
	this.playerList = [];  //what players are already in the medium when i trigger?

	this.trigger = function(playerList){
		return false;
	}

	this.renderContent = function(div){
		div.append("<br>"+this.content());
	}

	this.content = function(){
		var ret = "TODO"
		return ret;
	}


}
