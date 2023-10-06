async function cargarListadoSucursal() {
    let response = await fetch("html/central/sucursal/listado.html");
    let html = await response.text();
    document.getElementById('contenido').innerHTML = html;
    mostrarRegistros();
}

async function cargarEditarSucursal() {
    let response = await fetch("html/central/sucursal/editar.html");
    let html = await response.text();
    document.getElementById('contenido').innerHTML = html;
}

async function cargarAgregarSucursal() {
    let response = await fetch("html/central/sucursal/agregar.html");
    let html = await response.text();
    document.getElementById('contenido').innerHTML = html;
}

var registros = sucursales;

var ultimoId = 10;

function buscarSucursales2() {
    var terminoBusqueda = document.getElementById('txtBuscarSucural').value.toLowerCase();

    // Filtrar los registros que coinciden con el término de búsqueda
    var registrosCoincidentes = registros.filter(function (registro) {
        // Realiza una búsqueda case-insensitive (sin distinguir mayúsculas y minúsculas)
        return (
            registro.id.toString().includes(terminoBusqueda) ||
            registro.nombre.toLowerCase().includes(terminoBusqueda)
        );
    });

    if (registrosCoincidentes.length > 0) {
        // Si se encontraron registros coincidentes, toma el primer registro
        var registroEncontrado = registrosCoincidentes[0];

        // Actualizar los campos de entrada con la información del registro encontrado
        document.getElementById('id').value = registroEncontrado.id;
        document.getElementById('txtNomSuc').value = registroEncontrado.nombre;
        document.getElementById('txtNomTitu').value = registroEncontrado.titular;
        document.getElementById('txtRfc').value = registroEncontrado.rfc;
        document.getElementById('txtDom').value = registroEncontrado.domicilio;
        document.getElementById('txtCol').value = registroEncontrado.colonia;
        document.getElementById('txtCiudad').value = registroEncontrado.ciudad;
        document.getElementById('txtEst').value = registroEncontrado.estado;
        document.getElementById('txtCp').value = registroEncontrado.codigoPostal;
        document.getElementById('txtTel').value = registroEncontrado.telefono;
        document.getElementById('txtlong').value = registroEncontrado.longitud;
        document.getElementById('txtLat').value = registroEncontrado.latitud;
        document.getElementById('estatus').checked = registroEncontrado.estatus === 1; // Marcar el checkbox según el estatus del registro

    } else {
        // Si no se encontraron registros coincidentes, limpiar los campos de entrada
        document.getElementById('id').value = '';
        document.getElementById('txtNomSuc').value = '';
        document.getElementById('txtNomTitu').value = '';
        document.getElementById('txtRfc').value = '';
        document.getElementById('txtDom').value = '';
        document.getElementById('txtCol').value = '';
        document.getElementById('txtCiudad').value = '';
        document.getElementById('txtEst').value = '';
        document.getElementById('txtCp').value = '';
        document.getElementById('txtTel').value = '';
        document.getElementById('txtlong').value = '';
        document.getElementById('txtLat').value = '';
        document.getElementById('estatus').checked = false; // Desmarcar el checkbox ya que no hay registro coincidente
    }
}



