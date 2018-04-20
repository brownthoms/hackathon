$(document).ready(function(){
    // Extérieur gare.
    var sac = 0;
    if ($(".sac").click(function(){
        sac = 1;
        console.log(sac); // Doit être égal à 1.
    }));

    if ($(".porte").click(function(){
        if (sac === 1) {
            $(".porte").attr("href", "interieur.php");
        }else{
            alert("Il vous manque quelque chose...");
        }
    }));

    // Zone de restauration.
    let barman = 0;
    $(".barman").click(function(){
        barman = 1;
        console.log(barman); // Doit être égal à 1.
        alert("Bonjour, Que puis-je pour vous ?")
    });

    if ($(".cafetiere").click(function(){
        if (barman === 1) {
            alert("Vous avez bu un café");
        }else{
            alert("Parlez au barman");
        }
    }));

    if ($(".kiwi").click(function(){
        if (barman === 1) {
            $(".kiwi").attr("href", "../index.php");
        }else{
            alert("Parlez au barman");
        }
    }));

});
