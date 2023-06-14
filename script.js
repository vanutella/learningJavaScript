console.log("Hello world!");

var menuBtn = document.getElementById("menu_btn");

console.log(menuBtn);


menuBtn.addEventListener("click", function(){
    menuBtn.style.top = Math.random()*500+"px";
    menuBtn.style.left = Math.random()*900+"px";
    console.log("Y: " + menuBtn.top + " X: " + menuBtn.left)
})