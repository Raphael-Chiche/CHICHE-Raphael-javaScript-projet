const guess = 42
const minijeux = document.querySelector(".minijeux");
let compteur = 0 // création d'un compteur pour voir a partir de quand il a trouvé + utilisation pour un indice au bout de la 3eme tentative
let chiffre //let car la valeur de chiffre vas changer

minijeux.addEventListener("click", function () {
    while (guess !== chiffre) {     // Tant que le numéro à deviner est différent du chiffre de l'utilisateur, on execute 
        chiffre = prompt("Choisissez un nombre.") * 1      // On demande à l'utilisateur un nombre
        if (chiffre > guess) {      // Si le nombre entré est supérieur au guess, on avertis que le guess est inférieur et on ajoute 1 au compteur
            alert("C'est moins !")
            compteur = compteur + 1
        }
        if (chiffre < guess) {      // Si le nombre entré est inférieur au guess, on avertis que le guess est supérieur et on ajoute 1 au compteur
            alert("C'est plus !")
            compteur = compteur + 1
        }
        if (compteur === 3) {  // Dés la troisieme tentative, il donne le premiere indice
            alert("Indice 1 : le nombre se situe entre 30 et 50.")
        }
        if (compteur === 6) {  // Dés la sixième tentative, il donne le deuxieme indice
            alert("Indice 2 : La réponse à la vie...")
        }


    }
    alert("Bravo, vous avez trouvé le bon nombre!") // On sort de la boucle et on averti qu'il a trouvé le bon numéro
})
