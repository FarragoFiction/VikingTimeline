
function PlayerPiano(notes){

    this.play = async () => {
        for(let i = 0; i< notes.length; i++){
            await this.playNote(notes[i]);
        }
    }

    this.timeout =(ms) =>{
             return new Promise(resolve => setTimeout(resolve, ms));
    }

    this.playNote = async (note) => {
        console.log("before" + new Date().getTime());
        await this.timeout(note.millisecondsBefore);
        console.log("after" + new Date().getTime());
        note.debug();
    }

}