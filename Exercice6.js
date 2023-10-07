"use strict"

function NB_cara(mot)
{
    return mot.length
}

function pair(chiffre)
{
    return chiffre%2 == 0
}

let student = {
    names : "moi",
    FavoriteFood : "pate bolo",
    city : "Vésinet",
};

let nb_lettre = NB_cara(student.names) + NB_cara(student.FavoriteFood) + NB_cara(student.city); 


if (pair(nb_lettre))
{
    console.log("Pair")
}
else 
{
    console.log("Impaire")
}
