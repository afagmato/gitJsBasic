
/*
Piedra = 1 
Gana a 3Tijera 
Papel = 2
Gana a 1Piedra
Tijera = 3
Gana a 2Papel
*/

// Usando condicional IF
/*
var edat = 21;

if (edat < 18) {
  console.log("Ets menor d'edat");
} else if (edat >= 18 && edat < 21) {
  console.log("Ets major d'edat, però no tens accés total");
} else {
  console.log("Tens accés total");
}
*/
var tiroJugador = 1
var tiroPC = 3
function piedraPapelTijera(tiroJugador, tiroPC){ 
    if (tiroJugador == 1 && tiroPC == 3) {
        console.log("Has Ganado");
    }   else if(tiroJugador == 2 && tiroPC == 1) {
        console.log("Has Ganado");
    }   else if(tiroJugador == 3 && tiroPC == 2) {
        console.log("Has Ganado");
    }   else if(tiroJugador == tiroPC) {
        console.log("Habéis empatado")
    }   else {
        console.log("Has Perdido");
    }
} 

piedraPapelTijera(tiroJugador, tiroPC);

//Usando condicional Switch
/* 
var numero = 1; 
var resultado; 

 Switch compara con un === por esa razón los elementos tiene que ser idénticos 

switch (numero) {
    case 1: 
        resultado = "Sí es uno";
        break;
    case 10: 
        resultado = "Sí es diez";
        break;
    case 100:
        resultado = "Sí es cien";
        break;
    default:   
        resultado = "No match"; 
}

console.log(resultado); 
*/
var resultado;
function piedraPapel(tiroJugador, tiroPC) {
    switch (true) {
        case tiroJugador == 1 && tiroPC == 3:
            resultado = "Has ganado";
            break;
        
        case tiroJugador == 2 && tiroPC == 1:
            resultado = "Has ganado";
            break;
    
        case tiroJugador == 3 && tiroPC == 2:
            resultado = "Has ganado";
            break;
    
            case tiroJugador == tiroPC:
                resultado = "Habéis empatado";
                break;
    
        default:
            resultado = "Has perdido"
            break;
    }
}

piedraPapel(tiroJugador, tiroPC);
console.log(resultado);