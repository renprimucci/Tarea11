var topping = "Kinder";
var precio
var helado = 20;

if (topping == "Oreo") {
    precio = 10
    console.log ("El precio del topping es 10")
}
else if (topping == "KitKat" ) {
    precio = 15
    console.log ("El precio del topping es 15")
}
else if (topping == "Kinder" ) {
    precio = 25
    console.log ("El precio del topping es 25")
}
else {
console.log ("No tenemos ese tippong")
}
var precioFinal = precio + helado;
console.log ("El precio final sera" + " " + precioFinal)



let menu = "";
switch (menu) {
    case "Carne":
        alert ("Para acmopañar su menu le recomendamos como bebida un Vino Tinto");
        break;
    case "Pescado":
        alert ("Para acmopañar su menu le recomendamos como bebida un Vino blanco");
        break;
    case "Verduras":
        alert ("Para acmopañar su menu le recomendamos como bebida agua sin gas");
        break;   
    default:
        alert ("Elija Carne, Pescado o Verduras") 
}


let arraytarea = []
    
for (i = 0 ; i <= 2; i++) {
    arraytarea.push(prompt("ingresa un dato"))
    console.log (arraytarea[i])
}

let numero = 0;
while (numero < 11) {
    console.log ("tu numero es menor a 11")
    numero++;
}