'use strict';
if(localStorage.getItem('style') == 'Styles/amber.css'){
    document.getElementById("theme").href = "Styles/amber.css";
}
if(localStorage.getItem('style') == 'Styles/emerald.css'){
    document.getElementById("theme").href = "Styles/emerald.css";
}
if(localStorage.getItem('style') == 'Styles/sapphire.css'){
    document.getElementById("theme").href = "Styles/sapphire.css";
}
if(localStorage.getItem('style') == 'Styles/ruby.css'){
    document.getElementById("theme").href = "Styles/ruby.css";
}

let showBlock = () =>{
    if(document.querySelector('#buttons').style.display == 'none'){
        document.querySelector('#buttons').style.display = 'block';
    }else{
        document.querySelector('#buttons').style.display = 'none';
    }
}

function amber(){
    let amber = document.getElementById("theme").href = "Styles/amber.css";
    localStorage.setItem('style',amber);
}

function emerald(){
    let emerald = document.getElementById("theme").href = "Styles/emerald.css";
    localStorage.setItem('style',emerald);
}

function sapphire(){
    let sapphire = document.getElementById("theme").href = "Styles/sapphire.css";
    localStorage.setItem('style',sapphire);
}

function ruby(){
    let ruby = document.getElementById("theme").href = "Styles/ruby.css";
    localStorage.setItem('style',ruby);
}