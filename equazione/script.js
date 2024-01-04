function calcequ(){

var aa=document.getElementById('a').value
var bb=document.getElementById('b').value
var cc=document.getElementById('c').value

var a=Number(document.getElementById('a').value)
var b=Number(document.getElementById('b').value)
var c=Number(document.getElementById('c').value)
var r="";

var segno=document.getElementById('segni')
controllo_a=0;

if(a<0){
controllo_a=1;
}
if(isNaN(a) || isNaN(b) || isNaN(c) ){
r="Inserisci i dati correttamente!"
}
else{
if(a == 0){
// di primo grado

if(b != 0){

r+="x "
if(segno.value=="<"){
if(b<0){
r+='>'
}else{
r+='<'
}
}else if(segno.value==">"){
if(b<0){
r+='<'
}else{
r+='>'
}

}else if(segno.value=="≥"){
if(b<0){
r+='≤'
}else{
r+='≥'
}
}else if(segno.value=="≤"){
if(b<0){
r+='≤'
}else{
r+='≥'
}
}else{
r+='='
}
// we
x=-c/b

controllo=typeof(x);
contr=0.5;
control=typeof(contr);

if(controllo==control){  
scambio=-c;  //-1-17  -18
scambio2=b;  // 24



for (j=2;j<20;j++){
if (scambio2%j==0 && scambio%j==0){

while(scambio2%j==0 && scambio%j==0){
scambio2=scambio2/j;
scambio=scambio/j;
}}
}

if (scambio<0 && scambio2<0){
scambio=-scambio;
scambio2=-scambio2;

}


if(scambio2!=1){
r +=  Math.round(scambio)+'/'+Math.round(scambio2)
}else{
r += Math.round(scambio)
}
}else{
r +=  x
}

}
else if(c != 0){                        // nessuna soluzione

r += "Impossibile"
}
else {                                  // infinite soluzioni  
r += "Indeterminata";
}

}
else {                                       // di secondo grado

delta=(b*b)+(-4*a*c)
if(delta<0){
r += "Impossibile"
}
else if(delta > 0){                         // we

delta=Math.sqrt(delta)
x1=(-b-delta)/(2*a)
x2=(-b+delta)/(2*a)

s="="
s2="="

wewe=""
wewe2=""

controllo=typeof(x1);
contr=0.5;
control=typeof(contr);

if(controllo==control){  
scambio=-b+(-delta);  //-1-17  -18
scambio2=2*a;  // 24

for (j=2;j<20;j++){
if (scambio2%j==0 && scambio%j==0){

while(scambio2%j==0 && scambio%j==0){
scambio2=scambio2/j;
scambio=scambio/j;
}}
}

if (scambio<0 && scambio2<0){
scambio=-scambio;
scambio2=-scambio2;

}

ctr=0
if (scambio< 0){

scambio=-scambio;
ctr=1
}
if (scambio2<0){
scambio2=-scambio2;
ctr=1;
}
if (scambio==0){
wewe=0;
r+="X1"+s+0;

}
else{

if (scambio==scambio2){
if(ctr==1){
if(scambio2==1){
wewe="-"+Math.round(scambio)

r += "X1 "+s+wewe
}
else{
wewe="-"+Math.round(scambio)+"/"+Math.round(scambio2)
r += "X1 "+s+wewe;
controllone=1

}
}
else{
if(scambio2==1){
wewe=Math.round(scambio)
r += "X1 "+s+wewe
}
else{
wewe=Math.round(scambio)+"/"+Math.round(scambio2);
r += "X1 "+s+wewe
controllone=1
}
}
}
else{

if(ctr==1){
if(scambio2==1){
wewe="-"+Math.round(scambio)
r += "X1 "+s+wewe
}
else{
wewe="-"+Math.round(scambio)+"/" +Math.round(scambio2)
r += "X1 "+s+wewe
controllone=1
}
}
else{
if(scambio2==1){
wewe=Math.round(scambio)
r += "X1 "+s+Math.round(scambio)
}
else{
wewe=Math.round(scambio)+"/" +Math.round(scambio2)
r += "X1 "+s+wewe
controllone=1
}
}
}


}


}

else{
r += "X1 "+s+  x1 //+ "  \nx2= " + x2
}



//we

controllone2=0
controllo=typeof(x2);
contr=0.5;
control=typeof(contr);

if(controllo==control){  
scambio1=-b+(+delta);   //-1+17   16
scambio21=2*a;    //24

for (j1=2;j1<20;j1++){
if (scambio21%j1==0 && scambio1%j1==0){

while(scambio21%j1==0 && scambio1%j1==0){
scambio21=scambio21/j1;
scambio1=scambio1/j1;

}}
}
supercontrollo=0;

if (scambio1<0 && scambio21<0){
scambio1=-scambio1;
scambio21=-scambio21;
supercontrollo=1;
}
ctr1=0
tt=0
tt1=0
if (scambio1< 0){
scambio1=-scambio1;
ctr1=1
tt=1
}
if (scambio21<0){
scambio21=-scambio21;
ctr1=1;
tt1=1  
}

if (scambio1==0){
wewe2=0;
r+="X2"+s2+"0"
}
else{

if (scambio1==scambio21){
if(ctr1==1){
if(scambio21==1){
wewe2="-"+Math.round(scambio1)
r += "  X2"+s2+wewe2
}
else{
wewe2="-"+Math.round(scambio1)+"/"+Math.round(scambio21);
r += "  X2"+s2+wewe2;
controllone2=1
}
}
else{
if(scambio21==1){
wewe2=Math.round(scambio1)
r += "  X2 "+s2+Math.round(scambio1)
}
else{
wewe2=Math.round(scambio1)+"/"+Math.round(scambio21);
r += "  X2 "+s2+wewe2;
controllone2=1
}

}
}
else{
if(ctr1==1){
if(scambio21==1){
//console.log("magrotti f")
wewe2="-"+Math.round(scambio1)
r += "  X2"+s2+wewe2;
}
else{
wewe2="-"+Math.round(scambio1)+"/" +Math.round(scambio21);
r += "  X2"+s2+wewe2;
controllone2=1
}
}
else{
if(scambio21==1){
wewe2=Math.round(scambio1)
r += "  X2"+s2+Math.round(scambio1)
}
else{
wewe2=Math.round(scambio1)+"/" +Math.round(scambio21);
r += "  X2"+s2+wewe2;
controllone2=1
}
}
}

}


}

else{

r += "  \nx2"+s2+ x2
}
crttt=0
if(segno.value!="="){
r=""
if(x1<x2){
crttt=1
}

if(segno.value=="<"){
if(a>0){
if(crttt==1){
r+=wewe+"<X<"+wewe2
}else{
r+=wewe2+"<X<"+wewe
}
}else{
if(crttt==1){
r+="X1<"+wewe+";X2>"+wewe2
}else{
r+="X1<"+wewe2+";X2>"+wewe
}
}
}else if(segno.value==">"){
if(a>0){
if(crttt==1){
r+="X1<"+wewe+";X2>"+wewe2
}else{
r+="X1<"+wewe2+";X2>"+wewe
}
}else{

if(crttt==1){
r+=wewe+"<X<"+wewe2
}else{
r+=wewe2+"<X<"+wewe
}
}
}else if(segno.value=="≥"){
if(a>0){
if(crttt==1){
r+="X1≤"+wewe+";X2≥"+wewe2
}else{
r+="X1≤"+wewe2+";X2≥"+wewe
}
}else{

if(crttt==1){
r+=wewe+"≤X≤"+wewe2
}else{
r+=wewe2+"≤X≤"+wewe
}
}
}else if(segno.value=="≤"){
if(a>0){
if(crttt==1){
r+=wewe+"≤X≤"+wewe2
}else{
r+=wewe2+"≤X≤"+wewe
}
}
else{
if(crttt==1){
r+="X1≤"+wewe+";X2≥"+wewe2
}else{
r+="X1≤"+wewe2+";X2≥"+wewe
}
}
}


}


}
else if(delta == 0)                   // we
{
x=-b/(2*a)

controllo=typeof(x);
contr=0.5;
control=typeof(contr);

if(controllo==control){
scambio=2*a
scambio2=-b
for (j=2;j<20;j++){
if (scambio2%j==0 && scambio%j==0){
while(scambio2%j==0 && scambio%j==0){
scambio2=scambio2/j;
scambio=scambio/j;

}}
}
//ctr=0;
if (scambio<0 && scambio2<0){
scambio=-scambio;
scambio2=-scambio2;

}

if (scambio< 0){

scambio=-scambio;
ctr=1
}
if (scambio2<0){
scambio2=-scambio2;
ctr=1;
}

if (scambio==scambio2){
if(ctr==1){
r += "X1= X2= -"+Math.round(scambio2)
}else{
r += "X1= X2= "+Math.round(scambio2)
}
}else{
if(ctr==1){
r += "X1= X2= -"+Math.round(scambio2)+"/" +Math.round(scambio)
}else{
r += "X1= X2= "+Math.round(scambio2)+"/" +Math.round(scambio)
}
}
}

else{
r += "X1= X2= " + x
}
}

else  if(b != 0)                                 // we
{
x2=-b/a

controllo=typeof(x2);
contr=0.5;
control=typeof(contr);

if(controllo==control){
scambio=-b
scambio2=a
for (j=2;j<20;j++){
if (scambio2%j==0 && scambio%j==0){
while(scambio2%j==0 && scambio%j==0){
scambio2=scambio2/j;
scambio=scambio/j;

}}
}

if (scambio<0 && scambio2<0){
scambio=-scambio;
scambio2=-scambio2;

}

if (scambio< 0){

scambio=-scambio;
ctr=1
}
if (scambio2<0){
scambio2=-scambio2;
ctr=1;
}

if (scambio==scambio2){
if(ctr==1){
if(scambio2==1){
r += "X1=0 X2=-"+Math.round(scambio)
}else{
r += "X1=0 X2=-"+Math.round(scambio)+"/"+Math.round(scambio2);
}

}else{
if(scambio2==1){
r += "X1=0 X2="+Math.round(scambio)
}else{
r += "X1=0 X2="+Math.round(scambio)+"/"+Math.round(scambio2);
}
}
}
}else{

r += 'X1=0  X2='+x2
}

}

else if(c != 0){
we=Math.sqrt(-c)
we2=Math.sqrt(a)
u=we/we2


if(we<0 || we2<0){ //we
r += "Impossibile"
}
else  {




controllo=typeof(u);
contr=0.5;
control=typeof(contr);

if(controllo==control){
Math.round(scambio)=we
Math.round(scambio2)=we2
for (j=2;j<20;j++){
if (scambio2%j==0 && scambio%j==0){
while(scambio2%j==0 && scambio%j==0){
scambio2=scambio2/j;
scambio=scambio/j;

}}
}
if (scambio<0 && scambio2<0){
scambio=-scambio;
scambio2=-scambio2;

}

if (scambio< 0){

scambio=-scambio;
ctr=1
}
if (scambio2<0){
scambio2=-scambio2;
ctr=1;
}

if (scambio==scambio2){
if(ctr==1){
if(scambio2==1){
r += "X1=0 X2=-"+Math.round(scambio)
}else{
r += "X1=0 X2=-"+Math.round(scambio)+"/"+Math.round(scambio2);
}

}else{
if(scambio2==1){
r += "X1=0 X2="+Math.round(scambio)
}else{
r += "X1=0 X2="+Math.round(scambio)+"/"+Math.round(scambio2);
}
}
}










}
else{
r += "X1=+ "+we+" X2=- "+we  
}
}
}  else{

r += " Non ammette soluzioni reali"
}    
}
}

document.getElementById('risultato').value=r;
var xValues = [];
var yValues = [];
d=a+'*x*x+'+b+'*x+'+c;
console.log(d);
generateData(d, -1000, 1000,100);

new Chart("myChart", {
type: "line",
data: {
labels: xValues,
datasets: [{
fill: false,
pointRadius: 1,
borderColor: "rgba(255,0,0,0.5)",
data: yValues
}]
},    
options: {
legend: {display: false},
title: {
display: true,
//   text: "y = x * 2 + 7",
fontSize: 16
}
}
});
function generateData(value, i1, i2, step = 1) {
for (let x = i1; x <= i2; x += step) {
yValues.push(eval(value));
xValues.push(x);
}
}


ctr=0;
ctr1=0;
controllo_a=0;
}



//bottoni
function b1(){
bot=document.getElementById("equ");
bot.style.fontSize="18px";


}
function b2(){
bot=document.getElementById("equ");
bot.style.fontSize="13px";


}

function b1_2(){
bot1=document.getElementById("cancella");
bot1.style.fontSize="18px";


}
function b2_2(){
bot1=document.getElementById("cancella");
bot1.style.fontSize="13px";


}

function change(){
sign=document.getElementById("segni");
eq=document.getElementById("equ");
tit=document.getElementById("titolo");

if(sign.value==">" || sign.value=="<" || sign.value=="≤" || sign.value=="≥" ){
eq.value="Calcolo disequazione"
tit.innerHTML="Calcolo disequazione"
}
else{
tit.innerHTML="Calcolo equazione"
eq.value="Calcolo equazione"
}

}


