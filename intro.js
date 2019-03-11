


console.log("before welcome message")
function getWelcomeMsg() { 
console.log("inside welcome message") ;
 return "Welcome to my site!";
}


var welcome = getWelcomeMsg();
console.info(welcome);
console.log("after welcome message")
var summaryElement = document.getElementById(" summary");
console.info("summaryElement", summaryElement);
//summaryElement.style.color = "blue";





function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display = "none";
}

function showPage(page) {
    document.getElementById(page).style.display = "block";
}

