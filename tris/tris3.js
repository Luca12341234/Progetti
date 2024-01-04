num=0
cella1=''
cella2=''
cella3=''
cella4=''
cella5=''
cella6=''
cella7=''
cella8=''
cella9=''
function CIAO11(){
	if(cella1==''  && controllocapre==0){
			if(num%2==0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno O"
}else if(num%2!=0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno X"
}
		if(num%2==0){
		document.getElementById('ciao1').innerHTML='<img src="gioc/rub.png">'
		num++
		cella1='x'
		controlleroMauLinuX()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}else{
		document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
		num++
		cella1='o'
		controlleroMauLinuo2()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''  && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}
	}
}
function CIAO21(){
	if(cella2=='' && controllocapre==0){
			if(num%2==0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno O"
}else if(num%2!=0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno X"
}
		if(num%2==0){
		document.getElementById('ciao2').innerHTML='<img src="gioc/rub.png">'
		num++
		cella2='x'
		controlleroMauLinuX()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}else{
		document.getElementById('ciao2').innerHTML='<img src="gioc/bar.png">'
		num++
		cella2='o'
		controlleroMauLinuo2()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''  && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}
	}
}function CIAO31(){

	if(cella3==''  && controllocapre==0){
			if(num%2==0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno O"
}else if(num%2!=0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno X"
}
	    if(num%2==0){
		document.getElementById('ciao3').innerHTML='<img src="gioc/rub.png">'
		num++
		cella3='x'
		controlleroMauLinuX()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}else{
		document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
		num++
		cella3='o'
		controlleroMauLinuo2()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''  && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}
	}
}function CIAO41(){
	if(cella4=='' && controllocapre==0){
			if(num%2==0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno O"
}else if(num%2!=0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno X"
}
	if(num%2==0){
		document.getElementById('ciao4').innerHTML='<img src="gioc/rub.png">'
		num++
		cella4='x'
		controlleroMauLinuX()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}else{
		document.getElementById('ciao4').innerHTML='<img src="gioc/bar.png">'
		num++
		cella4='o'
		controlleroMauLinuo2()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''  && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}
	}
}function CIAO51(){
	if(cella5=='' && controllocapre==0){
			if(num%2==0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno O"
}else if(num%2!=0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno X"
}
	if(num%2==0){
		document.getElementById('ciao5').innerHTML='<img src="gioc/rub.png">'
		num++
		cella5='x'
		controlleroMauLinuX()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}else{
		document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
		num++
		cella5='o'
		controlleroMauLinuo2()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''  && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}
	}
}function CIAO61(){

	if(cella6=='' && controllocapre==0){
			if(num%2==0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno O"
}else if(num%2!=0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno X"
}
	if(num%2==0){
		document.getElementById('ciao6').innerHTML='<img src="gioc/rub.png">'
		num++
		cella6='x'
		controlleroMauLinuX()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}else{
		document.getElementById('ciao6').innerHTML='<img src="gioc/bar.png">'
		num++
		cella6='o'
		controlleroMauLinuo2()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''  && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}
	}
}function CIAO71(){
	if(cella7=='' && controllocapre==0){
			if(num%2==0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno O"
}else if(num%2!=0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno X"
}
	if(num%2==0){
		document.getElementById('ciao7').innerHTML='<img src="gioc/rub.png">'
		num++
		cella7='x'
		controlleroMauLinuX()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}else{
		document.getElementById('ciao7').innerHTML='<img src="gioc/bar.png">'
		num++
		cella7='o'
		controlleroMauLinuo2()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''  && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}
	}
}function CIAO81(){

	if(cella8=='' && controllocapre==0){
			if(num%2==0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno O"
}else if(num%2!=0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno X"
}
	if(num%2==0){
		document.getElementById('ciao8').innerHTML='<img src="gioc/rub.png">'
		num++
		cella8='x'
		controlleroMauLinuX()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}else{
		document.getElementById('ciao8').innerHTML='<img src="gioc/bar.png">'
		num++
		cella8='o'
		controlleroMauLinuo2()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''  && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}
	}
}function CIAO91(){

	if(cella9=='' && controllocapre==0){
			if(num%2==0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno O"
}else if(num%2!=0 && controllocapre==0){
	document.getElementById('risposta').innerHTML="Truno X"
}
	if(num%2==0){
		document.getElementById('ciao9').innerHTML='<img src="gioc/rub.png">'
		num++
		cella9='x'
		controlleroMauLinuX()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}else{
		document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
		num++
		cella9='o'
		controlleroMauLinuo2()
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''  && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}
		}
	}
}
controllocapre=0
function controlleroMauLinuX(){
	if ((cella1 == 'x' || cella1 == 'X') && (cella2 == 'x' || cella2 == 'X') && (cella3 == 'x' || cella3 == 'X')) {
	document.getElementById('risposta').innerHTML="vince giocatore X"
	controllocapre=1
		ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella1 == 'x' || cella1 == 'X') && (cella4 == 'x' || cella4 == 'X') && (cella7 == 'x' || cella7 == 'X')) {
	document.getElementById('risposta').innerHTML="vince giocatore X"
	controllocapre=1
		ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella7 == 'x' || cella7 == 'X') && (cella8 == 'x' || cella8 == 'X') && (cella9 == 'x' || cella9 == 'X')) {
	document.getElementById('risposta').innerHTML="vince giocatore X"
	controllocapre=1
		ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella3 == 'x' || cella3 == 'X') && (cella6 == 'x' || cella6 == 'X') && (cella9 == 'x' || cella9 == 'X')) {
	document.getElementById('risposta').innerHTML="vince giocatore X"
	controllocapre=1
		ss1=document.getElementById("vittoria")
			ss1.play()
	}
    else if ((cella1 == 'x' || cella1 == 'X') && (cella5 == 'x' || cella5 == 'X') && (cella9 == 'x' || cella9 == 'X')) {
	document.getElementById('risposta').innerHTML="vince giocatore X"
	controllocapre=1
		ss1=document.getElementById("vittoria")
			ss1.play()
	}
    else if ((cella3 == 'x' || cella3 == 'X') && (cella5 == 'x' || cella5 == 'X') && (cella7 == 'x' || cella7 == 'X')) {
	document.getElementById('risposta').innerHTML="vince giocatore X"
	controllocapre=1
		ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella2 == 'x' || cella2 == 'X') && (cella5 == 'x' || cella5 == 'X') && (cella8 == 'x' || cella8 == 'X')) {
	document.getElementById('risposta').innerHTML="vince giocatore X"
	controllocapre=1
		ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella4 == 'x' || cella4 == 'X') && (cella5 == 'x' || cella5 == 'X') && (cella6 == 'x' || cella6 == 'X')) {
	document.getElementById('risposta').innerHTML="vince giocatore X"
	controllocapre=1
		ss1=document.getElementById("vittoria")
			ss1.play()
    }
}

