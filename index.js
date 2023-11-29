let nomeHeroi = "Giba Cat"
let quantXp = 10000

if (quantXp <= 1000) {
    heroiNivel = "Ferro";
} 

if (quantXp > 1000 && quantXp < 2001) {
    heroiNivel = "Bronze";
} 

if (quantXp > 2000 && quantXp < 6001) {
    heroiNivel = "Prata";
}

if (quantXp > 6000 && quantXp < 7001) {
    heroiNivel = "Ouro";
} 

if (quantXp > 7000 && quantXp < 8001) {
    heroiNivel = "Platina";
} 

if (quantXp > 8000 && quantXp < 9001) {
    heroiNivel = "Ascendente";
} 

if (quantXp > 9000 && quantXp < 10001) {
    heroiNivel = "Imortal";
} 

if (quantXp >= 10001) {
    heroiNivel = "Radiante";
} 



console.log ("O Herói de nome " + nomeHeroi + " está no nível  " + heroiNivel)
