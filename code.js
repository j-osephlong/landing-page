var box;
var dirElm;
var codeElm;
var musicElm;
var titleElm;
var backElm;
var aboutbgimg;

window.onload = init;

function init(){
    box = document.getElementsByClassName("big-box")[0];
    dirElm = document.getElementById("dir"); 
    codeElm = document.getElementById("code"); 
    musicElm = document.getElementById("music"); 
    titleElm = document.getElementById("title"); 
    aboutbgimg = document.getElementById("about-img");
    backElm = document.getElementById("back");
    var currentstate = "dir";

    document.getElementById("about-li").addEventListener('click', switchToAbout, false);
    document.getElementById("code-li").addEventListener('click', switchToCode, false);
    document.getElementById("music-li").addEventListener('click', switchToMusic, false);
    backElm.addEventListener('click', switchToDir, false);
}

function switchToAbout ()
{
    dirElm.style.transform = "translate(0,200%)";
    titleElm.style.transform = "translate(0,225%)";
    aboutbgimg.style.opacity = 1;

    backElm.style.visibility = "visible";
    backElm.style.opacity = 1;

    dirElm.style.zIndex = 1;

    currentstate = "about";
}

function switchToCode()
{
    dirElm.style.transform = "translate(0,200%)";
    codeElm.style.opacity = 1;

    document.getElementById("github_link").style.opacity = 1;
    document.getElementById("github_link").style.display = "block";

    backElm.style.visibility = "visible";
    backElm.style.opacity = 1;

    dirElm.style.zIndex = 1;
    codeElm.style.zIndex = 2;

    currentstate = "code";
}

function switchToMusic()
{
    box.style.width = "600px";
    dirElm.style.transform = "translate(0,200%)";
    musicElm.style.opacity = 1;

    document.getElementById("soundcloud_link").style.opacity = 1;
    document.getElementById("soundcloud_link").style.display = "block";

    backElm.style.visibility = "visible";
    backElm.style.opacity = 1;

    dirElm.style.zIndex = 1;
    musicElm.style.zIndex = 2;

    currentstate = "music";
}

function switchToDir()
{
    switch(currentstate)
    {
        case "about":
            titleElm.style.transform = "translate(0,0%)";
            aboutbgimg.style.opacity = 0;
            break;
        case "code":
            codeElm.style.opacity = 0;
            codeElm.style.zIndex = 1;
            document.getElementById("github_link").style.opacity = 0;
            document.getElementById("github_link").style.display = "none";
            break;
        case "music":
            musicElm.style.opacity = 0;
            musicElm.style.zIndex = 1;
            box.style.width = "410px";
            document.getElementById("soundcloud_link").style.opacity = 0;
            document.getElementById("soundcloud_link").style.display = "none";
            break;
    }
    // musicElm.style.opacity = 0;
    dirElm.style.transform = "translate(0,0%)";
    dirElm.style.zIndex = 2;

    backElm.style.opacity = 0;
    backElm.style.visibility = "hidden";    
}

var lastChar = "";
var presses = 0;

document.onkeypress = function(evt) {
    if (currentstate != "about")
        return;
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    
    if (charStr == "e")
        presses = 1;
    else if (charStr == "m" && lastChar == "e")
        presses++;
    else if (charStr == "i" && lastChar == "m")
        presses++;
    else if (charStr == "l" && lastChar == "i")
        presses++;
    else if (charStr == "y" && lastChar == "l" && presses == 4)
        alert("heart emoji");

    lastChar = charStr;
};