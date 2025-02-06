window.document.querySelector(".menu").addEventListener("click", function(){

        if(document.querySelector("header nav").style.display == 'flex' ){
            document.querySelector("header nav").style.display = 'none' 
        } else {
            document.querySelector("header nav").style.display = 'flex'
        }
    });
