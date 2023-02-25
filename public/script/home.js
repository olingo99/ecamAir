function computeTotal() {
    console.log("computeTotal");
    let nb_passenger = document.getElementById("nb_passenger").value;
    let display = document.getElementById("displayTotal");
    let assurance = document.getElementById("insurance").checked;
    let total = (assurance  ? 20 : 0) + nb_passenger * 45 ;
    display.innerHTML = total;
    console.log(assurance); 

}