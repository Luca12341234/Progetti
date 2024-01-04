

window.onload=function inizio(){

num1=document.getElementById("dodo")
num2=document.getElementById("rere")
num3=document.getElementById("mimi")
num4=document.getElementById("fafa")
num5=document.getElementById("solsol")
num6=document.getElementById("lala")
num7=document.getElementById("sisi")

num11=document.getElementById("A")
num22=document.getElementById("B")
num33=document.getElementById("C")
num44=document.getElementById("D")
num55=document.getElementById("E")
num66=document.getElementById("F")
num77=document.getElementById("G")
document.addEventListener("keyup", function(e){
		if(e.keyCode==65){
		do2()
		num1.focus()
	num1.style.background ="blue"
	num11.style.background ="blue"
	setTimeout("controlla('dodo')",200)
	setTimeout("controlla1('A')",200)
		}})

document.addEventListener("keyup", function(e){
		if(e.keyCode==83){
		re2()
		num2.focus()
	    num2.style.background ="blue"
		num22.style.background ="blue"
	setTimeout("controlla('rere')",200)
	setTimeout("controlla1('B')",200)
	}})
	
document.addEventListener("keyup", function(e){
		if(e.keyCode==68){
		mi2()
		num3.focus()
	num3.style.background ="blue"
	num33.style.background ="blue"
	setTimeout("controlla('mimi')",200)
	setTimeout("controlla1('C')",200)
	}})
document.addEventListener("keyup", function(e){
		if(e.keyCode==70){
		fa2()
		num4.focus()
	num4.style.background ="blue"
	num44.style.background ="blue"
setTimeout("controlla('fafa')",200)
setTimeout("controlla1('D')",200)
	}})
document.addEventListener("keyup", function(e){
		if(e.keyCode==71){
		sol2()
		num5.focus()
	num5.style.background ="blue"
	num55.style.background ="blue"
	setTimeout("controlla('solsol')",200)
	setTimeout("controlla1('E')",200)
	}})
document.addEventListener("keyup", function(e){
		if(e.keyCode==72){
		la2()
		num6.focus()
		num6.style.background ="blue"
		num66.style.background ="blue"
	setTimeout("controlla('lala')",200)
	setTimeout("controlla1('F')",200)
	}})
document.addEventListener("keyup", function(e){
		if(e.keyCode==74){
		si2()
		num7.focus()
	num7.style.background ="blue"
	num77.style.background ="blue"
	setTimeout("controlla('sisi')",200)
	setTimeout("controlla1('G')",200)
	}})

}
function do2(){
	num1=document.getElementById("dodo")
num2=document.getElementById("rere")
num3=document.getElementById("mimi")
num4=document.getElementById("fafa")
num5=document.getElementById("solsol")
num6=document.getElementById("lala")
num7=document.getElementById("sisi")

num11=document.getElementById("A")
num22=document.getElementById("B")
num33=document.getElementById("C")
num44=document.getElementById("D")
num55=document.getElementById("E")
num66=document.getElementById("F")
num77=document.getElementById("G")
			ss1=document.getElementById("do1")
			ss1.play()	
			num1.style.background ="blue"
	num11.style.background ="blue"
	setTimeout("controlla('dodo')",200)
	setTimeout("controlla1('A')",200)
			}
function re2(){
	num1=document.getElementById("dodo")
num2=document.getElementById("rere")
num3=document.getElementById("mimi")
num4=document.getElementById("fafa")
num5=document.getElementById("solsol")
num6=document.getElementById("lala")
num7=document.getElementById("sisi")

num11=document.getElementById("A")
num22=document.getElementById("B")
num33=document.getElementById("C")
num44=document.getElementById("D")
num55=document.getElementById("E")
num66=document.getElementById("F")
num77=document.getElementById("G")
	ss2=document.getElementById("re1")
	ss2.play()
	num2.style.background ="blue"
	num22.style.background ="blue"
	setTimeout("controlla('rere')",200)
	setTimeout("controlla1('B')",200)
}
function mi2(){
num3=document.getElementById("mimi")

num33=document.getElementById("C")

	ss3=document.getElementById("mi1")
	ss3.play()
	num3.style.background ="blue"
	num33.style.background ="blue"
	setTimeout("controlla('mimi')",200)
	setTimeout("controlla1('C')",200)
}
function fa2(){
	num1=document.getElementById("dodo")
num2=document.getElementById("rere")
num3=document.getElementById("mimi")
num4=document.getElementById("fafa")
num5=document.getElementById("solsol")
num6=document.getElementById("lala")
num7=document.getElementById("sisi")

num11=document.getElementById("A")
num22=document.getElementById("B")
num33=document.getElementById("C")
num44=document.getElementById("D")
num55=document.getElementById("E")
num66=document.getElementById("F")
num77=document.getElementById("G")
	ss4=document.getElementById("fa1")
	ss4.play()
	num4.style.background ="blue"
	num44.style.background ="blue"
	setTimeout("controlla('fafa')",200)
	setTimeout("controlla1('D')",200)
}
function sol2(){
	num1=document.getElementById("dodo")
num2=document.getElementById("rere")
num3=document.getElementById("mimi")
num4=document.getElementById("fafa")
num5=document.getElementById("solsol")
num6=document.getElementById("lala")
num7=document.getElementById("sisi")

num11=document.getElementById("A")
num22=document.getElementById("B")
num33=document.getElementById("C")
num44=document.getElementById("D")
num55=document.getElementById("E")
num66=document.getElementById("F")
num77=document.getElementById("G")
	ss5=document.getElementById("sol1")
	ss5.play()
	num5.style.background ="blue"
	num55.style.background ="blue"
	setTimeout("controlla('solsol')",200)
	setTimeout("controlla1('E')",200)
}
function la2(){
	num1=document.getElementById("dodo")
num2=document.getElementById("rere")
num3=document.getElementById("mimi")
num4=document.getElementById("fafa")
num5=document.getElementById("solsol")
num6=document.getElementById("lala")
num7=document.getElementById("sisi")

num11=document.getElementById("A")
num22=document.getElementById("B")
num33=document.getElementById("C")
num44=document.getElementById("D")
num55=document.getElementById("E")
num66=document.getElementById("F")
num77=document.getElementById("G")
	ss6=document.getElementById("la1")
	ss6.play()
	num6.style.background ="blue"
	num66.style.background ="blue"
	setTimeout("controlla('lala')",200)
	setTimeout("controlla1('F')",200)
}
function si2(){
	num1=document.getElementById("dodo")
num2=document.getElementById("rere")
num3=document.getElementById("mimi")
num4=document.getElementById("fafa")
num5=document.getElementById("solsol")
num6=document.getElementById("lala")
num7=document.getElementById("sisi")

num11=document.getElementById("A")
num22=document.getElementById("B")
num33=document.getElementById("C")
num44=document.getElementById("D")
num55=document.getElementById("E")
num66=document.getElementById("F")
num77=document.getElementById("G")
	ss7=document.getElementById("si1")
	ss7.play()
	num7.style.background ="blue"
	num77.style.background ="blue"
	setTimeout("controlla('sisi')",200)
	setTimeout("controlla1('G')",200)
}
function controlla(we){
		wewe=document.getElementById(we)
		wewe.style.background ="red"
}
function controlla1(wee){
		wewe=document.getElementById(wee)
		wewe.style.background ="red"
}