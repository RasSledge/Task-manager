function cardshow() {
    document.getElementById("card").style.display="block";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("openbtn").style.disabled="disabled";
    document.getElementById("openbtn").style.opacity="0.5";
    } 
    
    function cardhide() {
    document.getElementById("card").style.display="none";
    document.getElementById("openbtn").style.disabled="";
    document.getElementById("openbtn").style.opacity="1";
    }
    
    var title = document.getElementById("title");

var desc = document.getElementById("description");

var addbtn = document.getElementById("addbtn");

var tbox = document.getElementById("middle");


addbtn.addEventListener("click",()=> {

var title = document.getElementById("title");

var desc = document.getElementById("description");

if(title.value == "") {
alert ("Title cannot be empty.");
return false ;
}

if(desc.value == "") {
alert ("Enter a description.");
return false ;
}

else {

var title = document.getElementById("title");

var desc = document.getElementById("description");

var addbtn = document.getElementById("addbtn");

var tbox = document.getElementById("middle");

//-------------------

var box = document.createElement("div");

var heading = document.createElement("h3");

var about = document.createElement("p");

var editbtn = document.createElement("button");
    
var dltbtn = document.createElement("button");
    
    
heading.innerText = title.value;
heading.classList.add("heading");
box.appendChild(heading);    
    
about.innerText = desc.value;
about.classList.add("about");
box.appendChild(about);

editbtn.innerText = "Edit";
editbtn.classList.add("ebtn");
box.appendChild(editbtn);

dltbtn.innerText = "Delete";
dltbtn.classList.add("dbtn");
box.appendChild(dltbtn);


box.classList.add("cbox");
tbox.appendChild(box);
title.value = "";
desc.value = "";
    
}


dltbtn.addEventListener("click",()=> {

tbox.removeChild(box);
box.removeChild(heading);
box.removeChild(about);
box.removeChild(editbtn);
box.removeChild(dltbtn);

});


})
