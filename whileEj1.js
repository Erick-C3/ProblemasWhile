/*

    Front
        - Texto informando lo requerido
        - Un lugar para ingresar un numero
        - Un boton para verificar el numero o enter o lo que sirva
        - Respuesta si adivino o no

    Logica
        + Definir el numero correcto: 7
        - tomar el valor ingresado
        - Verificar si el usuario adivino el numero
        - Mostrar un resultado de la verificacion correcta
            - tiene que ser una imagen
 */


const NUM_CORRECTO = 7;
const IMG_GANASTE = "/img/ganaste.gif";
//un numero distinto a 7
const NUM_INGRESADO_DEF = 1;

let numero_ingresado = NUM_INGRESADO_DEF;

// mientras numero ingresado no sea el 7 o numero correcto
while( numero_ingresado != NUM_CORRECTO ){

    //instruccion que altere el estado de la condicion
    numero_ingresado = prompt("Trata de adivinar el numero");
    if(numero_ingresado == NUM_CORRECTO){
        //muestro la imagen ganadora
        document.querySelector("#respuesta").innerHTML = `
            <h3> GANASTE </h3>
            <img src=${IMG_GANASTE}>
        `;
    }
}