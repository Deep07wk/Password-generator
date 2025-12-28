let char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function gen(){
    let get=document.getElementById("length")
    let n= Number(get.value)
    document.getElementById("pass1").innerText=""
    document.getElementById("pass2").innerText=""
    for(let i=0;i<n;i++){
        let random=Math.floor(Math.random()*91)
        let pass=document.getElementById("pass1")
        pass.innerText+=char[random]
    }
    for(let i=0;i<n;i++){
        let random=Math.floor(Math.random()*91)
        let pass=document.getElementById("pass2")
        pass.innerText+=char[random]
    }
    get.value=""
}