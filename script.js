function Kup() {
    var txt
    if (confirm("Potwierdź płatność")) {
        txt = "Dodano do kosza";
    } else {
        txt = "Anulowano"
    }
    element = document.querySelector(".zakup").innerHTML = txt;
}
