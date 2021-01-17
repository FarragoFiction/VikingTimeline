window.onload = function() {
    const notes = [ new Note("D", 100), new Note("E", 1000), new Note("A", 2000), new Note("E", 3000), new Note("D", 50)];
    const piano =  new PlayerPiano(notes);

    var button = document.createElement("BUTTON");
    var t = document.createTextNode("Click me");
    button.appendChild(t);
    document.body.appendChild(button);
    button.onclick = function(){
        piano.play();
    }
}