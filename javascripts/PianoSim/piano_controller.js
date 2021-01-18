window.onload = function() {
    const notes = [];
    for(let i = 0; i< 11; i++){
        notes.push(new Note(i, 30));
    }
    const piano =  new PlayerPiano(notes);

    var button = document.createElement("BUTTON");
    var t = document.createTextNode("Click me");
    button.appendChild(t);
    document.body.appendChild(button);
    button.onclick = function(){
        piano.play();
    }
}