import { summation,product } from "./summation";
import("./index.css"); 
import image from "./redis.png";
let arr= [1,6,8,90];
console.log(summation(arr));
console.log(product(arr));




const div= document.createElement("div");
const div2= document.createElement("div");

const img= document.createElement("img");
img.src=image; 
img.classList.add("image");
const h1= document.createElement("h1");
div.setAttribute("class", "title"); 
//div.classList.add("title");

h1.innerText="Hello, Redis!";
div.appendChild(h1);
div2.appendChild(img);
document.getElementById("root").append(div,div2);