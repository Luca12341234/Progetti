


lettere=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let V = 0;
 let inizio=0
 controllonebellone=0
wella=[]

function Stampa(distanza,inizio,matricewe)
{
ta=document.getElementById("tabe")
rigint=document.createElement('tr') //crea riga intestazione
cella1=document.createElement('th')
incella1=document.createTextNode("Nodo")
cella1.appendChild(incella1)
rigint.appendChild(cella1)
cella2=document.createElement('th')
incella2=document.createTextNode("Costo")
cella2.appendChild(incella2)
rigint.appendChild(cella2)
cella3=document.createElement('th')
incella3=document.createTextNode("Predecessore")
cella3.appendChild(incella3)
rigint.appendChild(cella3)
ta.appendChild(rigint)
        io=0
riga=[]
    for(let i = 0; i < V; i++)
    {
            if(wella[io]!=undefined){
riga[i]=document.createElement('tr')
cella1=document.createElement('td')
incella1=document.createTextNode(lettere[i])
cella1.appendChild(incella1)
riga[i].appendChild(cella1)
cella2=document.createElement('td')
if(distanza[i]!=1000){
incella2=document.createTextNode(distanza[i])
}else{
incella2=document.createTextNode("∞")
}
cella2.appendChild(incella2)
riga[i].appendChild(cella2)
cella3=document.createElement('td')
incella3=document.createTextNode(lettere[wella[io]])
cella3.appendChild(incella3)
riga[i].appendChild(cella3)
                ta.appendChild(riga[i])
                    io++
            }else{
                    io++
        riga[i]=document.createElement('tr')
cella1=document.createElement('td')
incella1=document.createTextNode(lettere[i])
cella1.appendChild(incella1)
riga[i].appendChild(cella1)
cella2=document.createElement('td')
if(distanza[i]!=1000){
incella2=document.createTextNode(distanza[i])
}else{
incella2=document.createTextNode("∞")
}
cella2.appendChild(incella2)
riga[i].appendChild(cella2)
cella3=document.createElement('td')
incella3=document.createTextNode("-")
cella3.appendChild(incella3)
riga[i].appendChild(cella3)
                ta.appendChild(riga[i])
            }
    }
        mst(inizio,distanza,matricewe)
}

 

function dijkstra(matricewe,inizio)
{
distanza = [];
 controlla = [];
    for( i = 0; i < V; i++){
  distanza[i] = 1000; // numero massimo
 controlla[i] = false;
 }
  distanza[inizio] = 0;
  for(let count = 0; count < V-1; count++){
u = minorino(distanza, controlla);      
 controlla[u] = true;
for( v = 0; v < V; v++){
 if (!controlla[v] && matricewe[u][v] != 0 && distanza[u] != 1000 && distanza[u] + matricewe[u][v] < distanza[v]){
distanza[v] = distanza[u] + matricewe[u][v];
 wella[v]=u
 }
 }
}
    Stampa(distanza,inizio,matricewe);
}

//creazione mst
function mst(src,distanza,matricewe){
       wolla=[]
        for(i=0;i<V;i++){
        wolla[i]=""
        }
 for(ii=0;ii<V;ii++){
        for(iii=0;iii<V;iii++){
                if(wella[iii]==ii){
                        wolla[ii]+=iii;
                }
        }
   
 }
 
 
 
  p=0
  stringa=wolla[src]
  /*
  var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();
  */
 var canvone = document.getElementById("Dionisi");
 var ctx = canvone.getContext("2d");
 ctx.beginPath();

ctx.arc(250,45,40,0,2*Math.PI);
ctx.stroke();
distspazz=100
distalt=150
ctx.fillText(lettere[src], 250-30, 45-30);
ippo=0
dista1=[]
dista2=[]
/*
for(ipp=0;ipp<V;ipp++){
dista1.push(0)
dista2.push(0)
}
*/
 for(lgbt1=0;lgbt1<wolla[src].length;lgbt1++){
ctx.beginPath();
ctx.moveTo(250, 45);
ctx.lineTo(distspazz, distalt);
ctx.stroke();
ctx.beginPath();
var ctx = canvone.getContext("2d");
ctx.arc(distspazz,distalt,30,0,2*Math.PI);
ctx.stroke();
ctx.fillText(lettere[parseInt(wolla[src].charAt(lgbt1))], distspazz-30, distalt-30);
ctx.fillText(matricewe[parseInt(wolla[src].charAt(lgbt1))][src], distspazz-45, distalt-30);
dista1[parseInt(wolla[src].charAt(lgbt1))]=distspazz
dista2[parseInt(wolla[src].charAt(lgbt1))]=distalt
ippo++
distspazz+=100
 }
 //ognuno una cella
 //stampa non fino a nove
 distalt+=100
 distspazz=100
 
 while(p<V){
         //nuova stringa
         s=""
         for(ip=0;ip<stringa.length;ip++){
                 if(wolla[parseInt(stringa.charAt(ip))]!=""){
for(lgbt=0;lgbt<wolla[parseInt(stringa.charAt(ip))].length;lgbt++){
distspazz+=100
ctx.beginPath();
ctx.moveTo(dista1[parseInt(stringa.charAt(ip))], dista2[parseInt(stringa.charAt(ip))]);
ctx.fillText(lettere[wolla[parseInt(stringa.charAt(ip))].charAt(lgbt)], distspazz-30, distalt-30);
ctx.fillText(matricewe[wolla[parseInt(stringa.charAt(ip))].charAt(lgbt)][parseInt(stringa.charAt(ip))], distspazz-45, distalt-30);
ctx.lineTo(distspazz, distalt);
ctx.stroke();
ctx.beginPath();
ctx.arc(distspazz,distalt,30,0,2*Math.PI);
ctx.stroke();
                        dista1[wolla[parseInt(stringa.charAt(ip))].charAt(lgbt)]=distspazz
dista2[wolla[parseInt(stringa.charAt(ip))].charAt(lgbt)]=distalt

}
s+=wolla[parseInt(stringa.charAt(ip))]
distalt+=100
  distspazz=100
                 }
else
{
distspazz+=40
                 }



                 
         }
         stringa=s
p++
    }
//grafo
/*
var canvone2 = document.getElementById("Maurizio");
var ctx = canvone2.getContext("2d");
ctx.beginPath();
distal1=[]
distal2=[]
ctx.arc(45,250,40,0,2*Math.PI);
distal1.push(45);
distal2.push(250);
ctx.fillText(lettere[0], 45-30, 250-30);
ctx.stroke();
distspazz=100
distalt=100

for(da=1;da<V;da++){
if(da==V-1 && V!=2){
ctx.beginPath();
ctx.fillText(lettere[da], distspazz-30, 250-30);
ctx.arc(distspazz,250,40,0,2*Math.PI);
distal1.push(distspazz);
distal2.push(250);
ctx.stroke();
}else{
if(da%2==0){
ctx.beginPath();
distalt=50
var ctx = canvone2.getContext("2d");
ctx.arc(distspazz,distalt,40,0,2*Math.PI);
distal1.push(distspazz);
distal2.push(distalt);
ctx.fillText(lettere[da], distspazz-30, distalt-30);
ctx.stroke();
}else{
ctx.beginPath();
distalt=400
var ctx = canvone2.getContext("2d");
ctx.arc(distspazz,distalt,40,0,2*Math.PI);
ctx.fillText(lettere[da], distspazz-30, distalt-30);
distal1.push(distspazz);
distal2.push(distalt);
ctx.stroke();
distspazz+=200
}
}
}

for(ip=0;ip<V;ip++){
for(ipp=0;ipp<V;ipp++){
if(matricewe[ip][ipp]>0){
ctx.beginPath();
ctx.moveTo(distal1[ip], distal2[ip]);
ctx.lineTo(distal1[ipp], distal2[ipp]);
ctx.stroke();

}
}
}
*/

}

