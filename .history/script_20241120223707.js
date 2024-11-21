
const formElements = document.querySelectorAll('form input, form textarea, form select, form datalist');
const tableBody = document.querySelector('table tbody');


function updateTable() {
    tableBody.innerHTML = ''; // Limpia la tabla
    formElements.forEach((element) => {
        const fieldName = element.previousElementSibling?.textContent || element.name;
        const fieldValue = element.value;
        if (fieldName && fieldValue) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${fieldName}</td><td>${fieldValue}</td>`;
            tableBody.appendChild(newRow);
        }
    });
}

// Añadir eventos a los campos del formulario
formElements.forEach((element) => {
    element.addEventListener('input', updateTable);
});
// Alternar entre CV resumido y completo
const toggleCvButton = document.getElementById('leer mas-cv');
const cvResumido = document.getElementById('cv-resumido');
const cvCompleto = document.getElementById('cv-completo');

toggleCvButton.addEventListener('click', () => {
    const isHidden = cvCompleto.style.display === 'none';
    cvCompleto.style.display = isHidden ? 'block' : 'none';
    toggleCvButton.textContent = isHidden ? 'Leer menos' : 'Leer más';
});

// Selecciona el botón y el contenido adicional
const botonLeerMas = document.getElementById("leer-mas");
const contenidoCompleto = document.getElementById("contenido-completo");

// Agrega un evento al botón
botonLeerMas.addEventListener("click", () => {
    // Alterna la visibilidad del contenido adicional
    if (contenidoCompleto.style.display === "none") {
        contenidoCompleto.style.display = "block";
        botonLeerMas.textContent = "Leer menos"; // Cambia el texto del botón
    } else {
        contenidoCompleto.style.display = "none";
        botonLeerMas.textContent = "Leer más"; // Cambia el texto del botón
    }
});
