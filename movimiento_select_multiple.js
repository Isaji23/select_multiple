const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const botonMover1 = document.getElementById('botonMover1');
const botonMover2 = document.getElementById('botonMover2');
const select3 = document.getElementById('select3');
const select4 = document.getElementById('select4');

botonMover1.addEventListener('click', () => {moverSeleccionados(select1, select2)});
botonMover2.addEventListener('click', () => {moverSeleccionados(select2, select1)});

select3.addEventListener('input', () => {
    moverSeleccionados(select3, select4);
    deseleccionarOpciones(select4);
});
select4.addEventListener('input', () => {
    moverSeleccionados(select4, select3);
    deseleccionarOpciones(select3);
});

function moverSeleccionados(origen, destino) {
    let opcionesSeleccionadas = [...origen.selectedOptions];

    if(opcionesSeleccionadas.length === 0) {
        return;
    }
    
    for(opcion of opcionesSeleccionadas) {
        destino.appendChild(opcion)
    }
}

// para poder moverlas de vuelta directamente
function deseleccionarOpciones(target) {
    let opcionesSeleccionadas = [...target.selectedOptions];

    if(opcionesSeleccionadas.length === 0) {
        return;
    }
    
    for(opcion of opcionesSeleccionadas) {
        opcion.selected = false;
    }
}