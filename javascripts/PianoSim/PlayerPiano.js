
function PlayerPiano(){
    this.audioShit = new AudioShit();
    this.notes;


    this.play =  (notes) => {
        this.notes = notes;
         this.audioShit.init(this.beginPlaying);
    }

    //it can be all at once cuz its using AudioShit
    this.beginPlaying = () => {
         for(let i = 0; i< this.notes.length; i++){
            this.playNote(this.notes[i]);
        }
    }

    this.timeout =(ms) =>{
             return new Promise(resolve => setTimeout(resolve, ms));
    }

    this.playNote =  (note, time) => {
        note.play(this.audioShit);
    }

}