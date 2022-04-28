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
        editButton.disabled = true;
        priorityButton.disabled = true;
        completeButton.disabled = true;
        deleteButton.disabled = true;
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
            editButton.disabled = false;
            priorityButton.disabled = false;
            completeButton.disabled = false;
            deleteButton.disabled = false;
        }

        function editClose(){
            editButton.disabled = false;
            priorityButton.disabled = false;
            completeButton.disabled = false;
            deleteButton.disabled = false;
            point.removeChild(editInput);
            point.removeChild(editInputButton);
            point.removeChild(editCloseButton);
        }
    }

    function completePoint(){
        if(point.style.textDecoration == "line-through"){
            point.style.textDecoration = "";
        }else{
            point.style.textDecoration = "line-through";
        }
    }

    function deletePoint(){
        let result = confirm("are you sure?");
        if(result == true){
            ol.removeChild(point);
        }
    }
}

function deleteMondayList(){
    let result = confirm("are you sure?");
    if(result == true){
        let ol = document.getElementById("mondaylist");
        while(ol.firstChild){
            ol.removeChild(ol.firstChild);
        }
    }
}

function deleteTuesdayList(){
    let result = confirm("are you sure?");
    if(result == true){
        let ol = document.getElementById("tuesdaylist");
        while(ol.firstChild){
            ol.removeChild(ol.firstChild);
        }
    }
}
            
function deleteWednesdayList(){
    let result = confirm("are you sure?");
    if(result == true){
        let ol = document.getElementById("wednesdaylist");
        while(ol.firstChild){
            ol.removeChild(ol.firstChild);
        }
    }
}
            
function deleteThursdayList(){
    let result = confirm("are you sure?");
    if(result == true){
        let ol = document.getElementById("thursdaylist");
        while(ol.firstChild){
            ol.removeChild(ol.firstChild);
        }
    }
}
            
function deleteFridayList(){
    let result = confirm("are you sure?");
    if(result == true){
        let ol = document.getElementById("fridaylist");
        while(ol.firstChild){
            ol.removeChild(ol.firstChild);
        }
    }
}
            
function deleteSaturdayList(){
    let result = confirm("are you sure?");
    if(result == true){
        let ol = document.getElementById("saturdaylist");
        while(ol.firstChild){
            ol.removeChild(ol.firstChild);
        }
    }
}
            
function deleteSundayList(){
    let result = confirm("are you sure?");
    if(result == true){
        let ol = document.getElementById("sundaylist");
        while(ol.firstChild){
            ol.removeChild(ol.firstChild);
        }
    }
}
            
function deleteNotesList(){
    let result = confirm("are you sure?");
    if(result == true){
        let ol = document.getElementById("noteslist");
        while(ol.firstChild){
            ol.removeChild(ol.firstChild);
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