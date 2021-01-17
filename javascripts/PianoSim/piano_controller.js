window.onload = function() {
    window.alert("hello jr");
    const notes = [ new Note("D", 100), new Note("E", 1000), new Note("A", 2000), new Note("E", 3000), new Note("D", 50)];
    const piano =  new PlayerPiano(notes);
    piano.play();
}