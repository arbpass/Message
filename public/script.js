//add button
let addbtn= document.getElementById("addbtn");
let form= document.getElementById("fillup");

addbtn.addEventListener("click", (ele)=>{
    form.style.visibility= "initial";
});

//cancel button
let cancel= document.getElementById("cancel");

cancel.addEventListener("click", (ele)=>{
    form.style.visibility= "hidden";
});