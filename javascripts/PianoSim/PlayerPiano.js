
function PlayerPiano(notes){
    const audioShit = new AudioShit();


    this.play =  () => {
         audioShit.init(this.beginPlaying);
    }

    //it can be all at once cuz its using AudioShit
    this.beginPlaying = () => {
        let time = 0;
         for(let i = 0; i< notes.length; i++){
            this.playNote(notes[i], time);
            time += notes[i].millisecondsBefore;
        }
    }

    this.timeout =(ms) =>{
             return new Promise(resolve => setTimeout(resolve, ms));
    }

    this.playNote =  (note, time) => {
        note.play(audioShit, time);
    }

}