function AudioShit(){
//https://www.html5rocks.com/en/tutorials/webaudio/intro/
window.AudioContext = window.AudioContext || window.webkitAudioContext;
this.context = new AudioContext();
this.callback;
this.bufferLIst;

    this.playIndex = (index, time) =>{
        this.playSound(this.bufferList[index], time);
    }

    this.playSound  =(buffer, time) => {
      var source = context.createBufferSource(); // creates a sound source
      source.buffer = buffer;                    // tell the source which sound to play
      source.connect(context.destination);       // connect the source to the context's destination (the speakers)
      source.start(time);                           // play the source now
                                               // note: on older systems, may have to use deprecated noteOn(time);
    }


 this.init = (callback) =>{
 this.callback = callback;
  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
      'javascripts/PianoSim/Audio/piano_middle_C.mp3',
      'javascripts/PianoSim/Audio/piano_C_sharp.mp3',
      'javascripts/PianoSim/Audio/piano_D.mp3',
      'javascripts/PianoSim/Audio/piano_D_sharp.mp3',
      'javascripts/PianoSim/Audio/piano_E.mp3',
      'javascripts/PianoSim/Audio/piano_F.mp3',
      'javascripts/PianoSim/Audio/piano_F_sharp.mp3',
      'javascripts/PianoSim/Audio/piano_G.mp3',
      'javascripts/PianoSim/Audio/piano_G_sharp.mp3',
      'javascripts/PianoSim/Audio/piano_A.mp3',
      'javascripts/PianoSim/Audio/piano_A_sharp.mp3',

    ],
    this.finishedLoading
    );

  bufferLoader.load();
}

this.finishedLoading =(bufferList) => {
    this.bufferList = bufferList;
  // Create two sources and play them both together.
  var source1 = context.createBufferSource();
  var source2 = context.createBufferSource();
  source1.buffer = bufferList[0];

  source1.connect(context.destination);
  //source1.start(0);
  this.callback();
}

}


function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}

BufferLoader.prototype.load = function() {
  for (var i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
}
