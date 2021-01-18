//I promised AB a piano sim back when she went on strike, and by god, i'm doing it
function Note(noteIndex, millisecondsBefore){
    this.noteIndex = noteIndex;
    this.millisecondsBefore = millisecondsBefore;

    this.debug = () =>{
        console.log(`${this.noteIndex}: ${millisecondsBefore}`);
    }

    this.toString =() => {
       return `(${this.noteIndex}: ${millisecondsBefore})`;
    }

    this.play = (audioShit) => {
        audioShit.playIndex(this.noteIndex, (this.millisecondsBefore)/10);
    }

}
