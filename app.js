// Función para encriptar el texto ingresado
function encriptarTexto() {
    const textarea = document.getElementById('textarea_texto');
    const textoOriginal = textarea.value;
    const mensajeProcesado = document.getElementById('mensaje_procesado');
    const imagenProcesada = document.getElementById('imagen_procesada');
    const textoInstrucciones = document.getElementById('texto_instrucciones');

    // Aplicar las reglas de encriptación
    const textoEncriptado = encriptar(textoOriginal);

    // Actualizar el contenido del mensaje procesado y ocultar elementos innecesarios
    mensajeProcesado.textContent = textoEncriptado;
    imagenProcesada.style.display = 'none';
    textoInstrucciones.style.display = 'none';

    // Limpiar el textarea
    textarea.value = '';

    // Mostrar alerta de encriptación exitosa
    alert('Texto encriptado exitosamente');
}

// Función para desencriptar el texto ingresado
function desencriptarTexto() {
    const textarea = document.getElementById('textarea_texto');
    const textoOriginal = textarea.value;
    const mensajeProcesado = document.getElementById('mensaje_procesado');
    const imagenProcesada = document.getElementById('imagen_procesada');
    const textoInstrucciones = document.getElementById('texto_instrucciones');

    // Aplicar las reglas de desencriptación
    const textoDesencriptado = desencriptar(textoOriginal);

    // Actualizar el contenido del mensaje procesado y ocultar elementos innecesarios
    mensajeProcesado.textContent = textoDesencriptado;
    imagenProcesada.style.display = 'none';
    textoInstrucciones.style.display = 'none';

    // Limpiar el textarea
    textarea.value = '';

    // Mostrar alerta de desencriptación exitosa
    alert('Texto desencriptado exitosamente');
}

// Función que contiene las reglas de encriptación
function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Función que contiene las reglas de desencriptación
function desencriptar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

// Función para copiar el texto procesado al portapapeles
function copiarTexto() {
    const mensajeProcesado = document.getElementById('mensaje_procesado');
    navigator.clipboard.writeText(mensajeProcesado.textContent)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
