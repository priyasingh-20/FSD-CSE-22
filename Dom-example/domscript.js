function addParagraph(){
    const para=document.createElement("p");
    para.innerText="This is a new Paragraph";
    para.style.color="red";
    const el=document.getElementById("para");
    el.appendChild(para);
}
function removeParagraph(){
    const el=document.querySelector("p");
    const parent=document.getElementById("para");
    parent.removeChild(el);
}
function removeAllParagraph(){
    const el=document.querySelectorAll("p");
    const parent=document.getElementById("para");
    parent.remove(el);
}