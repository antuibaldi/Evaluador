function generarNumero() {
    // Genera un número aleatorio entre 4 y 10
    return Math.floor(Math.random() * (10 - 4 + 1)) + 4;
}

function agregarNombre() {
    // Obtiene el nombre ingresado por el usuario
    var nombre = document.getElementById('nombre').value.trim();
    
    if (nombre !== '') {
        // Genera un número aleatorio entre 4 y 10
        var numeroAleatorio = generarNumero();

        // Crea un elemento de lista <li> con el nombre y el número
        var listItem = document.createElement('li');
        listItem.textContent = nombre + ': ' + numeroAleatorio;

        // Agrega el elemento a la lista
        document.getElementById('listaNombres').appendChild(listItem);

        // Limpia el campo de entrada
        document.getElementById('nombre').value = '';
    } else {
        alert('Por favor ingrese un nombre válido.');
    }
}
