var english = document.getElementById('en_click'),
    french = document.getElementById('fr_click'),
    fr_text = document.querySelectorAll('#p__booster__en'),
    en_text = document.querySelectorAll('#p__booster__fr'),

    nb_en = en_text.length,
    nb_fr = fr_text.length; 

    english.addEventListener('click', function() {
        langue(english,french);
    }, false);

    french.addEventListener('click', function() {
        langue(french,english);
    }, false);

    function langue(langueOn,langueOff){
        if (!langueOn.classList.contains('current_lang')) {
            langueOn.classList.toggle('current_lang');
            langueOff.classList.toggle('current_lang');

    }
    if(langueOn.innerHTML == 'ENG'){
        afficher(en_txt, nb_en);
        cacher(fr_txt, nb_fr);
    }
      
    else if(langueOn.innerHTML == 'Fr'){
        afficher(fr_txt, nb_fr);
        cacher(en_txt, nb_en);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(french,english);
}
init();




var deadline = new Date("oct 23, 2022 17:37:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
     
    document.querySelector("#div__day" ).innerHTML = days;
    document.querySelector("#div__hours").innerHTML = hours;
    document.querySelector("#div__minute").innerHTML = minutes;
    document.querySelector("#div__seconde").innerHTML = seconds;



    if (t < 0) {
        clearInterval(x);
        document.querySelector(".div__periode").innerHTML = "EXPIRED";
    }
}, 1000);