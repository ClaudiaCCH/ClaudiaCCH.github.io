


console.log("before welcome message")
function getWelcomeMsg() {
    console.log("inside welcome message");
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

function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    console.info(links);
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = clickOnMenuItem;
    }
}


function clickOnMenuItem() {
    console.warn("clicked on menu", this);
    hideAllPages();

    var pageId = this.getAttribute("data-page")
    console.warn({ pageId });
    showPage(pageId);
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
}

initMenu();
function showSkills(skills) {
    skills.sort(function(a, b){
        return b.endorsements - a.endorsements;
    });
    
    var htmlSkills = skills.map(function(skill) {
        var endorsedby = skill.endorsedBy ? " - " + skill.endorsedBy : "";
        var endorsements = ` <span class="endorsement">(${skill.endorsements}${endorsedby})</span>`;
        return "<li>" + skill.name.toUpperCase() + endorsements + "</li>";
    });

    var ul = document.querySelector("#skills-page ul");
    ul.innerHTML = htmlSkills.join("");
}   

hideAllPages();
showPage("skills-page");


// TODO: load skills.json and pass them to showSkills
console.log('1 before loading');
fetch('data/skills.json')
  .then(function(response) {
      console.info('2 loaded skills.json', response)
    return response.json();
  })
  .then(function(skills) {
    console.log('3 skills', skills);
    showSkills(skills);
  });
console.log('4 after load');
