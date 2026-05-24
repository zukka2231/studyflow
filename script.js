function updateTime(){

const d=new Date();

const days=["Nd","Pn","Wt","Śr","Cz","Pt","Sb"];

document.getElementById("day").innerText=days[d.getDay()];

document.getElementById("clock").innerText=d.toLocaleTimeString();
}

setInterval(updateTime,1000);
updateTime();

// wakacje
const vac=new Date("2026-06-27");
const now=new Date();
const diff=Math.ceil((vac-now)/(1000*60*60*24));
document.getElementById("vacation").innerText=diff+" dni";

// kalendarz
const cal=document.getElementById("calendar");
for(let i=1;i<=30;i++){
let div=document.createElement("div");
div.className="day";
div.innerHTML=i;
cal.appendChild(div);
}

// testy
const tests=document.getElementById("tests");
for(let i=0;i<3;i++){
let div=document.createElement("div");
div.className="item";
div.innerHTML=`
<input placeholder="data">
<input placeholder="przedmiot">
<input type="checkbox">
`;
tests.appendChild(div);
}

// eventy
const events=document.getElementById("events");
for(let i=0;i<2;i++){
let div=document.createElement("div");
div.className="item";
div.innerHTML=`
<input placeholder="event">
<input placeholder="data">
`;
events.appendChild(div);
}