let celciusInput=document.querySelector("#celcius > input");
let kelvinInput=document.querySelector("#kelvin > input");
let fahrenheitInput=document.querySelector("#fahrenheit > input");

let btn=document.querySelector(".btn");

function roundNumber(number){
    return Math.round(number*100)/100
}
celciusInput.addEventListener("input",function(){
    let celval=parseFloat(celciusInput.value);
    let fval=((celval*9)/5)+32;
    let kval=celval+273.15;
    fahrenheitInput.value=roundNumber(fval);
    kelvinInput.value=roundNumber(kval);
});
fahrenheitInput.addEventListener("input",function(){
    let fval=parseFloat(fahrenheitInput.value);
    let cval=(fval-32)*(5/9);
    let kval=((fval-32)/1.8)+273.15;
    celciusInput.value=roundNumber(cval);
    kelvinInput.value=roundNumber(kval);
})
kelvinInput.addEventListener("input",function(){
    let kval=parseFloat(kelvinInput.value);
    let fval=(1.8*(kval-273)+32);
    let cval=(kval-273.15);
    celciusInput.value=roundNumber(cval);
    fahrenheitInput.value=roundNumber(fval);
})
btn.addEventListener("click",function(){
    celciusInput.value="";
    fahrenheitInput.value="";
    kelvinInput.value="";
})