ello2=0
//creazione tabella
function stampino(){
if(controllonebellone==0){
ello=document.getElementById('wellissimo').value
ello2=Number(ello)
V=ello2
s=""
s+="<table border=''>"
s+="<tr><td> </td>"
for(g=0;g<ello2;g++){
s+="<td>"+lettere[g]+"</td>"
}
s+="</tr>"
for(i=0;i<ello2;i++){
s+="<tr>"
s+="<td>"+lettere[i]+"</td>"
for(ii=0;ii<ello2;ii++){
s+="<td><input type='text' id="+i+ii+"></td>"
}
s+="</tr>"
}

s+="</table>"
s+="<br><button onclick='gui()' class='btn btn-success'>Avvia programma</button>"
document.getElementById('tabellautente').innerHTML=s
}
}
//interfaccia grafica
function gui(){
let matricewe = []
//creazione matrice
inizio=Number(document.getElementById('wellissimo2').value)

for(loo=0;loo<V;loo++){
for(loo2=0;loo2<V;loo2++){
matricewe[loo]=[]
}
}
//inserimento numeri nella matrice
for(i=0;i<V;i++){
for(ii=0;ii<V;ii++){
eee=i+''+ii
console.log(eee)
ee=document.getElementById(eee).value
if(ee=="i"){
matricewe[i][ii]=0
}else{
matricewe[i][ii]=Number(ee)
}
}
}
 mei=0
 //cintrollo tabella adiacenze e diagonale
 for(m1=0;m1<V;m1++){

 for(m3=0;m3<V;m3++){
if(matricewe[m1][m3]!=matricewe[m3][m1]){
                 mei=1
         }
 if(m1==m3 && matricewe[m1][m3]!=0){
                 mei=1
         }
 }
 }


if(mei==0 && inizio<=V-1 && V!=0 && controllonebellone==0){

controllonebellone=1
  document.getElementById('olla').innerHTML=""
  document.getElementById('gio').innerHTML=""
  document.getElementById("puzzo3").innerHTML=""
  for(we1=0;we1<V;we1++){
for(we2=0;we2<V;we2++){
eee=we1+''+we2
console.log(eee)
ee=document.getElementById(eee).readOnly = true;
}
}
  document.getElementById('gio').innerHTML="<h1>MST:</h1><canvas id='Dionisi' width='500' height='1000' style='border:1px solid #000000;'></canvas>"
  //<hr><h1>Grafo:</h1><canvas id='Maurizio' width='1200' height='500' style='border:1px solid #000000;'></canvas>
 
  document.getElementById('olla').innerHTML="<table id='tabe2' border='2'></table><br><br><table id='tabe' border='2'></table>"

  dijkstra(matricewe, inizio);

}else{
     document.getElementById("puzzo3").innerHTML="Matrice non adiacente o errore di input o fine del programma"
//canva  e random tra conrdinate e costi grafo
}
}
function minorino(distanza,controlla){
 min = 1000;
 predecessore = -1;
     
    for( v = 0; v < V; v++){
  if (controlla[v] == false && distanza[v] <= min){
      min = distanza[v];
     predecessore = v;
  }
  }
  return predecessore;
}

