//your JS code here. If required.
input1=document.getElementById("status");


function change(){
    console.log(input1);
    input1.innerHTML='<h1>Entered Metaverse</h1>'
}

document.getElementById("enterBtn").addEventListener("click",change);