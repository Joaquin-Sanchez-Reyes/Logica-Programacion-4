function calcularFibonacci() {
    let inputNumero = document.getElementById("numero").value;
    let num = parseInt(inputNumero);

    if (isNaN(num) || num <= 0) {
        alert("Por favor, ingresa un número válido mayor que 0.");
        return;
    }

    let fibonacci = [0, 1];
    
    for (let i = 2; i < num; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    let resultadoTexto = fibonacci.slice(0, num).join(", ");
    document.getElementById("resultado").textContent = "Serie: " + resultadoTexto;
    console.log("Serie de Fibonacci:", resultadoTexto);
}
