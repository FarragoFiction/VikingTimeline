//I promised AB a piano sim back when she went on strike, and by god, i'm doing it
function Note(noteIndex, millisecondsBefore){
    this.noteIndex = noteIndex;
    this.millisecondsBefore = millisecondsBefore;

    this.debug = () =>{
        console.log(`${this.noteIndex}: ${millisecondsBefore}`);
    }

    this.play = (audioShit, relativeTime) => {
        console.log("want to play sound at" + relativeTime, "plus ", this.millisecondsBefore);
        audioShit.playIndex(this.noteIndex, (relativeTime + this.millisecondsBefore)/1000);
    }

}
