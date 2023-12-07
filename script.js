let a =  document.getElementById("head");
let btn = document.getElementById("btn");
let image1=document.getElementById("img1");
let image2=document.getElementById("img2");
let image3=document.getElementById("img3");
image2.style.display="none";
image3.style.display="none";
let check = 0;
btn.addEventListener("click",function(){
    if(check==0){
    a.innerHTML="congratulation ! you both are friends";
    a.style.color="green"
    a.style.fontSize="1.1rem"
    image2.style.display="block"
    image1.style.display="none"
    image3.style.display="none"
    btn.innerHTML="remove"
    btn.style.backgroundColor="red"
    btn.style.color="white"
    check=1;
    }
    else{
    a.innerHTML="Friend removed !";
    a.style.color="blue"
    a.style.fontSize="1.1rem"
    image3.style.display="block";
    image1.style.display="none";
    image2.style.display="none";
    btn.innerHTML="add friend"
    btn.style.backgroundColor="yellow"
    btn.style.color="black"
    check=0;
    }
});