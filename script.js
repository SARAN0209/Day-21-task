var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.addEventListener("click",foo)
let active=document.createElement("div");
active.setAttribute("id","active");
let Recovered=document.createElement("div");
Recovered.setAttribute("id","Recovered");
let Deaths=document.createElement("div");
Deaths.setAttribute("id","Deaths");

div.append(input,button,active,Recovered,Deaths)
document.body.append(div)

async function foo(){
let res=document.getElementById("country").value;
var url=`https://api.covid19api.com/dayone/country/${res}`;

let result= await fetch(url);
let result1=await result.json();
var index=result1.length-1;
console.log(result1[index].Active);
console.log(result1[index].Recovered);
console.log(result1[index].Deaths);
active.innerHTML=`Total Active cases: ${result1[index].Active}`;
Recovered.innerHTML=`Total Recoverd cases: ${result1[index].Recovered}`;
Deaths.innerHTML=`Total Deaths cases: ${result1[index].Deaths}`
}