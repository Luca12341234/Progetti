 alert("Il codice è protetto da copyrigth e non può essere replicato")
function wellone() {
  var script = document.getElementById('dynamic-script');
  if (script) {
    script.parentNode.removeChild(script);
  }

  var we = document.getElementById('olla').value;
  we = '<w>' + we;

  we = we.replaceAll("<w>", "<br>");
  we = we.replaceAll("<w1", "<h1");
  we = we.replaceAll("<w2", "<h2");
  we = we.replaceAll("<w3", "<h3");
  we = we.replaceAll("<w4", "<h4");
  we = we.replaceAll("<w5", "<h5");
  we = we.replaceAll("<w6", "<h6");

  we = we.replaceAll("<wle", "<b");
  we = we.replaceAll("<wel", "<i");
  we = we.replaceAll("<wtell", "<u");
  we = we.replaceAll("<wep", "<sup");
  we = we.replaceAll("<web", "<sub");
  we = we.replaceAll("<wequee", "<marquee");
  we = we.replaceAll("<wer", "<pre");
  we = we.replaceAll("<wa", "<a");
  we = we.replaceAll("<wimg", "<img");
  we = we.replaceAll("<wput", "<input");

  we = we.replaceAll("<wdiv", "<div");
  we = we.replaceAll("<wet", "<blockquote");
  we = we.replaceAll("<wu", "<ul");
  we = we.replaceAll("<wo", "<ol");
  we = we.replaceAll("<wi", "<li");
  we = we.replaceAll("<wtable", "<table");
  we = we.replaceAll("<wb", "<tr");
  we = we.replaceAll("<wh", "<th");
  we = we.replaceAll("<wp", "<td");

  //chiusura
  we = we.replaceAll("<cw1", "</h1");
  we = we.replaceAll("<cw2", "</h2");
  we = we.replaceAll("<cw3", "</h3");
  we = we.replaceAll("<cw4", "</h4");
  we = we.replaceAll("<cw5", "</h5");
  we = we.replaceAll("<cw6", "</h6");

  we = we.replaceAll("<cwle", "</b");
  we = we.replaceAll("<cwel", "</i");
  we = we.replaceAll("<cwtell", "</u");
  we = we.replaceAll("<cwep", "</sup");
  we = we.replaceAll("<cweb", "</sub");
  we = we.replaceAll("<cwequee", "</marquee");
  we = we.replaceAll("<cwer", "</pre");

  we = we.replaceAll("<cwdiv", "</div");
  we = we.replaceAll("<cwet", "</blockquote");
  we = we.replaceAll("<cwu", "</ul");
  we = we.replaceAll("<cwo", "</ol");
  we = we.replaceAll("<cwi", "</li");
  we = we.replaceAll("<cwtable", "</table");
  we = we.replaceAll("<cwb", "</tr");
  we = we.replaceAll("<cwh", "</th");
  we = we.replaceAll("<cwp", "</td");
  we = we.replaceAll("<cwa", "</a");

  we = we.replaceAll("w1{", "h1{");
we = we.replaceAll("w2{", "h2{");
we = we.replaceAll("w3{", "h3{");
we = we.replaceAll("w4{", "h4{");
we = we.replaceAll("w5{", "h5{");
we = we.replaceAll("w6{", "h6{");

we = we.replaceAll("wle{", "b{");
we = we.replaceAll("wel{", "i{");
we = we.replaceAll("wtell{", "u{");
we = we.replaceAll("wep{", "sup{");
we = we.replaceAll("web{", "sub{");
we = we.replaceAll("wequee{", "marquee{");
we = we.replaceAll("wer{", "pre{");
we = we.replaceAll("wa{", "a{");
we = we.replaceAll("wimg{", "img{");
we = we.replaceAll("wput{", "input{");

we = we.replaceAll("wdiv{", "div{");
we = we.replaceAll("wet{", "blockquote{");
we = we.replaceAll("wu{", "ul{");
we = we.replaceAll("wo{", "ol{");
we = we.replaceAll("wi{", "li{");
we = we.replaceAll("wtable{", "table{");
we = we.replaceAll("wb{", "tr{");
we = we.replaceAll("wh{", "th{");
we = we.replaceAll("wp{", "td{");


  document.getElementById('console').innerHTML = we;

  script = document.createElement("script");
  script.id = "dynamic-script";
  we = document.getElementById('olla2').value;
  we = we.replaceAll("weif(", "if(");
  we = we.replaceAll("well(", "while(");
  we = we.replaceAll("wor(", "for(");
  we = we.replaceAll("w.", "document.");
  we = we.replaceAll("w(", "getElementById(");

  script.type = "text/javascript";
  document.body.appendChild(script);
  var nodo = document.createTextNode(we);
  script.appendChild(nodo);
}
