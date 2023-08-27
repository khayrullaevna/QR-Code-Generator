let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("img");
let elInput = document.getElementById("input");
let elBtn = document.getElementById("btn");


function generateQR(){
    if(elInput.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + elInput.value;
        imgBox.classList.add("show-img")
    }
    else{
        elInput.classList.add('error');
        setTimeout(()=>{
            elInput.classList.remove('error');
        },1000)
    }
}

elBtn.addEventListener("click", ()=>{
    generateQR()
})



console.log("hii")