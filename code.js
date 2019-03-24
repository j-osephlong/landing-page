(function(window, document, undefined){

// code that should be taken care of right away

    window.onload = init;

    function init(){
        var dirElm = document.getElementById("dir"); 
        var codeElm = document.getElementById("code"); 
        var titleElm = document.getElementById("title"); 
        var aboutbgimg = document.getElementById("about-img");
        dirElm.style.transition = "transform 1s";
        titleElm.style.transition = "transform 1s";
        aboutbgimg.style.transition = "opacity 1s";
        codeElm.style.transition = "opacity 1s";

        var currentstate = "dir";

        document.getElementById("about-li").addEventListener('click', 
            function() 
            {
                titleElm.style.zIndex = 3;
                dirElm.style.transform = "translate(0,200%)";
                titleElm.style.transform = "translate(0,225%)";

                currentstate = "about";
                aboutbgimg.style.opacity = 1;
            }
            , false);

        document.getElementById("code-li").addEventListener('click', 
            function() 
            {
                dirElm.style.transform = "translate(0,200%)";
                codeElm.style.opacity = 1;
                currentstate = "code";
            }
            , false);
        document.getElementById("music-li").addEventListener('click', 
            function() 
            {
                dirElm.style.transform = "translate(0,200%)";
                currentstate = "music";
            }
            , false);
    }


})(window, document, undefined);