function flip(){
    var text = document.getElementById("text").value;
    var text1 = document.getElementById("text1").value;
    var resultado = document.getElementById("resultado")
    var random = Math.floor(Math.random() * 2)
    console.log(random)
    
    if(random == 0){
        resultado.value = JAJA(text1);
    }else if(random == 1){
        resultado.value = JAJA(text);
    }
    
}

function JAJA(str)
{
    return str.split("").reverse().join("");
}