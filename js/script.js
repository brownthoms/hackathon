$(document).ready(function(){

    // Extérieur gare.
    var sac = 0;

    if ($(".sac").click(function(){
        sac = 1;
        console.log(sac); // Doit être égal à 1.

        if(window.localStorage){
            window.localStorage.setItem("objet1", "Hache");
            window.localStorage.setItem("objet2", "Cartes à jouer");
	        console.log(window.localStorage["objet1"]);
            console.log(window.localStorage["objet2"]);

        };
    }));

    if ($(".porte").click(function(){
        if (sac === 1) {
            $(".porte").attr("href", "hall.php");
        }else{
            alert("Il vous manque quelque chose...");
        }
    }));

    // Zone de restauration.
    let barman = 0;
    $(".barman").click(function(){
        barman = 1;
        console.log(barman); // Doit être égal à 1.
        alert("Bonjour, veuillez sélectionner ce que vous souhaiter consommer.")
    });

    let cafetiere = 0;
    if ($(".cafetiere").click(function(){
        if (barman === 1) {
            cafetiere = 1;
            alert("Vous avez consommé du café.");
            if ((cafetiere === 1) && (kiwi === 1)){
                alert("Vous voila un peu mieux !");
            }
        }else{
            alert("Le barman vous regarde bizarrement.");
        }
    }));

    let kiwi = 0;
    if ($(".kiwi").click(function(){
        if (barman === 1) {
            kiwi = 1;
            alert("Vous avez consommé des kiwis.")
            if ((cafetiere === 1) && (kiwi === 1)){
                alert("Vous voila un peu mieux !");
            }
        }else{
            alert("Le barman vous regarde bizarrement.");
        }
    }));

});
