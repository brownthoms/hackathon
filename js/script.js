$(document).ready(function(){
    var sac = 0;
    if ($(".sac").click(function(){
        sac = 1;
        console.log(sac); // Doit être égal à 1.
    }));

    if ($(".porte").click(function(){
        if (sac === 1) {
            $(".porte").attr("href", "interieur.php");
        }else{
            alert("Vous avez oublié vos affaires !");
        }
    }));
});
