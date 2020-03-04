//it seems that Paladyn requires a journal. A superior mind such as my own can easily handle this.

var folder = "VikingPages/";
var currentLeftPage = 0;
var tableOfContents = ["abishappy.txt", "test1.txt", "test2.txt"];
var leftPageDiv;
var rightPageDiv;
var leftNumDiv;
var rightNumDiv;
window.onload = function() {
	loadNavbar();
	leftPageDiv = document.getElementById("leftpage");
    rightPageDiv = document.getElementById("rightpage");
	leftNumDiv = document.getElementById("leftnumber");
	rightNumDiv = document.getElementById("rightnumber");
    hookUpKeyboardControls();
	displayPages(currentLeftPage);
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

function goForwardPage(){
currentLeftPage += 2;
    if(currentLeftPage > tableOfContents.length){
        currentLeftPage = tableOfContents.length;
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
    html += "</ol>";
    leftPageDiv.innerHTML = html;
}

function turnNewLinesToBreaks(text){
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
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
    }else if(num-1 < tableOfContents.length){
        $.get(folder+tableOfContents[num-1],function(data, status){
            leftPageDiv.innerHTML = turnNewLinesToBreaks(data);
        });
    }else{
            leftPageDiv.innerHTML = "<h1>THE END</h1>";
    }
    num++;
    leftNumDiv.innerHTML = ""+num;
    if(num-1 < tableOfContents.length){
            $.get(folder+tableOfContents[num-1],function(data, status){
                rightPageDiv.innerHTML = turnNewLinesToBreaks(data);
            });
    }else{
                rightPageDiv.innerHTML = "<h1>THE END</h1>";
    }
    num++;
    rightNumDiv.innerHTML = ""+num;


}

