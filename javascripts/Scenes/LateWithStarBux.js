function LateWithStarBux(session){
	this.session=session;
	this.canRepeat = true; //the man is always late. always.
	this.playerList = [];  //what players are already in the medium when i trigger?

	this.trigger = function(playerList){
		this.playerList = playerList;
        return true;
	}

	this.renderContent = function(div){
		div.append("<br> <img src = 'images/sceneIcons/paladyn_icon.png'>"+this.content());
	}

	this.content = function(){
		return 'hello world';
	}


}
