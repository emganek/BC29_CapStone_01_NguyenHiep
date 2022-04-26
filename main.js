// HEADER------------------------------------
window.onscroll = function(){
    if(window.scrollY > 100){
        document.getElementById("header").classList.add("header__scrolling")
    }
    else{
        document.getElementById("header").classList.remove("header__scrolling")
    }
}

// DARK THEME---------------------------------
document.getElementById("toggler__dark").onclick = function(){
    document.getElementById("toggler__dark").style.display = "none";
    document.getElementById("toggler__bright").style.display = "inline-block";
    document.getElementById("myBody").classList.add("darkTheme");
}

// BRIGHT THEME------------------------------
document.getElementById("toggler__bright").onclick = function(){
    document.getElementById("toggler__bright").style.display = "none";
    document.getElementById("toggler__dark").style.display = "inline-block";
    document.getElementById("myBody").classList.remove("darkTheme");

}