function editarSucursal() {
    var idSucursalSeleccionada = document.getElementById('id').value;
    console.log(idSucursalSeleccionada);
    if (idSucursalSeleccionada) {
        Swal.fire({
            title: '¿Estás seguro de editar esta sucursal?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Editar',
            denyButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                var camposEditable = document.querySelectorAll('#datosSucursal input[type="text"], #estatus');


                camposEditable.forEach(function (campo) {
                    campo.removeAttribute('disabled');
                });

                // Habilitar los campos de entrada para edición
                document.getElementById('txtNomSuc').removeAttribute('disabled');
                document.getElementById('txtNomTitu').removeAttribute('disabled');
                document.getElementById('txtRfc').removeAttribute('disabled');
                document.getElementById('txtDom').removeAttribute('disabled');
                document.getElementById('txtCol').removeAttribute('disabled');
                document.getElementById('txtCiudad').removeAttribute('disabled');
                document.getElementById('txtEst').removeAttribute('disabled');
                document.getElementById('txtCp').removeAttribute('disabled');
                document.getElementById('txtTel').removeAttribute('disabled');
                document.getElementById('txtlong').removeAttribute('disabled');
                document.getElementById('txtLat').removeAttribute('disabled');
                document.getElementById('estatus').removeAttribute('disabled');

                Swal.fire('Edición habilitada', 'Los campos están habilitados para editar.', 'success');
            } else if (result.isDenied) {
                Swal.fire('Edición cancelada', 'No se realizaron cambios.', 'info');
            }
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Primero debes buscar una sucursal antes de editar.',
        });
    }
}

// Función para guardar los datos editados
function guardarDatosEditados() {
    var idSucursalSeleccionada = document.getElementById('id').value;
    var idSucursal = document.getElementById('id').value;

    if (idSucursal) {
        var sucursal = registros.find(function (registro) {
            return registro.id === parseInt(idSucursal);
        });

        if (sucursal) {
            // Actualizar los valores con los datos editados
            sucursal.nombre = document.getElementById('txtNomSuc').value;
            sucursal.titular = document.getElementById('txtNomTitu').value;
            sucursal.rfc = document.getElementById('txtRfc').value;
            sucursal.domicilio = document.getElementById('txtDom').value;
            sucursal.colonia = document.getElementById('txtCol').value;
            sucursal.ciudad = document.getElementById('txtCiudad').value;
            sucursal.estado = document.getElementById('txtEst').value;
            sucursal.codigoPostal = document.getElementById('txtCp').value;
            sucursal.telefono = document.getElementById('txtTel').value;
            sucursal.longitud = document.getElementById('txtlong').value;
            sucursal.latitud = document.getElementById('txtLat').value;
            sucursal.estatus = document.getElementById('estatus').checked ? 1 : 0;
        }

        if (idSucursalSeleccionada) {
            Swal.fire({
                title: '¿Estás seguro de guardar los cambios?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                denyButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Cambios guardados', 'Los cambios han sido guardados.', 'success');
                    deshabilitarCampos(); // Llamamos a la función para deshabilitar los campos
                    limpiarCamposEntrada();
                    mostrarRegistros();
                } else if (result.isDenied) {
                    Swal.fire('Guardado cancelado', 'No se realizaron cambios.', 'info');
                }
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Error',
                text: 'Primero debes buscar una sucursal antes de guardar los cambios.',
            });
        }
    }

}



function deshabilitarCampos() {
    document.getElementById('txtNomSuc').setAttribute('disabled', true);
    document.getElementById('txtNomTitu').setAttribute('disabled', true);
    document.getElementById('txtRfc').setAttribute('disabled', true);
    document.getElementById('txtDom').setAttribute('disabled', true);
    document.getElementById('txtCol').setAttribute('disabled', true);
    document.getElementById('txtCiudad').setAttribute('disabled', true);
    document.getElementById('txtEst').setAttribute('disabled', true);
    document.getElementById('txtCp').setAttribute('disabled', true);
    document.getElementById('txtTel').setAttribute('disabled', true);
    document.getElementById('txtlong').setAttribute('disabled', true);
    document.getElementById('txtLat').setAttribute('disabled', true);
    document.getElementById('estatus').setAttribute('disabled', true);
}




