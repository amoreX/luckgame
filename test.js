var num1=Math.random();
num1=num1*10;
num1=Math.ceil(num1);
var num2=Math.random();
num2=num2*10;
num2=Math.ceil(num2);
if (num1>6){
    num1=num1-6;
}
if(num2>6){
    num2=num2-6;
}

document.getElementById("p1dice").src="./Assets/"+num1+".jpg";
document.getElementById("p2dice").src="./Assets/"+num2+".jpg";
if(num1>num2){
    document.getElementById("one").innerHTML="PLAYER 1 WINS";
}
if(num2>num1){
    document.getElementById("two").innerHTML="PLAYER 2 WINS";
}
if(num1===num2){
    alert("ITS A DRAW!!");
}

function ref(){
    location.reload();
}