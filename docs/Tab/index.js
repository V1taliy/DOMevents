function runCar(evt, carModel) {
    var i, tab, links;
    tab = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }
    links = document.getElementsByClassName("tablinks");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(carModel).style.display = "block";
    evt.currentTarget.className += " active";
}