'use strict';
function addPoint(){
    let point = document.createElement("li");
    if(document.getElementById("inp").value == ""){
        point.appendChild(document.createTextNode("empty"));
    }else{
        point.appendChild(document.createTextNode(document.getElementById("inp").value));
    }

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.title = "delete point";
    deleteButton.className = "button is-small is-dark";
    deleteButton.style.marginLeft = "3px";
    deleteButton.addEventListener("click", deletePoint);

    let completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeButton.title = "completed point";
    completeButton.className = "button is-small is-dark";
    completeButton.style.marginLeft = "3px";
    completeButton.addEventListener("click", completePoint);

    let priorityButton = document.createElement("button");
    priorityButton.innerHTML = '<i class="fa-solid fa-exclamation"></i>';
    priorityButton.title = "priority point";
    priorityButton.className = "button is-small is-dark";
    priorityButton.style.marginLeft = "3px";
    priorityButton.addEventListener("click", priorityPoint);

    let editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    editButton.title = "edit point";
    editButton.className = "button is-small is-dark";
    editButton.style.marginLeft = "3px";
    editButton.addEventListener("click", editPoint);

    let weekDay = document.getElementById("weekDay").value;
    let ol;
    switch(weekDay){
        case '1':
            ol = document.getElementById("mondaylist");
            break;
        case '2':
            ol = document.getElementById("tuesdaylist");
            break;
        case '3':
            ol = document.getElementById("wednesdaylist");
            break;
        case '4':
            ol = document.getElementById("thursdaylist");
            break;
        case '5':
            ol = document.getElementById("fridaylist");
            break;
        case '6':
            ol = document.getElementById("saturdaylist");
            break;
        case '7':
            ol = document.getElementById("sundaylist");
            break;
        case '8':
            ol = document.getElementById("noteslist");
            break;
    }
                
    ol.appendChild(point);
    point.appendChild(editButton);
    point.appendChild(priorityButton);
    point.appendChild(completeButton);
    point.appendChild(deleteButton);
    document.getElementById("inp").value="";

    function priorityPoint(){
        if(point.style.backgroundColor == "dimgrey"){
            point.style.backgroundColor = "";
        }else{
            point.style.backgroundColor="dimgrey";
        }
    }

    function editPoint(){
        editButton.style.display = "none";
        priorityButton.style.display = "none";
        completeButton.style.display = "none";
        deleteButton.style.display = "none";
        let editInput = document.createElement("input");
        editInput.style.marginLeft = "3px";
        let editInputButton = document.createElement("button");
        editInputButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        editInputButton.className = "button is-small is-dark";
        editInputButton.style.marginLeft = "3px";
        editInputButton.addEventListener("click", confirmEdit);
        let editCloseButton = document.createElement("button");
        editCloseButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        editCloseButton.className = "button is-small is-dark";
        editCloseButton.style.marginLeft = "3px";
        editCloseButton.addEventListener("click", editClose);
        point.appendChild(editInput);
        point.appendChild(editInputButton);
        point.appendChild(editCloseButton);

        function confirmEdit(){
            let editText = editInput.value;
            if(editText == ""){
                editText = "empty";
            }
            while(point.firstChild){
                point.removeChild(point.firstChild);
            }
            point.appendChild(document.createTextNode(editText));
            point.appendChild(editButton);
            point.appendChild(priorityButton);
            point.appendChild(completeButton);
            point.appendChild(deleteButton);
            editButton.style.display = "inline";
            priorityButton.style.display = "inline";
            completeButton.style.display = "inline";
            deleteButton.style.display = "inline";
        }

        function editClose(){
            editButton.style.display = "inline";
            priorityButton.style.display = "inline";
            completeButton.style.display = "inline";
            deleteButton.style.display = "inline";
            point.removeChild(editInput);
            point.removeChild(editInputButton);
            point.removeChild(editCloseButton);
        }
    }

    function completePoint(){
        if(point.style.textDecoration == "line-through"){
            point.style.textDecoration = "";
            point.style.color = "white";
        }else{
            point.style.textDecoration = "line-through";
            point.style.color = "black";
        }
    }

    function deletePoint(){
        let result = confirm("are you sure?");
        if(result == true){
            ol.removeChild(point);
        }
    }
}

function deleteList(name){
    let result = confirm("are you sure?");
    if(result == true){
        switch(name){
            case "deleteMonday":
                let monday = document.getElementById("mondaylist");
                while(monday.firstChild){
                    monday.removeChild(monday.firstChild);
                }
                break;
            case "deleteTuesday":
                let tuesday = document.getElementById("tuesdaylist");
                while(tuesday.firstChild){
                    tuesday.removeChild(tuesday.firstChild);
                }
                break;
            case "deleteWednesday":
                let wednesday = document.getElementById("wednesdaylist");
                while(wednesday.firstChild){
                    wednesday.removeChild(wednesday.firstChild);
                }
                break;
            case "deleteThursday":
                let thursday = document.getElementById("thursdaylist");
                while(thursday.firstChild){
                    thursday.removeChild(thursday.firstChild);
                }
                break;
            case "deleteFriday":
                let friday = document.getElementById("fridaylist");
                while(friday.firstChild){
                    friday.removeChild(friday.firstChild);
                }
                break;
            case "deleteSaturday":
                let saturday = document.getElementById("saturdaylist");
                while(saturday.firstChild){
                    saturday.removeChild(saturday.firstChild);
                }
                break;
            case "deleteSunday":
                let sunday = document.getElementById("sundaylist");
                while(sunday.firstChild){
                    sunday.removeChild(sunday.firstChild);
                }
                break;
            case "deleteNotes":
                let notes = document.getElementById("noteslist");
                while(notes.firstChild){
                    notes.removeChild(notes.firstChild);
                }
                break;
        }
    }
}
            
function deleteAll(){
    let result = confirm("are you sure?");
    if(result == true){
        let ol = document.getElementsByTagName("ol");
        for(let i = 0; i < ol.length; i++){
            while(ol[i].firstChild){
                ol[i].removeChild(ol[i].firstChild);
            }
        }
    }
}
