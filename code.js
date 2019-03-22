(function(window, document, undefined){

// code that should be taken care of right away

    window.onload = init;

    function init(){
        document.getElementById("about-li").addEventListener('click', 
            function() 
            {
                document.getElementById("dir").style.visibility = "hidden";
            }
            , false);

        document.getElementById("code-li").addEventListener('click', 
            function() 
            {
                document.getElementById("dir").style.visibility = "hidden";
            }
            , false);
        document.getElementById("music-li").addEventListener('click', 
            function() 
            {
                document.getElementById("dir").style.visibility = "hidden";
            }
            , false);
    }

})(window, document, undefined);