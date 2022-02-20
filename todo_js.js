'use strict';
        function addParagraph(){
            let point = document.createElement("li");
            let deleteButton = document.createElement("button");
            let deleteText = document.createTextNode("remove");
            deleteButton.appendChild(deleteText);
            deleteButton.addEventListener("click", deletePoint);

            let strike = document.createElement("button");
            let strikeText = document.createTextNode("completed");
            strike.appendChild(strikeText);
            strike.addEventListener("click", complete);

            let deleteStrike = document.createElement("button");
            let deleteStrikeText = document.createTextNode("uncompleted");
            deleteStrike.appendChild(deleteStrikeText);
            deleteStrike.addEventListener("click", uncomplete);

            let priority = document.createElement("button");
            let priorityText = document.createTextNode("priority");
            priority.appendChild(priorityText);
            priority.addEventListener("click", priorityPoint);

            let inp = document.getElementById("inp").value;
            let text = document.createTextNode(inp);
            point.appendChild(text);

            let ul = document.getElementById("list");
            ul.appendChild(point);
            ul.appendChild(priority);
            ul.appendChild(strike);
            ul.appendChild(deleteButton);
            document.getElementById("inp").value = "";

            function priorityPoint(){
                if(point.style.backgroundColor=="darkkhaki"){
                    point.style.backgroundColor="";
                }else{
                    point.style.backgroundColor="darkkhaki";
                }
            }

            let strikeTag = document.createElement("s");

            function complete(){
                strikeTag.appendChild(text);
                point.appendChild(strikeTag);
                ul.removeChild(strike);
                ul.insertBefore(deleteStrike, deleteButton);
            }

            function uncomplete(){
                point.removeChild(strikeTag);
                point.appendChild(text);
                ul.removeChild(deleteStrike);
                ul.insertBefore(strike, deleteButton);
            }

            function deletePoint(){
                ul.removeChild(point);
                ul.removeChild(priority);
                if(ul.contains(strike)==true){
                    ul.removeChild(strike);
                }
                if(ul.contains(deleteStrike)==true){
                    ul.removeChild(deleteStrike);
                }
                ul.removeChild(deleteButton);
            }
        }