function eliminarSucursal() {
    var idSucursalSeleccionada = document.getElementById('id').value;

    if (idSucursalSeleccionada) {
        // Encontrar la sucursal por su ID
        var sucursal = registros.find(function (registro) {
            return registro.id === parseInt(idSucursalSeleccionada);
        });

        if (sucursal) {
            if (sucursal.estatus === 0) {
                Swal.fire({
                    title: 'Sucursal Inactiva',
                    text: 'Esta sucursal ya está inactiva.',
                    icon: 'info',
                });
            } else {
                Swal.fire({
                    title: '¿Estás segur@ de eliminar esta sucursal?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Eliminar',
                    denyButtonText: 'No Guardar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        sucursal.estatus = 0; // Cambiar el estado de activo (1) a inactivo (0)
                        Swal.fire({
                            title: 'Sucursal eliminada',
                            text: 'La sucursal ha sido cambiada a inactiva.',
                            icon: 'success',
                        });
                        cargarListadoSucursal();
                    } else if (result.isDenied) {
                        Swal.fire({
                            title: 'Cancelado',
                            text: 'No se realizó ningún cambio.',
                            icon: 'info',
                        });
                    }
                });
            }
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Error',
                text: 'No se encontró una sucursal con el ID seleccionado.',
            });
        }
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Primero debes buscar una sucursal antes de eliminar.',
        });
    }
}


function limpiarCamposEntrada() {
    // Limpia los campos de entrada después de agregar el registro
    document.getElementById('txtNomSuc').value = '';
    document.getElementById('txtNomTitu').value = '';
    document.getElementById('txtRfc').value = '';
    document.getElementById('txtDom').value = '';
    document.getElementById('txtCol').value = '';
    document.getElementById('txtCiudad').value = '';
    document.getElementById('txtEst').value = '';
    document.getElementById('txtCp').value = '';
    document.getElementById('txtTel').value = '';
    document.getElementById('txtLong').value = '';
    document.getElementById('txtLat').value = '';

}

function agregarRegistro() {
    var nuevoRegistro = {
        id: ++ultimoId,
        nombre: document.getElementById('txtNomSuc').value,
        titular: document.getElementById('txtNomTitu').value,
        rfc: document.getElementById('txtRfc').value,
        domicilio: document.getElementById('txtDom').value,
        colonia: document.getElementById('txtCol').value,
        ciudad: document.getElementById('txtCiudad').value,
        estado: document.getElementById('txtEst').value,
        codigoPostal: document.getElementById('txtCp').value,
        telefono: document.getElementById('txtTel').value,
        longitud: document.getElementById('txtLong').value,
        latitud: document.getElementById('txtLat').value,
        estatus: 1 // Valor predeterminado para una nueva sucursal (activo)

    };

    if (esRegistroValido(nuevoRegistro)) {
        Swal.fire({
            title: '¿Estás segur@ de guardar los cambios?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `No Guardar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Información Guardada!', '', 'success');
                registros.push(nuevoRegistro); // Agregar el nuevo registro al array

                limpiarCamposEntrada();

                // Crear usuario administrador
                var usuarioAdmin = {
                    usuario: 'Admins' + nuevoRegistro.id,
                    contrasena: 'Admins' + nuevoRegistro.id,
                };

                // Agregar usuario administrador al array de usuarios

                usuarios.push(usuarioAdmin);

            } else if (result.isDenied) {
                Swal.fire('No se guardo la información', '', 'info');
            }
        });
    }
}

function esRegistroValido(registro) {
    for (var campo in registro) {
        // Verificar si el campo es una cadena antes de llamar a trim()
        if (typeof registro[campo] === 'string' && registro[campo].trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa todos los datos solicitados',
            });
            return false;
        }
    }
    return true;
}



