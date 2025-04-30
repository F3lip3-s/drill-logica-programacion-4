document.addEventListener('DOMContentLoaded', function() {
    const generarBtn = document.getElementById('generarBtn');
    generarBtn.addEventListener('click', generarSerie);
});

function generarSerie() {
    const input = document.getElementById('numeroInput');
    const errorMsg = document.getElementById('errorMsg');
    const resultadoDiv = document.getElementById('resultado');
    const serieGenerada = document.getElementById('serieGenerada');
    
    // Resetear mensajes anteriores
    errorMsg.textContent = '';
    resultadoDiv.style.display = 'none';
    
    // Obtener y validar el valor de entrada
    const valor = input.value.trim();
    
    if (valor === '') {
        errorMsg.textContent = 'Por favor ingrese un número.';
        return;
    }
    
    const numero = Number(valor);
    
    if (isNaN(numero)) {
        errorMsg.textContent = 'Error: Debe ingresar un número válido.';
        return;
    }
    
    if (numero <= 0) {
        errorMsg.textContent = 'Error: El número debe ser positivo.';
        return;
    }
    
    if (!Number.isInteger(numero)) {
        errorMsg.textContent = 'Error: Debe ingresar un número entero.';
        return;
    }
    
    // Generar la serie de Fibonacci
    const serie = generarFibonacci(numero);
    
    // Mostrar el resultado
    serieGenerada.textContent = serie.join(', ') + '.';
    resultadoDiv.style.display = 'block';
    
    // También mostrar en consola
    console.log(`Serie de Fibonacci para ${numero}:`);
    console.log(serie.join(', ') + '.');
}

function generarFibonacci(n) {
    let serie = [];
    if (n >= 1) serie.push(0);
    if (n >= 2) serie.push(1);
    
    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    
    return serie;
}