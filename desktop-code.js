var box;
var dirElm;
var codeElm;
var musicElm;
var titleElm;
var backElm;
var aboutbgimg;

var soundcloudLinks = [   'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/673107488&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                        , 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/556172268&color=%232a5e80&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                        , 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/504203490&color=%232a5e80&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                        , 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319972959&color=%232a5e80&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                      ];

window.onload = init;

function init(){
    box = document.getElementsByClassName("big-box")[0];
    box.style.height = box.offsetWidth+"px";
    dirElm = document.getElementById("dir"); 
    codeElm = document.getElementById("code"); 
    musicElm = document.getElementById("music"); 
    titleElm = document.getElementById("title"); 
    aboutElm = document.getElementById("about"); 
    aboutbgimg = document.getElementById("about-img");
    backElm = document.getElementById("back");
    
    var currentstate = "dir";
    initmusic();

    document.getElementById("about-li").addEventListener('click', switchToAbout, false);
    document.getElementById("code-li").addEventListener('click', switchToCode, false);
    document.getElementById("music-li").addEventListener('click', switchToMusic, false);
    titleElm.addEventListener('click', temp, false);
    backElm.addEventListener('click', switchToDir, false);
}

function initmusic()
{
    for (l in soundcloudLinks)
    {
        elm = document.createElement("iframe");
        elm.setAttribute("class", "sc");
        elm.setAttribute("height", "300");
        elm.setAttribute("scrolling", "no");
        elm.setAttribute("frameborder", "no");
        elm.setAttribute("src", soundcloudLinks[l]);
        musicElm.appendChild(elm);
    }
}

function temp()
{
    alert(offset(titleElm).top + "->" + offset(document.getElementById("title_pos")).top);
}

function switchToAbout ()
{
    dirElm.style.transform = "translate(0,200%)";
    titleElm.style.transform = "translate(0,"+offset(document.getElementById("title_pos")).top+"px)";
    aboutbgimg.style.opacity = 1;
    aboutElm.style.opacity = 1;

    backElm.style.visibility = "visible";
    backElm.style.color = "white";
    backElm.style.opacity = 1;

    dirElm.style.zIndex = 1;
    aboutElm.style.zIndex = 2;

    currentstate = "about";
}

function switchToCode()
{
    dirElm.style.transform = "translate(0,200%)";
    codeElm.style.opacity = 1;

    document.getElementById("github_link").style.opacity = 1;
    document.getElementById("github_link").style.display = "block";

    backElm.style.visibility = "visible";
    backElm.style.color = "black";
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
    backElm.style.color = "black";
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
            aboutElm.style.zIndex = 1;
            aboutElm.style.opacity = 0;
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

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

//V2hlbiBJIHRha2UgeW91IHRvIHRoZSBWYWxsZXksIHlvdeKAmWxsIHNlZSB0aGUgYmx1ZSBoaWxscyBvbiB0aGUgbGVmdCBhbmQgdGhlIGJsdWUgaGlsbHMgb24gdGhlIHJpZ2h0LCB0aGUgcmFpbmJvdyBhbmQgdGhlIHZpbmV5YXJkcyB1bmRlciB0aGUgcmFpbmJvdyBsYXRlIGluIHRoZSByYWlueSBzZWFzb24sIGFuZCBtYXliZSB5b3XigJlsbCBzYXksIOKAnFRoZXJlIGl0IGlzLCB0aGF04oCZcyBpdCHigJ0gQnV0IEnigJlsbCBzYXkuIOKAnEEgbGl0dGxlIGZhcnRoZXIu4oCdIFdl4oCZbGwgZ28gb24sIEkgaG9wZSwgYW5kIHlvdeKAmWxsIHNlZSB0aGUgcm9vZnMgb2YgdGhlIGxpdHRsZSB0b3ducyBhbmQgdGhlIGhpbGxzaWRlcyB5ZWxsb3cgd2l0aCB3aWxkIG9hdHMsIGEgYnV6emFyZCBzb2FyaW5nIGFuZCBhIHdvbWFuIHNpbmdpbmcgYnkgdGhlIHNoYWRvd3Mgb2YgYSBjcmVlayBpbiB0aGUgZHJ5IHNlYXNvbiwgYW5kIG1heWJlIHlvdeKAmWxsIHNheSwg4oCcTGV04oCZcyBzdG9wIGhlcmUsIHRoaXMgaXMgaXQh4oCdIEJ1dCBJ4oCZbGwgc2F5LCDigJxBIGxpdHRsZSBmYXJ0aGVyIHlldC7igJ0gV2XigJlsbCBnbyBvbiwgYW5kIHlvdeKAmWxsIGhlYXIgdGhlIHF1YWlsIGNhbGxpbmcgb24gdGhlIG1vdW50YWluIGJ5IHRoZSBzcHJpbmdzIG9mIHRoZSByaXZlciwgYW5kIGxvb2tpbmcgYmFjayB5b3XigJlsbCBzZWUgdGhlIHJpdmVyIHJ1bm5pbmcgZG93bndhcmQgdGhyb3VnaCB0aGUgd2lsZCBoaWxscyBiZWhpbmQsIGJlbG93LCBhbmQgeW914oCZbGwgc2F5LCDigJxJc27igJl0IHRoYXQgdGhlIFZhbGxleT/igJ0gQW5kIGFsbCBJIHdpbGwgYmUgYWJsZSB0byBzYXkgaXMg4oCcRHJpbmsgdGhpcyB3YXRlciBvZiB0aGUgc3ByaW5nLCByZXN0IGhlcmUgYXdoaWxlLCB3ZSBoYXZlIGEgbG9uZyB3YXkgeWV0IHRvIGdvIGFuZCBJIGNhbuKAmXQgZ28gd2l0aG91dCB5b3Uu
