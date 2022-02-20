'use strict';
function addParagraph(){
    let point = document.createElement("li");

    let btn = document.createElement("button");
    let del = document.createTextNode("Remove");
    btn.appendChild(del);
    btn.addEventListener("click",delParagraph);

    let strike = document.createElement("button");
    let strText = document.createTextNode("Completed");
    strike.appendChild(strText);
    strike.addEventListener("click",complete);

    let strDel = document.createElement("button");
    let strDelText = document.createTextNode("Uncompleted");
    strDel.appendChild(strDelText);
    strDel.addEventListener("click", uncomplete);


    let priority = document.createElement("button");
    let prText = document.createTextNode("Priority");
    priority.appendChild(prText);
    priority.addEventListener("click",priorityPar);

    let x = document.getElementById("inp").value;
    let txt = document.createTextNode(x);
    point.appendChild(txt);

    let ol = document.getElementById("list");
    ol.appendChild(point);
    ol.appendChild(priority);
    ol.appendChild(strike);
    ol.appendChild(btn);
    document.getElementById("inp").value="";

    function priorityPar(){
        if(point.style.backgroundColor=="darkkhaki"){
            point.style.backgroundColor="";
        }else{
            point.style.backgroundColor="darkkhaki";
        }
    }

    let strikeTag = document.createElement("s");

    function complete(){
        strikeTag.appendChild(txt);
        point.appendChild(strikeTag);
        ol.removeChild(strike);
        ol.insertBefore(strDel, btn);
    }

    function uncomplete(){
        point.removeChild(strikeTag);
        point.appendChild(txt);
        ol.removeChild(strDel);
        ol.insertBefore(strike, btn);
                }

    function delParagraph(){
        ol.removeChild(point);
        ol.removeChild(priority);
        if(ol.contains(strike)==true){
            ol.removeChild(strike);
        }
        if(ol.contains(strDel)==true){
            ol.removeChild(strDel);
        }
        ol.removeChild(btn);
    }
}