function controlleroMauLinuo2(){
	if ((cella1 == 'o' || cella1 == 'o') && (cella2 == 'o' || cella2 == 'o') && (cella3 == 'o' || cella3 == 'o')) {
	document.getElementById('risposta').innerHTML="vince giocatore o"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella1 == 'o' || cella1 == 'o') && (cella4 == 'o' || cella4 == 'o') && (cella7 == 'o' || cella7 == 'o')) {
	document.getElementById('risposta').innerHTML="vince giocatore o"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella7 == 'o' || cella7 == 'o') && (cella8 == 'o' || cella8 == 'o') && (cella9 == 'o' || cella9 == 'o')) {
	document.getElementById('risposta').innerHTML="vince giocatore o"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella3 == 'o' || cella3 == 'o') && (cella6 == 'o' || cella6 == 'o') && (cella9 == 'o' || cella9 == 'o')) {
	document.getElementById('risposta').innerHTML="vince giocatore o"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
	}
    else if ((cella1 == 'o' || cella1 == 'o') && (cella5 == 'o' || cella5 == 'o') && (cella9 == 'o' || cella9 == 'o')) {
	document.getElementById('risposta').innerHTML="vince giocatore o"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
	}
    else if ((cella3 == 'o' || cella3 == 'o') && (cella5 == 'o' || cella5 == 'o') && (cella7 == 'o' || cella7 == 'o')) {
	document.getElementById('risposta').innerHTML="vince giocatore o"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella2 == 'o' || cella2 == 'o') && (cella5 == 'o' || cella5 == 'o') && (cella8 == 'o' || cella8 == 'o')) {
	document.getElementById('risposta').innerHTML="vince giocatore o"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if ((cella4 == 'o' || cella4 == 'o') && (cella5 == 'o' || cella5 == 'o') && (cella6 == 'o' || cella6 == 'o')) {
	document.getElementById('risposta').innerHTML="vince giocatore o"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
}
