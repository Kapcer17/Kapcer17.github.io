function testowaFunkcja() {
  var txt;
  if (confirm("Kliknij OK, jeśli zrozumiałeś/aś")) {
    txt = "Brawo!";
  } else {
    txt = "Musisz jeszcze poćwiczyć";
  }
  document.getElementById("demo").innerHTML = txt;
}