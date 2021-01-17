//I promised AB a piano sim back when she went on strike, and by god, i'm doing it
function Note(letter, millisecondsBefore){
    this.letter = letter;
    this.millisecondsBefore = millisecondsBefore;

    this.debug = () =>{
        console.log(`${letter}: ${millisecondsBefore}`);
    }

    this.play = (audioShit, relativeTime) => {
        //TODO map letter to index
        console.log("want to play sound at" + relativeTime, "plus ", millisecondsBefore);
        audioShit.playIndex(0, (relativeTime + this.millisecondsBefore)/1000);
    }

}
