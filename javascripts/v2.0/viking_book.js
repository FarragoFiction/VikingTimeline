//it seems that Paladyn requires a journal. A superior mind such as my own can easily handle this.

var folder = "VikingPages/";
var currentLeftPage = 0;
var tableOfContents = ["vikingintro.txt"];
var secretTOC = [];
var leftPageDiv;
var rightPageDiv;
var leftNumDiv;
var rightNumDiv;
window.onload = function() {
	loadNavbar();
	processEggs();
	loadSecretTableOfContents();
	leftPageDiv = document.getElementById("leftpage");
    rightPageDiv = document.getElementById("rightpage");
	leftNumDiv = document.getElementById("leftnumber");
	rightNumDiv = document.getElementById("rightnumber");
    hookUpKeyboardControls();
	displayPages(currentLeftPage);
}

function loadSecretTableOfContents(){
    try{
       var found = localStorage.getItem(FOUND_VIKING_PAGES_KEY);
       if(found != null){
         secretTOC=found.split(",");
       }
   }catch(e){
       console.log("local storage not available for egg storage");
     }
}

//https://www.codespeedy.com/detect-arrow-key-press-in-javascript/
function hookUpKeyboardControls(){
    document.onkeydown = function(event) {
        switch (event.keyCode) {
           case 37:
                goBackPage();
              break;
           case 39:
                goForwardPage();
              break;
        }
        };
}

function goBackPage(){
    currentLeftPage += -2;
    if(currentLeftPage <0){
        currentLeftPage = 0;
    }
    displayPages(currentLeftPage);
}

//forward ends in the secrets.
function goForwardPage(){
currentLeftPage += 2;
    if(currentLeftPage > tableOfContents.length + secretTOC.length){
        currentLeftPage = tableOfContents.length + secretTOC.length;
    }
    displayPages(currentLeftPage);
}



//document.getElementById("p1").innerHTML = "New text!";

function displayTableOfContents(){
    var html = "<h1>Table of Contents</h1><ol>";
    html += "<li class='clickableTOC' onclick='displayPages(0)'>Table of Contents</li>";
    for(var i = 0; i<tableOfContents.length; i++){
        html += "<li class='clickableTOC' onclick='displayPages(" + (i+1) + ")'>" + tableOfContents[i] +"</li>";
    }
    for(var i = 0; i<secretTOC.length; i++){
        html += "<li class='clickableTOC' onclick='displayPages(" + (tableOfContents.length+i+1) + ")'>" + secretTOC[i] +"</li>";
    }
    html += "</ol>";
    leftPageDiv.innerHTML = html;
}

function turnNewLinesToBreaks(text){
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

function getTruePageLocation(num){
    var pageLocation;
    if(num-1 >= tableOfContents.length){
        console.log("it is a secrte page" + num-1-tableOfContents.length);
            pageLocation = eggFolder + secretTOC[num-1-tableOfContents.length];
    }else{
        pageLocation = folder + tableOfContents[num-1];
    }
    console.log("page location i want is " + pageLocation);
    return pageLocation;
}

function displayPages(num){
    if(num % 2 != 0 && num != 0){
        console.log("AB: look, i like your moxy kid, but the left page is always odd. ");
        num += -1;
    }
    console.log("It seems you have requested page "+num+".");
    if(num == 0){
        console.log("It seems this means it should be the table of contents.");
        displayTableOfContents();
    }else if(num-1 < tableOfContents.length+secretTOC.length){
        var pageLocation = getTruePageLocation(num);
        $.get(pageLocation,function(data, status){
            leftPageDiv.innerHTML = turnNewLinesToBreaks(data);
        });
    }else{
            leftPageDiv.innerHTML = "<h1>THE END</h1>";
    }
    num++;
    leftNumDiv.innerHTML = ""+num;

    var pageLocation = getTruePageLocation(num);
    if(num-1 < tableOfContents.length+secretTOC.length){
        $.get(pageLocation,function(data, status){
            rightPageDiv.innerHTML = turnNewLinesToBreaks(data);
        });
    }else{
                rightPageDiv.innerHTML = "<h1>THE END</h1>";
    }
    num++;
    rightNumDiv.innerHTML = ""+num;


}

