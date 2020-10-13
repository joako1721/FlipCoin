function flip(){
    var text = document.getElementById("text").value;
    var text1 = document.getElementById("text1").value;
    var probabilidad = parseFloat(document.getElementById("text2").value);
    var mensaje = document.getElementById("mensaje");
    var resultado = document.getElementById("resultado")


    // var random = Math.floor(Math.random() * 2)
    // if(random == 0){
    //     resultado.value = text1
    // }else if(random == 1){
    //     resultado.value = text
    // }
    if(probabilidad < 0 || probabilidad > 1 || isNaN(probabilidad)){
      mensaje.innerText = "Revisá que la probabilidad sea un número y esté entre 0 y 1 (incluídos ambos)!";
    } else {
      mensaje.innerText = "";
    }

    var random = Math.random();

    console.log(probabilidad);

    if(random < probabilidad){
      resultado.value =  JAJA(text);
    } else{
      resultado.value = JAJA(text1);
    }

    console.log(random);

}
function JAJA(str)
{
    return str.split("").reverse().join("");
}
