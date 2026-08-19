const bookdata=[
    {image:"",price:473},
    {image:"",price:473},
    {image:"",price:574},
]
function Book(){
const div=document.createElement("div");
div.setAttribute("class","book");
const image=document.createElement("img");
image.setAttribute("src",bookdata.image);
image.setAttribute("height","50px");
image.setAttribute("width","50px");
const h2=document.createElement("h2");
h2.innerText="Price:"+bookdata.price+"/-";;
h2.style.color="blue";
const bt=document.createElement("button");
bt.innerText="AddToCart";
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
return div;
}
const bookstore=bookdata.map((b)=>(
    Book(b)
))
const parent=document.getElementById("bookstore");
for(i of bookstore){
    parent.appendChild(i);
}