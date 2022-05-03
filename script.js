let inputBox = document.getElementById("data");
let label = document.getElementById("label");

var reg = new RegExp('^[0-9]$');



inputBox.addEventListener("input",()=>{
    let val = inputBox.value
    let x = val.charAt(val.length-1)
    if(reg.test(x)){
        console.log(reg.test(val),val)
        label.textContent = "Mobile Number"
    }
    else if (val.length == 0){
        label.textContent = "Mobile or Email"
    }
    else{
        label.textContent = "Email Address"  
    }
})