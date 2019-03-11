

console.info("Name:");
console.info(name);
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


function getColor() {
    var date = new Date();
    console.log(date.getMinutes());

    if (date.getMinutes() > 8) {
        return "red";
    } else
    
        return "green";
}
var color = getColor();





// First example 

function hideHomePage() {
    var el = document.getElementById("home-page");
    el.style.display = "none";
}

function showSkillsPage() {
    document.getElementById("skills-page").style.display = "block"
}
function clickOnSkills(){
       //hideHomePage();
       //showSkillsPage();
       hidePage("home-page");
       hidePage("languages-page");
       hidePage("about-page");
       showPage("skills-page");
}      

// First example -end


function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display = "none";
}

function showPage(page) {
    document.getElementById(page).style.display = "block";
}

