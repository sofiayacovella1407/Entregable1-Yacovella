// Declaración de variables y constantes
const exchangeRates = {
    USD: {
        EUR: 0.96,
        GBP: 0.79,
        ARS: 1169.50,
        BRL: 6.50
    },
    EUR: {
        USD: 1.04,
        GBP: 0.83,
        ARS: 1217.33,
        BRL: 6.50
    },
    ARS: {
        USD: 0.0009,
        EUR: 0.0008,
        GBP: 0.0007,
        BRL: 0.0053
    },
    BRL: {
        USD: 0.16,
        EUR: 0.15,
        GBP: 0.13,
        ARS: 190.00
    },
};

// Array de monedas disponibles
const monedasDisponibles = ['USD', 'EUR', 'GBP', 'ARS', 'BRL'];

// Función para realizar la conversión
function convertirMoneda(monedaOrigen, monedaDestino, cantidad) {
    const tasaCambio = exchangeRates[monedaOrigen][monedaDestino];
    const resultado = cantidad * tasaCambio;
    alert(La cantidad de ${cantidad} ${monedaOrigen} es igual a ${resultado.toFixed(2)} ${monedaDestino}.\nTipo de cambio: 1 ${monedaOrigen} = ${tasaCambio} ${monedaDestino});
}

// Función para verificar si una moneda es válida utilizando un array
function verificarMonedaValida(moneda) {
    // Verifica si la moneda está en el array
    while (!monedasDisponibles.includes(moneda)) {
        moneda = prompt("Moneda no válida. Ingrese una moneda válida (USD, EUR, GBP, ARS, BRL):").toUpperCase();
    }
    return moneda;
}

// Función para obtener una cantidad válida
function obtenerCantidadValida() {
    let cantidad;
    do {
        cantidad = parseFloat(prompt("Ingrese la cantidad a convertir:"));
    } while (isNaN(cantidad) || cantidad <= 0);
    return cantidad;
}

// Función para mostrar las tasas de cambio disponibles
function mostrarTasasCambio() {
    let mensaje = "Tasas de cambio disponibles:\n";
    for (let monedaOrigen in exchangeRates) {
        mensaje += ${monedaOrigen}:\n;
        for (let monedaDestino in exchangeRates[monedaOrigen]) {
            mensaje += `  ${monedaDestino}: ${exchangeRates[monedaOrigen][monedaDestino]}\n`;
        }
    }
    alert(mensaje);
}

// Función para verificar si las monedas son diferentes
function verificarMonedasDiferentes(monedaOrigen, monedaDestino) {
    if (monedaOrigen === monedaDestino) {
        alert("La moneda de origen y destino deben ser diferentes.");
        return false;
    } else {
        return true;
    }
}

// Función que usa un switch para mostrar el menú
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Convertir Moneda\n2. Ver Tasas de Cambio\n3. Salir").trim();
        switch (opcion) {
            case '1':
                manejarConversion();
                break;
            case '2':
                mostrarTasasCambio();
                break;
            case '3':
                if (confirm("¿Estás seguro que deseas salir?")) {
                    alert("Gracias por usar el simulador de conversión de monedas.");
                    return;  // Salir del ciclo y terminar el programa
                } else {
                    // No hacer nada y continuar en el menú
                }
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción del 1 al 3.");
        }
    } while (opcion !== '3');
}

// Función principal para manejar las conversiones
function manejarConversion() {
    const monedaOrigen = prompt("Ingrese la moneda de origen (USD, EUR, GBP, ARS, BRL):").toUpperCase();
    const monedaDestino = prompt("Ingrese la moneda de destino (USD, EUR, GBP, ARS, BRL):").toUpperCase();

    const monedaValidaOrigen = verificarMonedaValida(monedaOrigen);
    const monedaValidaDestino = verificarMonedaValida(monedaDestino);

    if (!verificarMonedasDiferentes(monedaValidaOrigen, monedaValidaDestino)) {
        return;
    }

    const cantidad = obtenerCantidadValida();
    convertirMoneda(monedaValidaOrigen, monedaValidaDestino, cantidad);
}

// Llamada a la función para mostrar el menú
mostrarMenu();