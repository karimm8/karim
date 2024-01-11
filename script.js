// navbar sticky
let navbar = document.querySelector("nav");
let linkTop = document.querySelector(".link-top");
window.addEventListener("scroll",()=>{
    const x = window.scrollY;
    if(x > navbar.scrollHeight){
        navbar.classList.add("show-navbar");
        linkTop.classList.add("show-link");
    }
    else{
        navbar.classList.remove("show-navbar");
        linkTop.classList.remove("show-link");
    }
})

// date footer

let date = document.querySelector(".date");
console.log(date);
dateFooter = () =>{
    let x = new Date().getFullYear();
    date.innerHTML = x;
}

dateFooter();

// toggle navbar

let bars = document.querySelector(".fa-bars");
let ul = document.querySelector("ul")

bars.addEventListener("click",()=>{
   if(!ul.classList.contains("hidden")){
    ul.classList.add("hidden");
   }
   else{
    ul.classList.remove("hidden");
   }
})