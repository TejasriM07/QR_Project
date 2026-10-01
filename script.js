let lval = document.getElementsByTagName("input")[0]
let btn = document.getElementsByTagName("button")[0]
let image = document.getElementsByTagName("img")[0]

btn.addEventListener("click",()=>{
    if(lval.value === ""){
        alert("enter value");
    }
     image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${lval.value}`;
    image.style.display= "block";
})