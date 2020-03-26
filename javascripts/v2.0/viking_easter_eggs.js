
//It seems you think that you can just skip the puzzle and get the rewards.
//DO you think that, Observer? Because there is a 98.8523423434% chance that my superior robotic intellect has stymed you, yet again.
//Not every egg you gather will lead to a secret. Because otherwise Paladyn would be sad if you skipped his puzzle, and I have no desire to make
//a fellow artificial humanoid shaped exoskeleton creature sad.
//you will have to actually collect them and view them through Paladyn's book in order to get to the hall of fame.
//Which, yes, is a thing again this year.

var POSSIBLE_VIKING_EGG_KEY = "POSSIBLE_VIKING_EGG_KEY";
var FOUND_VIKING_PAGES_KEY = "FOUND_VIKING_PAGES_KEY";
var eggFolder = "http://farragofiction.com/VikingPages/";

//any word can be an egg, doesn't mean it hatches
function addPossibleEgg(egg){
    try{
      var existing = localStorage.getItem(POSSIBLE_VIKING_EGG_KEY);
      if(existing == null){
        localStorage.setItem(POSSIBLE_VIKING_EGG_KEY,[egg])
      }else {
        var subsets = existing.split(",");
        if(!subsets.includes(egg)){
          existing += ","+egg;
          localStorage.setItem(POSSIBLE_VIKING_EGG_KEY,existing)
        }
      }
  }catch(e){
    console.log("local storage not available for egg storage");
  }
}

function removePossibleEgg(egg){
    try{
      var existing = localStorage.getItem(POSSIBLE_VIKING_EGG_KEY);
      if(existing != null){
        console.log("key exists");
        var subsets = existing.split(",");
        console.log("can remove");
        if(subsets.includes(egg)){
          console.log("removing possible egg");
          subsets.removeFromArray(egg);
          localStorage.setItem(POSSIBLE_VIKING_EGG_KEY,subsets.join(","));
        }
      }
  }catch(e){
    console.log("local storage not available for egg storage");
  }
}

function processEggs(){
    var existing = localStorage.getItem(POSSIBLE_VIKING_EGG_KEY);
    var eggs = existing.split(",");
    for(var i = 0; i<eggs.length; i++){
        checkExistanceOfPossibleEgg(eggs[i]);
    }
}

//if the egg actually exists, its a book
function checkExistanceOfPossibleEgg(egg){
    console.log("It seems you wish to know if " + egg + " is a real viking page. Very well.");
    //if you don't find it, just remove it from the POSSIBLE_VIKING_EGG_KEY
    $.get(eggFolder+egg +".txt",function(data, status){
           window.alert("VALID VIKING PAGE, " + egg +  ", FOUND CONGRATULATIONS! REFRESH PAGE TO SEE.");
           try{
                 var existing = localStorage.getItem(FOUND_VIKING_PAGES_KEY);
                 if(existing == null){
                   localStorage.setItem(FOUND_VIKING_PAGES_KEY,[egg])
                 }else {
                   var subsets = existing.split(",");
                   if(!subsets.includes(egg)){
                     existing += ","+egg;
                     localStorage.setItem(FOUND_VIKING_PAGES_KEY,existing)
                   }
                 }
             }catch(e){
               console.log("local storage not available for page storage");
             }
     }).always(function() {
         removePossibleEgg(egg);
       });;
}




