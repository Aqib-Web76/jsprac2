
// let heading = document.getElementsByClassName("heading");
// console.dir(heading);
// console.log(heading);
// let heading = document.querySelector(".heading");
// console.dir(heading);
// let btn = document.querySelector(".btn");
// console.dir(btn);
// let header = document.getElementsByTagName(".btn");
// console.dir(header);
// let h1 = document.querySelector("h1");

// console.dir(h1.innerText);
// h1.innerText = h1.innerText + "From Govt College Peshawar";
// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// let divss = document.querySelectorAll(".box");
// console.log(divs[1]);
// let divsss = document.querySelectorAll(".box");
// console.log(divs[2]);

// divs[0].innerText = "new value 1";
// divs[1].innerText = "new value 2";
// divs[2].innerText = "new value 3";
/*
 let d = document.querySelectorAll(".box");
let idx = 1;
for ( let div of d) {
    div.innerText = `new value ${idx}`;
    idx++;
}*/
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// // console.log(id);
// let para = document.querySelector("p");
// console.log(para);

// let p = para.setAttribute("class","test1");
// console.log(p);
// console.log(para.getAttribute("class"));

// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor = "green";
// div.style.fontSize = "34px";
// let newBtn = document.createElement("Button");
// newBtn.innerText = "Click Me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerText = "this is my new heading";
// console.log(newHeading);
// let div = document.querySelector("div");
// div.after(newHeading);
// let para = document.querySelector("p");
// para.remove();

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);

let div = document.querySelector("div");
div.before
    (newBtn);
let btn = document.querySelector("button");
console.log(btn);
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";