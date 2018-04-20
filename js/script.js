$(document).ready(function(){
    let inventaire = [];
    let sac = 0;
    if ($(".sac").click(function(){
        inventaire = [
            "Hache",
            "Carte à jouer"
        ];
        sac = 1;
        inventaire.push();
        console.log(sac); // Doit être égal à 1.
        console.log(inventaire);
    }));

    if ($(".porte").click(function(){
        if (sac === 1) {
            $(".porte").attr("href", "interieur.php");
        }else{
            alert("Il vous manque quelque chose...");
        }
    }));
});
