const bookdata=[
    {image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvKsjiZ5OoUFQQNbd8QxQUJrfKcrlFIhrEQtl_GlZN4jWW-5igk9uI6LHJvzz0numcGUllNKB6zMqzGThwgZzNf0KLjD1vCAQG8DGT60UqNcXOrjcLcrDXHcPAWWo07LNhUZYAHrkRhlM&usqp=CAc",price:473},
    {image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvKsjiZ5OoUFQQNbd8QxQUJrfKcrlFIhrEQtl_GlZN4jWW-5igk9uI6LHJvzz0numcGUllNKB6zMqzGThwgZzNf0KLjD1vCAQG8DGT60UqNcXOrjcLcrDXHcPAWWo07LNhUZYAHrkRhlM&usqp=CAc",price:473},
    {image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvKsjiZ5OoUFQQNbd8QxQUJrfKcrlFIhrEQtl_GlZN4jWW-5igk9uI6LHJvzz0numcGUllNKB6zMqzGThwgZzNf0KLjD1vCAQG8DGT60UqNcXOrjcLcrDXHcPAWWo07LNhUZYAHrkRhlM&usqp=CAc",price:574},
]
function Book(b){
const div=document.createElement("div");
div.setAttribute("class","book");
const image=document.createElement("img");
image.setAttribute("src",b.image);
image.setAttribute("height","50px");
image.setAttribute("width","50px");
const h2=document.createElement("h2");
h2.innerText="Price:"+b.price+"/-";;
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