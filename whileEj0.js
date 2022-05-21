const SI_ME_QUEME = true;
const NO_ME_QUEME = false;

let meQueme = NO_ME_QUEME;

let segundos = 0;
//Regla para el for: lo usamos cuando SI sabemos la cantidad deiteraciones de antemano
// Regla para el while: Lo usamos cuando NO sabemos la cantidad de iteraciones de antemano 
//mientras no me queme entonces seguir sosteniendo
// !NO_ME_QUEME -ES IGUAL A- true 
// \n  es como presionar enter
while( !meQueme){
    meQueme =  confirm("Te quemaste?\nSegundos: "+segundos); // esto devuelve un booleano
    //meQueme = prompt("ingresa false o true"); esto devuelve un string
    segundos++;
}