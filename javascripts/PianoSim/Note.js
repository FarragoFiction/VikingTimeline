//I promised AB a piano sim back when she went on strike, and by god, i'm doing it
function Note(letter, millisecondsBefore){
    this.letter = letter;
    this.millisecondsBefore = millisecondsBefore;

    this.debug = () =>{
        console.log(`${letter}: ${millisecondsBefore}`);
    }

}
