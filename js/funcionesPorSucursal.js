var pedidos = [
    { idPedido: 1, suc: 'Sucursal A', fechaHora: '2023-08-07 10:00:00', producto: 'Omeprazol', cantidad: 15, estatus: 1},
    { idPedido: 2, suc: 'Sucursal A', fechaHora: '2023-08-07 11:30:00', producto: 'Paracetmol', cantidad: 98, estatus: 1},
    { idPedido: 3, suc: 'Sucursal A', fechaHora: '2023-08-07 12:45:00', producto: 'Ibuprofeno', cantidad: 235, estatus: 1},
    { idPedido: 4, suc: 'Sucursal A', fechaHora: '2023-08-07 13:20:00', producto: 'Amoxicilina', cantidad: 75, estatus: 1},
    { idPedido: 5, suc: 'Sucursal A', fechaHora: '2023-08-07 14:10:00', producto: 'Loratadina', cantidad: 180, estatus: 0},
    { idPedido: 6, suc: 'Sucursal A', fechaHora: '2023-08-07 15:30:00', producto: 'Aspirina', cantidad: 120, estatus: 0},
    { idPedido: 7, suc: 'Sucursal A', fechaHora: '2023-08-07 16:45:00', producto: 'Diclofenaco', cantidad: 45, estatus: 1},
    { idPedido: 8, suc: 'Sucursal A', fechaHora: '2023-08-07 17:20:00', producto: 'Salbutamol', cantidad: 320, estatus: 1},
    { idPedido: 9, suc: 'Sucursal A', fechaHora: '2023-08-07 18:10:00', producto: 'Cetericina', cantidad: 67, estatus: 1 },
    { idPedido: 10, suc: 'Sucursal A', fechaHora: '2023-08-07 19:30:00', producto: 'Vitamina C', cantidad: 210, estatus: 1 }
  ];

  var detallesPedido = [
    { idPedido: 1, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'Juan Pérez' },
    { idPedido: 2, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'María López' },
    { idPedido: 3, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'Carlos Rodríguez' },
    { idPedido: 4, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'Ana Martínez' },
    { idPedido: 5, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'Luis Torres' },
    { idPedido: 6, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'Elena Sánchez' },
    { idPedido: 7, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'Hugo Ríos' },
    { idPedido: 8, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'Diana Pérez' },
    { idPedido: 9, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'Laura Morales' },
    { idPedido: 10, ciudad: 'Ciudad Uno', estado: 'Estado Uno', codigoPostal: '12345', empleado: 'Juan Pérez' },
];

var ultimoId = 10;

  console.log(pedidos);
  
  // Mostrar los registros iniciales (si existen) cuando el DOM se haya cargado completamente
  document.addEventListener('DOMContentLoaded', function () {
    mostrarRegistrosPedido();
  });



  function mostrarRegistrosPedido(terminoBusqueda) {
    var tablaRegistros = document.getElementById('tablaPedidoSucursal');
    console.log(tablaRegistros); // Verifica si el elemento tbody se encuentra correctamente
    
    tablaRegistros.innerHTML = '';

    var filtroEstatus = document.getElementById('filtro-estatus').checked;
  
    for (var i = 0; i < pedidos.length; i++) {
      var registro = pedidos[i];
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
      var campo3Cell = document.createElement('td');
      var campo1Cell = document.createElement('td');
      var campo2Cell = document.createElement('td');
      var campo4Cell = document.createElement('td');
      var estatusCell = document.createElement('td');
      var detallesCell = document.createElement('td'); // Nueva celda para el botón


      idCell.textContent = registro.idPedido;
      campo3Cell.textContent = registro.suc;
      campo1Cell.textContent = registro.fechaHora;
      campo2Cell.textContent = registro.producto;
      campo4Cell.textContent = registro.cantidad;
      estatusCell.textContent = registro.estatus === 1 ? "Pendiente" : "Cancelado";
     

       // Crear el botón de detalles
       var detallesButton = document.createElement('button');
       detallesButton.textContent = 'Detalles';
       detallesButton.classList.add('btn', 'btn-warning', 'btn-sm'); // Clases para el estilo
       detallesButton.setAttribute('data-bs-toggle', 'tooltip');
       detallesButton.setAttribute('data-bs-placement', 'top');
       detallesButton.setAttribute('title', 'Ver detalles');
// Agregar el evento click al botón
detallesButton.onclick = function(registro, index) {
    return function() {
        llenarCampos(registro, index); // Llena los campos de entrada con la información del pedido y los detalles
    };
}(registro, i); // Pasamos tanto el registro como el índice
    detallesCell.appendChild(detallesButton);

    // Agregar efecto de iluminación al pasar el cursor sobre el botón
    detallesButton.addEventListener('mouseover', function(event) {
      event.target.classList.add('btn-light');
    });

    detallesButton.addEventListener('mouseout', function(event) {
      event.target.classList.remove('btn-light');
    });
  
      fila.appendChild(idCell);
      fila.appendChild(campo3Cell);
      fila.appendChild(campo1Cell);
      fila.appendChild(campo2Cell);
      fila.appendChild(campo4Cell);
      fila.appendChild(estatusCell);
      fila.appendChild(detallesCell); // Agregar la celda del botón a la fila
  
      tablaRegistros.appendChild(fila);
      
    }

  }

  function coincideTerminoBusqueda(registro, termino) {
    for (var campo in registro) {
        var campoValor = registro[campo];
        if ( typeof campoValor === 'number' || typeof campoValor === 'string') {
            campoValor = campoValor.toString().toLowerCase();
            if (campoValor.includes(termino)) {
                return true; // Si encuentra una coincidencia, retorna true
            }
        }
    }
    return false; // Si no encuentra coincidencias, retorna false
}

  function buscarPedido() {
    var terminoBusqueda = document.getElementById('campo-busqueda').value;
    mostrarRegistrosPedido(terminoBusqueda);
  }


  function llenarCampos(registro) {
    // Llena los campos de entrada con la información principal del pedido
    document.getElementById('input-id').value = registro.idPedido;
    document.getElementById('input-suc').value = registro.suc;
    document.getElementById('input-fechaHora').value = registro.fechaHora;
    document.getElementById('input-total').value = registro.producto;
    document.getElementById('input-idEmpleado').value = registro.cantidad;
    document.getElementById('input-estatus').value = registro.estatus === 1 ? "Pendiente" : "Cancelado";

   // Encuentra los detalles correspondientes al pedido
   var detalles = detallesPedido.filter(function(detalle) {
    return detalle.idPedido === registro.idPedido;
});

// Llena los campos de entrada para cada detalle en los inputs correspondientes
for (var i = 0; i < detalles.length; i++) {
    var detalle = detalles[i];

    var ciudadInput = document.getElementById('inputCiudad');
    var estadoInput = document.getElementById('inputEstado');
    var cpInput = document.getElementById('inputCp');
    var empleadoInput = document.getElementById('inputEmpleado');

    if (ciudadInput && estadoInput && cpInput && empleadoInput) {
        ciudadInput.value = detalle.ciudad;
        estadoInput.value = detalle.estado;
        cpInput.value = detalle.codigoPostal;
        empleadoInput.value = detalle.empleado;
    }
}
}

