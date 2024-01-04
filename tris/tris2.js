var num = 0;

cella1=''
cella2=''
cella3=''
cella4=''
cella5=''
cella6=''
cella7=''
cella8=''
cella9=''

wellabot=0


controllocapre=0

n1=false
n2=false
n3=false
n4=false
n5=false
n6=false
n7=false
n8=false
n9=false

function CIAO11(){
	if(cella1=='' && controllocapre==0){
		document.getElementById('ciao1').innerHTML='<img src="gioc/rub.png">'
		num++
		cella1='x'
		n1=true
		controlleroMauLinuX()
		if(controllocapre==0){
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}else{
		controllawinbot()
		if(wellabot==0){
		calcola()
		}else{
			document.getElementById('risposta').innerHTML='vince il bot'
			controllocapre=1
			ss1=document.getElementById("vittoria")
			ss1.play()
		}
		}
	}
	}
}
function CIAO21(){
	if(cella2=='' && controllocapre==0){
		document.getElementById('ciao2').innerHTML='<img src="gioc/rub.png">'
		num++
		cella2='x'
		n2=true
		controlleroMauLinuX()
		if(controllocapre==0){
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			ss2=document.getElementById("pari")
			ss2.play()
			controllocapre=1
		}else{
		controllawinbot()
		if(wellabot==0){
		calcola()
		}else{
			document.getElementById('risposta').innerHTML='vince il bot'
			controllocapre=1
			ss1=document.getElementById("vittoria")
			ss1.play()
		}
		}
	}
	}
}function CIAO31(){
	if(cella3=='' && controllocapre==0){
	    document.getElementById('ciao3').innerHTML='<img src="gioc/rub.png">'
		num++
		cella3='x'
		n3=true
		controlleroMauLinuX()
		if(controllocapre==0){
		if(cella1=='' && cella2=='' && cella3=='x' && cella4=='' && cella5=='o' && cella6=='' && cella7=='x' && cella8=='' && cella9=='' && controllocapre==0){
			num++
			cella6='x'
			document.getElementById('ciao6').innerHTML='<img src="gioc/bar.png">'
		}else{
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}else{
		controllawinbot()
		if(wellabot==0){
		calcola()
		}else{
			document.getElementById('risposta').innerHTML='vince il bot'
			controllocapre=1
			ss1=document.getElementById("vittoria")
			ss1.play()
		}
		}
	}	
	}
	}
}function CIAO41(){
	if(cella4==''  && controllocapre==0){
	document.getElementById('ciao4').innerHTML='<img src="gioc/rub.png">'
		num++
		cella4='x'
		n4=true
		controlleroMauLinuX()
		if(controllocapre==0){
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}else{
		controllawinbot()
		if(wellabot==0){
		calcola()
		}else{
			document.getElementById('risposta').innerHTML='vince il bot'
			controllocapre=1
			ss1=document.getElementById("vittoria")
			ss1.play()
		}
		}
	}
	}
}function CIAO51(){
	if(cella5==''  && controllocapre==0){
	document.getElementById('ciao5').innerHTML='<img src="gioc/rub.png">'
		num++
		cella5='x'
		n5=true
		controlleroMauLinuX()
		if(controllocapre==0){
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}else{
		controllawinbot()
		if(wellabot==0){
		calcola()
		}else{
			document.getElementById('risposta').innerHTML='vince il bot'
			controllocapre=1
			ss1=document.getElementById("vittoria")
			ss1.play()
		}
		}
	}
	}
}function CIAO61(){
	if(cella6==''  && controllocapre==0){
	document.getElementById('ciao6').innerHTML='<img src="gioc/rub.png">'
		num++
		cella6='x'
		n6=true
		controlleroMauLinuX()
		if(controllocapre==0){
		if(cella1=='' && cella2=='' && cella3=='' && cella4=='' && cella5=='o' && cella6=='x' && cella7=='x' && cella8=='' && cella9=='' && controllocapre==0){
			num++
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
		}else{
		if(cella1=='x' && cella2=='' && cella3=='' && cella4=='' && cella5=='o' && cella6=='x' && cella7=='' && cella8=='' && cella9=='' && controllocapre==0){
			num++
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
		}else{
		if(cella1=='' && cella2=='' && cella3=='' && cella4=='' && cella5=='o' && cella6=='x' && cella7=='' && cella8=='x' && cella9==''){
			num++
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
		}else{
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}else{
		controllawinbot()
		if(wellabot==0){
		calcola()
		}else{
			document.getElementById('risposta').innerHTML='vince il bot'
			controllocapre=1
			ss1=document.getElementById("vittoria")
			ss1.play()
		}
		}
	}
	}
	}
	}
	}
}function CIAO71(){
	if(cella7=='' && controllocapre==0){
	document.getElementById('ciao7').innerHTML='<img src="gioc/rub.png">'
		num++
		cella7='x'
		n7=true
		controlleroMauLinuX()
		if(controllocapre==0){
		if(cella1=='' && cella2=='' && cella3=='x' && cella4=='' && cella5=='o' && cella6=='' && cella7=='x' && cella8=='' && cella9=='' && controllocapre==0){
			num++
			cella6='o'
			document.getElementById('ciao6').innerHTML='<img src="gioc/bar.png">'
		}else{
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''){

			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}else{
		controllawinbot()
		if(wellabot==0){
		calcola()
		}else{
			document.getElementById('risposta').innerHTML='vince il bot'
			controllocapre=1
			ss1=document.getElementById("vittoria")
			ss1.play()
		}
		}
	}
	}
	}
}function CIAO81(){
	if(cella8=='' && controllocapre==0){
	document.getElementById('ciao8').innerHTML='<img src="gioc/rub.png">'
		num++
		cella8='x'
		n8=true
		controlleroMauLinuX()
		if(controllocapre==0){
		if(cella1=='' && cella2=='' && cella3=='' && cella4=='' && cella5=='o' && cella6=='x' && cella7=='' && cella8=='x' && cella9=='' && controllocapre==0){
			num++
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
		}else{
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!=''){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}else{
		controllawinbot()
		if(wellabot==0){
		calcola()
		}else{
			document.getElementById('risposta').innerHTML='vince il bot'
			controllocapre=1
			ss1=document.getElementById("vittoria")
			ss1.play()
		}
		}
	}
	}
	}
}function CIAO91(){
	if(cella9=='' && controllocapre==0){
	document.getElementById('ciao9').innerHTML='<img src="gioc/rub.png">'
		num++
		cella9='x'
		n9=true
		controlleroMauLinuX()
		if(controllocapre==0){
		if(cella1!='' && cella2!='' && cella3!='' && cella4!='' && cella5!='' && cella6!='' && cella7!='' && cella8!='' && cella9!='' && controllocapre==0){
			document.getElementById('risposta').innerHTML='Pareggio'
			controllocapre=1
			ss2=document.getElementById("pari")
			ss2.play()
		}else{
		controllawinbot()
		if(wellabot==0){
		calcola()
		}else{
			document.getElementById('risposta').innerHTML='vince il bot'
			controllocapre=1
			ss1=document.getElementById("vittoria")
			ss1.play()
			
		}
		}
	}
	}
}

