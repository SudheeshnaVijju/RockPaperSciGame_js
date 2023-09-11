let [computer,user]=[0,0];
let result_ref = document.getElementById("result");
let exit=document.getElementById("exit");

let icon1=document.getElementById("icon1");
let icon2=document.getElementById("icon2");
let icon3=document.getElementById("icon3");

let icon_1=document.getElementById("icon_1");
let icon_2=document.getElementById("icon_2");
let icon_3=document.getElementById("icon_3");


let choices_object ={
'rock' : {
    'rock' : 'draw',
    'scissor' : 'win',
    'paper' : 'lose'
},
'scissor' : {
    'rock' : 'lose',
    'scissor' : 'draw',
    'paper' : 'win'
},
'paper' : {
    'rock' : 'win',
    'scissor' : 'lose',
    'paper' : 'draw'
}
};


let turn=0;
function checker(input){

var choices =["rock" , "scissor" ,"paper"];
var num=Math.floor(Math.random()*3);

document.getElementById("comp_choice").innerHTML=`Computer choose : <span> ${choices[num].toUpperCase()} </span>`;

document.getElementById("user_choice").innerHTML =`You choose : <span> ${input.toUpperCase()} </span>`;

document.getElementById("p").
innerHTML = ``;

if(input=="rock"){
    icon1.style.transition="transform 0.5s ease";
    icon1.style.transform="scale(1.2)";
    /*icon1.style.height="100px";
    icon1.style.width="100px";*/
    icon1.style.borderColor="white";
    icon1.style.borderWidth="3px";
    icon1.style.boxShadow="0 0px 15px rgb(249, 3, 204) inset, 0 0px 15px rgb(249, 3, 204),0 0px 15px rgb(249, 3, 204) inset, 0 0px 15px rgb(249, 3, 204)";

    icon2.style.transition="transform 0.3s ease";
    icon2.style.transform="scale(1)";
    icon2.style.borderColor="rgb(241, 249, 3)";
    icon2.style.borderWidth="1px";
    icon2.style.boxShadow="0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3),0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3)";

    icon3.style.transition="transform 0.3s ease";
    icon3.style.transform="scale(1)";
    icon3.style.borderColor="rgb(3, 138, 249)";
    icon3.style.borderWidth="1px";
    icon3.style.boxShadow="0 0px 10px rgb(3, 130, 249) inset, 0 0px 10px rgb(3, 138, 249),0 0px 10px rgb(3, 138, 249) inset, 0 0px 10px rgb(3, 138, 249)";
}
if(input=="scissor"){
    icon2.style.transition="transform 0.5s ease";
    icon2.style.transform="scale(1.2)";
    icon2.style.borderColor="white";
    icon2.style.borderWidth="3px";
    icon2.style.boxShadow="0 0px 15px rgb(241, 249, 3) inset, 0 0px 15px rgb(241, 249, 3),0 0px 15px rgb(241, 249, 3) inset, 0 0px 15px rgb(241, 249, 3)";

    
    icon3.style.transition="transform 0.3s ease";
    icon3.style.transform="scale(1)";
    icon3.style.borderColor="rgb(3, 138, 249)";
    icon3.style.borderWidth="1px";
    icon3.style.boxShadow="0 0px 10px rgb(3, 130, 249) inset, 0 0px 10px rgb(3, 138, 249),0 0px 10px rgb(3, 138, 249) inset, 0 0px 10px rgb(3, 138, 249)";
    
    icon1.style.transition="transform 0.3s ease";
    icon1.style.transform="scale(1)";
    icon1.style.borderColor="rgb(249, 3, 204)";
    icon1.style.borderWidth="1px";
    icon1.style.boxShadow="0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204),0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204)";


}
if(input=="paper"){
    icon3.style.transition="transform 0.5s ease";
    icon3.style.transform="scale(1.2)";
    icon3.style.borderColor="white";
    icon3.style.borderWidth="3px";
    icon3.style.boxShadow="0 0px 15px rgb(3, 130, 249) inset, 0 0px 15px rgb(3, 138, 249),0 0px 15px rgb(3, 138, 249) inset, 0 0px 15px rgb(3, 138, 249)";

    icon2.style.transition="transform 0.3s ease";
    icon2.style.transform="scale(1)";
    icon2.style.borderColor="rgb(241, 249, 3)";
    icon2.style.borderWidth="1px";
    icon2.style.boxShadow="0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3),0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3)";


    icon1.style.transition="transform 0.3s ease";
    icon1.style.transform="scale(1)";
    icon1.style.borderColor="rgb(249, 3, 204)";
    icon1.style.top="100px";
    icon1.style.left="636px";
    icon1.style.borderWidth="1px";
    icon1.style.boxShadow="0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204),0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204)";
}
if(choices[num]=="rock"){
    icon_1.style.transition="transform 0.5s ease";
    icon_1.style.transform="scale(1.2)";
    icon_1.style.borderColor="white";
    icon_1.style.borderWidth="3px";
    icon_1.style.boxShadow="0 0px 15px rgb(249, 3, 204) inset, 0 0px 15px rgb(249, 3, 204),0 0px 15px rgb(249, 3, 204) inset, 0 0px 15px rgb(249, 3, 204)";

    icon_2.style.transition="transform 0.3s ease";
    icon_2.style.transform="scale(1)";
    icon_2.style.borderColor="rgb(241, 249, 3)";
    icon_2.style.borderWidth="1px";
    icon_2.style.boxShadow="0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3),0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3)";

    icon_3.style.transition="transform 0.3s ease";
    icon_3.style.transform="scale(1)";
    icon_3.style.borderColor="rgb(3, 138, 249)";
    icon_3.style.borderWidth="1px";
    icon_3.style.boxShadow="0 0px 10px rgb(3, 130, 249) inset, 0 0px 10px rgb(3, 138, 249),0 0px 10px rgb(3, 138, 249) inset, 0 0px 10px rgb(3, 138, 249)";
}
if(choices[num]=="scissor"){
    icon_2.style.transition="transform 0.5s ease";
    icon_2.style.transform="scale(1.2)";
    icon_2.style.borderColor="white";
    icon_2.style.borderWidth="3px";
    icon_2.style.boxShadow="0 0px 15px rgb(241, 249, 3) inset, 0 0px 15px rgb(241, 249, 3),0 0px 15px rgb(241, 249, 3) inset, 0 0px 15px rgb(241, 249, 3)";

    
    icon_3.style.transition="transform 0.4s ease";
    icon_3.style.transform="scale(1)";
    icon_3.style.borderColor="rgb(3, 138, 249)";
    icon_3.style.borderWidth="1px";
    icon_3.style.boxShadow="0 0px 10px rgb(3, 130, 249) inset, 0 0px 10px rgb(3, 138, 249),0 0px 10px rgb(3, 138, 249) inset, 0 0px 10px rgb(3, 138, 249)";

    icon_1.style.transition="transform 0.4s ease";
    icon_1.style.transform="scale(1)";
    icon_1.style.borderColor="rgb(249, 3, 204)";
    icon_1.style.borderWidth="1px";
    icon_1.style.boxShadow="0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204),0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204)";


}
if(choices[num]=="paper"){
    icon_3.style.transition="transform 0.5s ease";
    icon_3.style.transform="scale(1.2)";
    icon_3.style.borderColor="white";
    icon_3.style.borderWidth="3px";
    icon_3.style.boxShadow="0 0px 15px rgb(3, 130, 249) inset, 0 0px 15px rgb(3, 138, 249),0 0px 15px rgb(3, 138, 249) inset, 0 0px 15px rgb(3, 138, 249)";

    icon_2.style.transition="transform 0.4s ease";
    icon_2.style.transform="scale(1)";
    icon_2.style.borderColor="rgb(241, 249, 3)";
    icon_2.style.borderWidth="1px";
    icon_2.style.boxShadow="0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3),0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3)";


    icon_1.style.transition="transform 0.4s ease";
    icon_1.style.transform="scale(1)";
    icon_1.style.borderColor="rgb(249, 3, 204)";
    icon_1.style.borderWidth="1px";
    icon_1.style.boxShadow="0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204),0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204)";
}

let com_choice=choices[num];
switch(choices_object[input][com_choice]){
    case 'win':
        result_ref.style.cssText =
        "color:rgb(250, 250, 250); text-shadow: 2px 2px 3px rgb(73, 214, 51),-2px 2px 3px rgb(73, 214, 51),-2px -2px 3px rgb(73, 214, 51),2px -2px 3px rgb(373, 214, 51);";
        result_ref.innerHTML = 'YOU WIN';
        user++;
        break;
    case 'lose':
        result_ref.style.cssText =
        "color:rgb(250, 250, 250); text-shadow: 2px 2px 3px rgb(253, 4, 4),-2px 2px 3px rgb(253, 4, 4),-2px -2px 3px rgb(253, 4, 4),2px -2px 3px rgb(253, 4, 4); ";
        result_ref.innerHTML = 'YOU LOSE'; 
        computer++;
        break;
    case 'draw':
        result_ref.style.cssText =
        "color:rgb(250,250,250);text-shadow: 2px 2px 3px rgb(252, 124, 4),-2px 2px 3px rgb(252, 124, 4),-2px -2px 3px rgb(252, 124, 4),2px -2px 3px rgb(252, 124, 4);"
        result_ref.innerHTML = 'DRAW';
        break;  
}


document.getElementById("CS").innerHTML = computer;
document.getElementById("YS").innerHTML = user;

}







/*var turn1 = document.getElementById("1");
turn1.addEventListener("click",function (){
let t=10;
//checker('rock');

});*/