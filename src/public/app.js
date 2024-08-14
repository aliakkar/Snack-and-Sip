let navbar=document.querySelector(".hamburger")
let Hicon=document.querySelector(".H-icon")
let flag=true
Hicon.addEventListener("click",hamburger)
function hamburger(){
    if(flag){
        Hicon.classList.add("border","border-2","border-black")
        navbar.classList.replace("-left-full","left-0")
        flag=false
    }
    else{
        Hicon.classList.remove("border","border-2","border-black")
        navbar.classList.replace("left-0","-left-full")
        flag=true
    }
}