controlloDelMAurizio=0
function calcola(){
	if(num<2){
		if(cella5=='x'){
			var r=Math.floor(Math.random() * 4) + 1;
			if(r==1){
				cella1='o'
				document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(r==2){
				cella3='o'
				document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(r==3 || r==4){
				cella9='o'
				document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
				num++
			}
	}else{
			controlloDelMAurizio=1
			cella5='o'
			document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
			num++
		}
	}else{
		if(cella1=='x' && cella2=='x' && cella3!='o' && cella3!='x'){
			cella3='o'
			document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella2=='x' && cella3=='x' && cella1!='o' && cella1!='x'){
			cella1='o'
			document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella1=='x' && cella3=='x' && cella2!='o' && cella2!='x'){
			cella2='o'
			document.getElementById('ciao2').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella1=='x' && cella7=='x' && cella4!='o' && cella4!='x'){
			cella4='o'
			document.getElementById('ciao4').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella1=='x' && cella4=='x' && cella7!='o' && cella7!='x'){
			cella7='o'
			document.getElementById('ciao7').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella4=='x' && cella7=='x' && cella1!='o' && cella1!='x'){
			cella1='o'
			document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella9=='x' && cella7=='x' && cella8!='o' && cella8!='x'){
			cella8='o'
			document.getElementById('ciao8').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella8=='x' && cella7=='x' && cella9!='o' && cella9!='x'){
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella8=='x' && cella9=='x' && cella7!='o' && cella7!='x'){
			cella7='o'
			document.getElementById('ciao7').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella3=='x' && cella9=='x' && cella6!='o' && cella6!='x'){
			cella6='o'
			document.getElementById('ciao6').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella3=='x' && cella6=='x' && cella9!='o' && cella9!='x'){
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella9=='x' && cella6=='x' && cella3!='o' && cella3!='x'){
			cella3='o'
			document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella2=='x' && cella8=='x' && cella5!='o' && cella5!='x'){
			cella5='o'
			document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella2=='x' && cella5=='x' && cella8!='o' && cella8!='x'){
			cella8='o'
			document.getElementById('ciao8').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella8=='x' && cella5=='x' && cella2!='o' && cella2!='x'){
			cella2='o'
			document.getElementById('ciao2').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella1=='x' && cella9=='x' && cella5!='o' && cella5!='x'){
			cella5='o'
			document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella1=='x' && cella5=='x' && cella9!='o' && cella9!='x'){
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella9=='x' && cella5=='x' && cella1!='o' && cella1!='x'){
			cella1='o'
			document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella4=='x' && cella6=='x' && cella5!='o' && cella5!='x'){
			cella5='o'
			document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella4=='x' && cella5=='x' && cella6!='o' && cella6!='x'){
			cella6='o'
			document.getElementById('ciao6').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella6=='x' && cella5=='x' && cella4!='o' && cella4!='x'){
			cella4='o'
			document.getElementById('ciao4').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella3=='x' && cella7=='x' && cella5!='o' && cella5!='x'){
			cella5='o'
			document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella3=='x' && cella5=='x' && cella7!='o' && cella7!='x'){
			cella7='o'
			document.getElementById('ciao7').innerHTML='<img src="gioc/bar.png">'
			num++
		}else if(cella7=='x' && cella5=='x' && cella3!='o' && cella3!='x'){
			cella3='o'
			document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
			num++
		}else{
			if(controlloDelMAurizio==0){
				if(cella3==''){
					cella3='o'
					document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
					num++
				}else if(cella6==''){
					cella6='o'
					document.getElementById('ciao6').innerHTML='<img src="gioc/bar.png">'
					num++
				}else if(cella1==''){
				cella1='o'
				document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella2==''){
				cella2='o'
				document.getElementById('ciao2').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella4==''){
				cella4='o'
				document.getElementById('ciao4').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella5==''){
				cella5='o'
				document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella7==''){
				cella7='o'
				document.getElementById('ciao7').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella8==''){
				cella8='o'
				document.getElementById('ciao8').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella9==''){
				cella9='o'
				document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
				num++
			}
			}else{
				if(cella1==''){
				cella1='o'
				document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella2==''){
				cella2='o'
				document.getElementById('ciao2').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella3==''){
				cella3='o'
				document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella4==''){
				cella4='o'
				document.getElementById('ciao4').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella5==''){
				cella5='o'
				document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella6==''){
				cella6='o'
				document.getElementById('ciao6').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella7==''){
				cella7='o'
				document.getElementById('ciao7').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella8==''){
				cella8='o'
				document.getElementById('ciao8').innerHTML='<img src="gioc/bar.png">'
				num++
			}else if(cella9==''){
				cella9='o'
				document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
				num++
			}
			}
		}
	}
}

function controllawinbot(){
		if(cella1=='o' && cella2=='o' && cella3!='o' && cella3!='x'){
			cella3='o'
			document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella2=='o' && cella3=='o' && cella1!='o' && cella1!='x'){
			cella1='o'
			document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella1=='o' && cella3=='o' && cella2!='o' && cella2!='x'){
			cella2='o'
			document.getElementById('ciao2').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella1=='o' && cella7=='o' && cella4!='o' && cella4!='x'){
			cella4='o'
			document.getElementById('ciao4').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella1=='o' && cella4=='o' && cella7!='o' && cella7!='x'){
			cella7='o'
			document.getElementById('ciao7').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella4=='o' && cella7=='o' && cella1!='o' && cella1!='x'){
			cella1='o'
			document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella9=='o' && cella7=='o' && cella8!='o' && cella8!='x'){
			cella8='o'
			document.getElementById('ciao8').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella8=='o' && cella7=='o' && cella9!='o' && cella9!='x'){
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella8=='o' && cella9=='o' && cella7!='o' && cella7!='x'){
			cella7='o'
			document.getElementById('ciao7').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella3=='o' && cella9=='o' && cella6!='o' && cella6!='x'){
			cella6='o'
			document.getElementById('ciao6').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella3=='o' && cella6=='o' && cella9!='o' && cella9!='x'){
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella9=='o' && cella6=='o' && cella3!='o' && cella3!='x'){
			cella3='o'
			document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella2=='o' && cella8=='o' && cella5!='o' && cella5!='x'){
			cella5='o'
			document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella2=='o' && cella5=='o' && cella8!='o' && cella8!='x'){
			cella8='o'
			document.getElementById('ciao8').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella8=='o' && cella5=='o' && cella2!='o' && cella2!='x'){
			cella2='o'
			document.getElementById('ciao2').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella1=='o' && cella9=='o' && cella5!='o' && cella5!='x'){
			cella5='o'
			document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella1=='o' && cella5=='o' && cella9!='o' && cella9!='x'){
			cella9='o'
			document.getElementById('ciao9').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella9=='o' && cella5=='o' && cella1!='o' && cella1!='x'){
			cella1='o'
			document.getElementById('ciao1').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella4=='o' && cella6=='o' && cella5!='o' && cella5!='x'){
			cella5='o'
			document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella4=='o' && cella5=='o' && cella6!='o' && cella6!='x'){
			cella6='o'
			document.getElementById('ciao6').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella6=='o' && cella5=='o' && cella4!='o' && cella4!='x'){
			cella4='o'
			document.getElementById('ciao4').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella3=='o' && cella7=='o' && cella5!='o' && cella5!='x'){
			cella5='o'
			document.getElementById('ciao5').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella3=='o' && cella5=='o' && cella7!='o' && cella7!='x'){
			cella7='o'
			document.getElementById('ciao7').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}else if(cella7=='o' && cella5=='o' && cella3!='o' && cella3!='x'){
			cella3='o'
			document.getElementById('ciao3').innerHTML='<img src="gioc/bar.png">'
			num++
			wellabot=1
		}
		

}

function controlleroMauLinuX(){
	if (n1 == true && n2 == true && n3 == true ) {
	document.getElementById('risposta').innerHTML="vince l'utente"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if (n1 == true && n4 == true && n7 == true ) {
	document.getElementById('risposta').innerHTML="vince l'utente"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if (n7 == true && n8 == true && n9 == true) {
	document.getElementById('risposta').innerHTML="vince l'utente"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if (n3 == true && n6 == true && n9 == true) {
	document.getElementById('risposta').innerHTML="vince l'utente"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
	}
    else if (n1 == true  && n5 == true && n9 == true ) {
	document.getElementById('risposta').innerHTML="vince l'utente"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
	}
    else if (n3 == true  && n5 == true && n7 == true ) {
	document.getElementById('risposta').innerHTML="vince l'utente"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if (n2 == true && n5 == true && n8 == true ) {
	document.getElementById('risposta').innerHTML="vince l'utente"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
    else if (n4 == true && n5 == true && n6 == true ) {
	document.getElementById('risposta').innerHTML="vince l'utente"
	controllocapre=1
	ss1=document.getElementById("vittoria")
			ss1.play()
    }
}