function cancelarPedido() {
    var idPedidoSeleccionado = document.getElementById('input-id').value;
  
    if (idPedidoSeleccionado) {
        // Encuentra el pedido por su ID
        var pedido = pedidos.find(function (registro) {
            return registro.idPedido === parseInt(idPedidoSeleccionado);
        });
  
        if (pedido) {
            if (pedido.estatus === 0) {
                Swal.fire({
                    title: 'Pedido ya cancelado',
                    text: 'Este pedido ya ha sido cancelado.',
                    icon: 'info',
                });
            } else {
                pedido.estatus = 0; // Cambiar el estado de "Pendiente" a "Cancelado"
                Swal.fire({
                    title: 'Pedido cancelado',
                    text: 'El pedido ha sido cancelado correctamente.',
                    icon: 'success',
                });
              
                mostrarRegistrosPedido(); // Actualizar la lista de registros mostrados
                limpiarCampos();
            }
        } else {
            Swal.fire({
                title: 'Error',
                text: 'No se encontró un pedido con el ID seleccionado.',
                icon: 'warning',
            });
        }
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Primero debes seleccionar un pedido antes de cancelar.',
            icon: 'warning',
        });
    }
}


function obtenerFechaActual() {
    var fecha = new Date();
    var anio = fecha.getFullYear();
    var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    var dia = fecha.getDate().toString().padStart(2, '0');
    var horas = fecha.getHours().toString().padStart(2, '0');
    var minutos = fecha.getMinutes().toString().padStart(2, '0');
    var segundos = fecha.getSeconds().toString().padStart(2, '0');
    
    var fechaActual = `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    
    return fechaActual;
}

function mostrarFechaActualEnCampo() {
    var campoFechaHora = document.getElementById('input-fechaHora');
    if (campoFechaHora) {
        campoFechaHora.value = obtenerFechaActual();
    }
}

// Agregar evento click al botón para mostrar la fecha actual
var botonMostrarFecha = document.getElementById('boton-mostrar-fecha');
if (botonMostrarFecha) {
    botonMostrarFecha.addEventListener('click', function() {
        mostrarFechaActualEnCampo();
    });
}


function agregarRegistro() {
    var nuevoRegistro = {
      idPedido: ++ultimoId,
      suc: document.getElementById('input-suc').value,
      fechaHora: document.getElementById('input-fechaHora').value,
      producto: document.getElementById('input-total').value,
      cantidad: document.getElementById('input-idEmpleado').value,
      estatus: 1 // Valor predeterminado para un nuevo pedido (pendiente)
    };

    var nuevoDetalle = {
      idPedido: nuevoRegistro.idPedido,
      ciudad: document.getElementById('inputCiudad').value,
      estado: document.getElementById('inputEstado').value,
      codigoPostal: document.getElementById('inputCp').value,
      empleado: document.getElementById('inputEmpleado').value
    };

    if (esRegistroValido(nuevoRegistro) && esDetalleValido(nuevoDetalle)) {
      Swal.fire({
        title: '¿Estás segur@ de guardar los cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: 'No Guardar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Información Guardada!', '', 'success');
          pedidos.push(nuevoRegistro); // Agregar el nuevo pedido al array de pedidos
          detallesPedido.push(nuevoDetalle); // Agregar el nuevo detalle al array de detalles
          mostrarRegistrosPedido(); // Actualizar la lista de registros mostrados

        } else if (result.isDenied) {
          Swal.fire('No se guardó la información', '', 'info');
        }
      });
    }
  }

  function esDetalleValido(detalle) {
    for (var campo in detalle) {
      // Verificar si el campo es una cadena antes de llamar a trim()
      if (typeof detalle[campo] === 'string' && detalle[campo].trim() === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingresa todos los datos solicitados para los detalles del pedido',
        });
        return false;
      }
    }
    return true;
  }
