let sum=0;
let netTotal=[];
let playerObj={
    "name":" ",
    "cash":0
}

function draw(){
    let x = Math.floor(Math.random()*13)+1;
    document.getElementById("1").src=x+".png";
    if (x==1){
    netTotal.push(11);
    }
    else{
     netTotal.push(x);
    }
}
function draw1(){
    let y = Math.floor(Math.random()*13)+1;
    document.getElementById("2").src=y+".png";
    if (y==1){
        netTotal.push(11);
        }
        else{
            netTotal.push(y);
        }
   
}

function draw2(){
    let z = Math.floor(Math.random()*13)+1;
    document.getElementById("3").src=z+".png";
    if (z==1){
        netTotal.push(11);
        }
        else{
            netTotal.push(z);
        }
}


function reset(){
    document.getElementById("1").src="main.jpg"; 
    document.getElementById("2").src="main.jpg"; 
    document.getElementById("3").src="main.jpg";
    //
   
    document.getElementById("total").innerText=" ";
    document.getElementById("display").innerText=" ";
    netTotal=[];
    sum=0;
    
}

function sums(){
    sum=0;
        for(let i=0;i<netTotal.length;i++){
            sum+=netTotal[i]
        }
        document.getElementById("total").innerText="sum: "+ sum;
    
    if ((sum==21) ){
        document.getElementById("display").innerText="You won a jackpot!🤙";
    }
    if (sum<21 ){
        document.getElementById("display").innerText="Draw another card";
        
    }
    
    if (sum>21){
        document.getElementById("display").innerText="You lost the game,better luck next time 👍";
    }
} 
function newCard(){
    sum=0;
    for(let i=0;i<netTotal.length;i++){
        sum+=netTotal[i]
    }
    document.getElementById("total").innerText="sum: "+ sum;

    if ((sum==21) ){
        document.getElementById("display").innerText="You won a jackpot!🤙";
    }
     
    if (sum>21 || sum<21){
        document.getElementById("display").innerText="You lost the game,better luck next time 👍";
    }

}
let temp1;
let temp2;


function getInputValue(){
   temp1 =document.getElementById("uname").value;
   temp2 =document.getElementById("cash").value;
}
function pdetail(){

    document.getElementById("pdetails").innerHTML=temp1 + " : "+ temp2;
}