function mostrarRegistros(terminoBusqueda) {
    var tablaRegistros = document.getElementById('TABLITA');
    console.log(tablaRegistros); // Verifica si el elemento tbody se encuentra correctamente

    tablaRegistros.innerHTML = '';

    var filtroEstatus = document.getElementById('filtro-estatus').checked;

    for (var i = 0; i < sucursales.length; i++) {
        var registro = sucursales[i];
        console.log(registro); // Verifica si los registros están siendo cargados en el array correctamente

        // Si el filtro está activado y el estatus es 0, no muestra el registro
        if (filtroEstatus && registro.estatus === 1) {
            continue;
        }

        // Si hay un término de búsqueda, verifica+ si el registro coincide con el término en cualquier campo
        if (terminoBusqueda && !coincideTerminoBusqueda(registro, terminoBusqueda)) {
            continue; // Si no coincide, pasa al siguiente registro
        }


        var fila = document.createElement('tr');
        var idCell = document.createElement('td');
        var campo1Cell = document.createElement('td');
        var campo2Cell = document.createElement('td');
        var campo3Cell = document.createElement('td');
        var campo4Cell = document.createElement('td');
        var campo5Cell = document.createElement('td');
        var campo6Cell = document.createElement('td');
        var campo7Cell = document.createElement('td');
        var campo8Cell = document.createElement('td');
        var campo9Cell = document.createElement('td');
        var campo10Cell = document.createElement('td');
        var campo11Cell = document.createElement('td');
        var estatusCell = document.createElement('td');

        idCell.textContent = registro.id;
        campo1Cell.textContent = registro.nombre;
        campo2Cell.textContent = registro.titular;
        campo3Cell.textContent = registro.rfc;
        campo4Cell.textContent = registro.domicilio;
        campo5Cell.textContent = registro.colonia;
        campo6Cell.textContent = registro.ciudad;
        campo7Cell.textContent = registro.estado;
        campo8Cell.textContent = registro.codigoPostal;
        campo9Cell.textContent = registro.telefono;
        campo10Cell.textContent = Math.round(registro.longitud * 1000000) / 1000000;
        campo11Cell.textContent = registro.latitud;
        estatusCell.textContent = registro.estatus === 1 ? "Activa" : "Inactiva";



        fila.appendChild(idCell);
        fila.appendChild(campo1Cell);
        fila.appendChild(campo2Cell);
        fila.appendChild(campo3Cell);
        fila.appendChild(campo4Cell);
        fila.appendChild(campo5Cell);
        fila.appendChild(campo6Cell);
        fila.appendChild(campo7Cell);
        fila.appendChild(campo8Cell);
        fila.appendChild(campo9Cell);
        fila.appendChild(campo10Cell);
        fila.appendChild(campo11Cell);
        fila.appendChild(estatusCell);

        tablaRegistros.appendChild(fila);

    }

}

function coincideTerminoBusqueda(registro, termino) {
    termino = termino.toLowerCase();
    for (var campo in registro) {
        if (typeof registro[campo] === 'string' && registro[campo].toLowerCase().includes(termino)) {
            return true; // Si encuentra coincidencia, retorna true
        }
    }
    return false; // Si no encuentra coincidencia, retorna false
}

function buscarSucursales() {
    var terminoBusqueda = document.getElementById('campo-busqueda').value;
    mostrarRegistros(terminoBusqueda);
}



function obtenerGeolocalizacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                // Se obtuvo la ubicación geográfica con éxito
                var latitud = position.coords.latitude;
                var longitud = position.coords.longitude;

                // Asigna los valores a los campos correspondientes en el formulario
                document.getElementById('txtLat').value = latitud;
                document.getElementById('txtLong').value = longitud;

                Swal.fire({
                    icon: 'success',
                    title: 'Ubicación obtenida',
                    text: 'Se ha obtenido la ubicación geográfica con éxito.',
                });
            },
            function (error) {
                // Ocurrió un error al obtener la ubicación geográfica
                Swal.fire({
                    icon: 'error',
                    title: 'Error de geolocalización',
                    text: 'No se pudo obtener la ubicación geográfica. Asegúrate de permitir el acceso a la ubicación en tu navegador.',
                });
            }
        );
    } else {
        // El navegador no admite la geolocalización
        Swal.fire({
            icon: 'error',
            title: 'Error de geolocalización',
            text: 'Tu navegador no admite la geolocalización.',
        });
    }
}




// Mostrar los registros iniciales (si existen) cuando el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
    mostrarRegistros();
});

