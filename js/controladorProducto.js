async function cargarProductoCentral() {
  let response = await fetch("html/central/producto/modulo.html");
  let text = await response.text();
  document.getElementById("contenido").innerHTML = text;
}

async function cargarAgregarProductos() {
  let response = await fetch("html/central/producto/agregar.html");
  let text = await response.text();
  document.getElementById("contenido").innerHTML = text;
}

async function cargarProductoSucursal() {
  let response = await fetch("html/sucursal/producto/modulo.html");
  let text = await response.text();
  document.getElementById("contenido").innerHTML = text;
}

async function cargarInventarioSucursal() {
  let response = await fetch("html/sucursal/producto/inventario.html");
  let text = await response.text();
  document.getElementById("contenido").innerHTML = text;
}

var registros = productos;
var ultimoId = 10;

// Funciones agregar //

function agregarProducto() {
  var nuevoProducto = {
    txtID: ++ultimoId,
    txtNombreProducto: document.getElementById('txtNombreProducto').value,
    txtNombreGenerico: document.getElementById('txtNombreGenerico').value,
    txtFormaFarmaceutica: document.getElementById('txtFormaFarmaceutica').value,
    txtUnidadesDeMedida: document.getElementById('txtUnidadesDeMedida').value,
    txtPresentacion: document.getElementById('txtPresentacion').value,
    txtIndicaciones: document.getElementById('txtIndicaciones').value,
    txtContraIndicaciones: document.getElementById('txtContraIndicaciones').value,
    txtConcentracion: document.getElementById('txtConcentracion').value,
    txtUnidadesEnEnvase: document.getElementById('txtUnidadesEnEnvase').value,
    txtPrecioCompra: document.getElementById('txtPrecioCompra').value,
    txtPrecioVenta: document.getElementById('txtPrecioVenta').value,
    txtCodigoBarras: Math.floor(Math.random() * 900000000) + 100000000,
    estatus: 1
  };

  registros.push(nuevoProducto);
  Swal.fire({
    title: 'Producto agregado',
    text: 'El producto ha sido agregado correctamente',
    icon: 'success'
  });
  cancelarRegistro(false); // Pasar "false" para indicar que no se está cancelando
}

function cancelarRegistro(mostrarAlerta = true) {
  var campos = [
    'txtNombreProducto', 'txtNombreGenerico', 'txtFormaFarmaceutica',
    'txtUnidadesDeMedida', 'txtPresentacion', 'txtIndicaciones', 'txtContraIndicaciones',
    'txtConcentracion', 'txtUnidadesEnEnvase', 'txtPrecioCompra',
    'txtPrecioVenta', 'txtCodigoBarras'
  ];

  campos.forEach(function (campo) {
    document.getElementById(campo).value = '';
  });

  if (mostrarAlerta) {
    Swal.fire({
      title: 'Cancelado',
      text: 'Se ha cancelado la operación',
      icon: 'info'
    });
  }
}
// ----------------------------------------------------------------------------
// Funciones buscar //
function buscarPrr() {
  const idBuscado = parseInt(document.getElementById("txtBuscarProducto").value);
  if (!isNaN(idBuscado)) {
    mostrarDatosProducto(idBuscado);
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Error',
      text: 'No se encontro producto con el ID seleccionado.',
    });;
  }
}
function mostrarDatosProducto(id) {
  const productoEncontrado = registros.find(registro => registro.txtID === id);



  if (productoEncontrado) {
    document.getElementById("txtID").value = productoEncontrado.txtID;
    document.getElementById("txtNombreProducto").value = productoEncontrado.txtNombreProducto;
    document.getElementById("txtNombreGenerico").value = productoEncontrado.txtNombreGenerico;
    document.getElementById("txtFormaFarmaceutica").value = productoEncontrado.txtFormaFarmaceutica;
    document.getElementById("txtUnidadesDeMedida").value = productoEncontrado.txtUnidadesDeMedida;
    document.getElementById("txtPresentacion").value = productoEncontrado.txtPresentacion;
    document.getElementById("txtIndicaciones").value = productoEncontrado.txtIndicaciones;
    document.getElementById("txtContraIndicaciones").value = productoEncontrado.txtContraIndicaciones;
    document.getElementById("txtConcentracion").value = productoEncontrado.txtConcentracion;
    document.getElementById("txtUnidadesEnEnvase").value = productoEncontrado.txtUnidadesEnEnvase;
    document.getElementById("txtPrecioCompra").value = productoEncontrado.txtPrecioCompra;
    document.getElementById("txtPrecioVenta").value = productoEncontrado.txtPrecioVenta;
    document.getElementById("txtCodigoBarras").value = productoEncontrado.txtCodigoBarras;
    document.getElementById('estatus').checked = productoEncontrado.estatus === 1;
    // Aplicar clase para centrar texto horizontalmente
    const inputs = document.querySelectorAll(".col.form-control");
    inputs.forEach(input => input.classList.add("centrado-horizontal"));
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Error',
      text: 'No se encontro producto con el ID seleccionado.',
    });
  }
}
// ----------------------------------------------------------------------------
// Funciones consulta //
function consultarProducto(terminoBusqueda) {
  var tablaRegistros = document.getElementById('consultaProducto');
  console.log(tablaRegistros); // Verifica si el elemento tbody se encuentra correctamente

  tablaRegistros.innerHTML = '';

  var filtroEstatus = document.getElementById('filtro-estatus').checked;

  for (var i = 0; i < registros.length; i++) {
    var registro = registros[i];
    console.log(registro); // Verifica si los registros están siendo cargados en el array correctamente

    // Si el filtro está activado y el estatus es 0, no muestra el registro
    if (filtroEstatus && registro.estatus === 0) {
      continue;
    }

    // Si hay un término de búsqueda, verifica+ si el registro coincide con el término en cualquier campo
    if (terminoBusqueda && !coincideTerminoBusqueda(registro, terminoBusqueda)) {
      continue; // Si no coincide, pasa al siguiente registro
    }


    var fila = document.createElement('tr'); // Espacio 
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
    var campo12Cell = document.createElement('td');
    var estatusCell = document.createElement('td');

    idCell.textContent = registro.txtID;
    campo1Cell.textContent = registro.txtNombreProducto;
    campo2Cell.textContent = registro.txtNombreGenerico;
    campo3Cell.textContent = registro.txtFormaFarmaceutica;
    campo4Cell.textContent = registro.txtUnidadesDeMedida;
    campo5Cell.textContent = registro.txtPresentacion;
    campo6Cell.textContent = registro.txtIndicaciones;
    campo7Cell.textContent = registro.txtContraIndicaciones;
    campo8Cell.textContent = registro.txtConcentracion;
    campo9Cell.textContent = registro.txtUnidadesEnEnvase;
    campo10Cell.textContent = registro.txtPrecioCompra;
    campo11Cell.textContent = registro.txtPrecioVenta;
    campo12Cell.textContent = registro.txtCodigoBarras;
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
    fila.appendChild(campo12Cell);
    fila.appendChild(estatusCell);

    tablaRegistros.appendChild(fila);

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
}
function buscarProductos() {
  var terminoBusqueda = document.getElementById('txtBusqueda').value;
  consultarProducto(terminoBusqueda);
}
// ----------------------------------------------------------------------------
// Funciones editar //
let productoActual = null;
function editarProducto() {
  var idProducto = document.getElementById('txtID').value;
  if (idProducto) {
    productoActual = buscarProductoPorId(parseInt(idProducto));
    if (productoActual) {
      mostrarFormularioEdicion();
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'No se encontro producto con el ID seleccionado.',
      });
    }
  }
}
function buscarProductoPorId(id) {
  return registros.find(producto => producto.txtID === id) || null;
}

function mostrarDeshabilitarMenu() {
  var deshabilitarMenu = document.getElementById("deshabilitarMenu");
  deshabilitarMenu.style.display = "block";
}
function confirmarDeshabilitarProducto() {
  var productoADeshabilitar = buscarProductoPorId(parseInt(idProducto));
  if (productoADeshabilitar) { productoADeshabilitar.estatus = 0 }
  alert("Producto deshabilitado correctamente")
  ocultarDeshabilitarMenu();
}
function ocultarDeshabilitarMenu() {
  var deshabilitarMenu = document.getElementById("deshabilitarMenu");
  deshabilitarMenu.style.display = "none";
  productoADeshabilitar = null;
}
function mostrarFormularioEdicion() {
  const formularioEdicion = document.getElementById('formularioEdicion');
  formularioEdicion.style.display = 'block';

  document.getElementById('editNombreProducto').value = productoActual.txtNombreProducto;
  document.getElementById('editNombreGenerico').value = productoActual.txtNombreGenerico;
  document.getElementById('editFormaFarmaceutica').value = productoActual.txtFormaFarmaceutica;
  document.getElementById('editUnidadesDeMedida').value = productoActual.txtUnidadesDeMedida;
  document.getElementById('editPresentacion').value = productoActual.txtPresentacion;
  document.getElementById('editIndicaciones').value = productoActual.txtIndicaciones;
  document.getElementById('editContraIndicaciones').value = productoActual.txtContraIndicaciones;
  document.getElementById('editConcentracion').value = productoActual.txtConcentracion;
  document.getElementById('editUnidadesEnEnvase').value = productoActual.txtUnidadesEnEnvase;
  document.getElementById('editPrecioCompra').value = productoActual.txtPrecioCompra;
  document.getElementById('editPrecioVenta').value = productoActual.txtPrecioVenta;
}

function confirmarEdicion() {
  // Obtener los valores editados
  const nuevoNombreProducto = document.getElementById('editNombreProducto').value;
  const nuevoNombreGenerico = document.getElementById('editNombreGenerico').value;
  const nuevaFormaFarmaceutica = document.getElementById('editFormaFarmaceutica').value;
  const nuevasUnidadesDeMedida = document.getElementById('editUnidadesDeMedida').value;
  const nuevaPresentacion = document.getElementById('editPresentacion').value;
  const nuevasIndicaciones = document.getElementById('editIndicaciones').value;
  const nuevasContraIndicaciones = document.getElementById('editContraIndicaciones').value;
  const nuevaConcentracion = document.getElementById('editConcentracion').value;
  const nuevasUnidadesEnEnvase = document.getElementById('editUnidadesEnEnvase').value;
  const nuevoPrecioCompra = document.getElementById('editPrecioCompra').value;
  const nuevoPrecioVenta = document.getElementById('editPrecioVenta').value;

  // Validar que los campos no estén vacíos
  if (!nuevoNombreProducto || !nuevoNombreGenerico || !nuevaFormaFarmaceutica || !nuevasUnidadesDeMedida || !nuevaPresentacion || !nuevasIndicaciones || !nuevasContraIndicaciones || !nuevaConcentracion || !nuevasUnidadesEnEnvase || !nuevoPrecioCompra || !nuevoPrecioVenta) {


  }

  // Actualizar los valores del producto actual
  productoActual.txtNombreProducto = nuevoNombreProducto;
  productoActual.txtNombreGenerico = nuevoNombreGenerico;
  productoActual.txtFormaFarmaceutica = nuevaFormaFarmaceutica;
  productoActual.txtUnidadesDeMedida = nuevasUnidadesDeMedida;
  productoActual.txtPresentacion = nuevaPresentacion;
  productoActual.txtIndicaciones = nuevasIndicaciones;
  productoActual.txtContraIndicaciones = nuevasContraIndicaciones;
  productoActual.txtConcentracion = nuevaConcentracion;
  productoActual.txtUnidadesEnEnvase = nuevasUnidadesEnEnvase;
  productoActual.txtPrecioCompra = nuevoPrecioCompra;
  productoActual.txtPrecioVenta = nuevoPrecioVenta;

  Swal.fire({
    title: 'Producto editado',
    text: 'El producto ha sido editado correctamente',
    icon: 'success',
  });
  ocultarFormularioEdicion(),
    buscarPrr();
}

function limpiarCamposEdicion() {
  document.getElementById('editNombreProducto').value = '';
  document.getElementById('editNombreGenerico').value = '';
  document.getElementById('editFormaFarmaceutica').value = '';
  document.getElementById('editUnidadesDeMedida').value = '';
  document.getElementById('editPresentacion').value = '';
  document.getElementById('editIndicaciones').value = '';
  document.getElementById('editContraIndicaciones').value = '';
  document.getElementById('editConcentracion').value = '';
  document.getElementById('editUnidadesEnEnvase').value = '';
  document.getElementById('editPrecioCompra').value = '';
  document.getElementById('editPrecioVenta').value = '';
}

function ocultarFormularioEdicion() {
  const formularioEdicion = document.getElementById('formularioEdicion');
  formularioEdicion.style.display = 'none';

  productoActual = null;
}
function mostrarEdicion() {
  var formularioEdicion = document.getElementById("formularioEdicion");
  formularioEdicion.style.display = "block";
}
function cancelarEdicion() {
  var formularioEdicion = document.getElementById("formularioEdicion");

  // Mostrar una ventana de confirmación al usuario
  var confirmacion = confirm("Estas seguro de que deseas cancelar la edicion? Los cambios no guardados se perderan.");

  if (confirmacion) {
    formularioEdicion.style.display = "none";
  }

}
// ----------------------------------------------------------------------------
// Funciones eliminar //  
function eliminarProducto() {
  var productoSeleccionado = document.getElementById('txtID').value;

  if (productoSeleccionado) {
    // Encontrar la sucursal por su ID
    var producto = registros.find(function (registro) {
      return registro.txtID === parseInt(productoSeleccionado);
    });

    if (producto) {
      if (producto.estatus === 0) {
        Swal.fire({
          title: 'producto inactivo',
          text: 'Este producto ya esta inactivo',
          icon: 'info',
        });
      } else {
        Swal.fire({
          title: 'Estas seguro de eliminar este producto',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Eliminar',
          denyButtonText: 'No Eliminar',
        }).then((result) => {
          if (result.isConfirmed) {
            producto.estatus = 0; // Cambiar el estado de activo (1) a inactivo (0)
            Swal.fire({
              title: 'Producto eliminado',
              text: 'El producto ha sido cambiada a inactiva.',
              icon: 'success',

            });
            buscarPrr();
            limpiarCamposEntrada();
            mostrarDatosProducto(); // Actualizar la lista de registros mostrados
          } else if (result.isDenied) {
            Swal.fire({
              title: 'Cancelado',
              text: 'No se realizo ningun cambio.',
              icon: 'info',
            });
          }
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'No se encontro producto con el ID seleccionado.',
      });
    }
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Error',
      text: 'Primero debes buscar un producto antes de eliminar.',
    });
  }

}
// ----------------------------------------------------------------------------
// Funciones reload //
function reloadProducto() {
  var productoSeleccionado = document.getElementById('txtID').value;

  if (productoSeleccionado) {
    // Encontrar producto por su ID
    var producto = registros.find(function (registro) {
      return registro.txtID === parseInt(productoSeleccionado);
    });

    if (producto) {
      if (producto.estatus === 1) {
        Swal.fire({
          title: 'producto activo',
          text: 'Este producto ya esta activo',
          icon: 'info',
        });
      } else {
        Swal.fire({
          title: 'Estas seguro de volver a activar este producto',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Activar',
          denyButtonText: 'No Activar',
        }).then((result) => {
          if (result.isConfirmed) {
            producto.estatus = 1; // Cambiar el estado de activo (1) a inactivo (0)
            Swal.fire({
              title: 'Producto activo',
              text: 'El producto ha sido cambiada a activa.',
              icon: 'success',
            });
            buscarPrr();
            limpiarCamposEntrada();
            mostrarDatosProducto(); // Actualizar la lista de registros mostrados
          } else if (result.isDenied) {
            Swal.fire({
              title: 'Cancelado',
              text: 'No se realizo ningun cambio.',
              icon: 'info',
            });
          }
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'No se encontro producto con el ID seleccionado.',
      });
    }
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Error',
      text: 'Primero debes buscar un producto antes de volverlo a activar',
    });
  }

}

var ultimaSucursal = 4;
// Funciones consulta //
function buscarInventario() {
  var filtroSucursal = document.getElementById("selSucursal").value;
  var filtroBusqueda = document.getElementsByName("txtBusquedaInventario")[0].value.toLowerCase();

  var resultadosFiltrados = inventario.filter(function (producto) {
    var cumpleFiltroSucursal = filtroSucursal === "" || producto.sucursal.toString() === filtroSucursal;
    var cumpleFiltroBusqueda =
      producto.nombreProducto.toLowerCase().includes(filtroBusqueda) ||
      producto.nombreGenerico.toLowerCase().includes(filtroBusqueda) ||
      producto.FormaFarmaceutica.toLowerCase().includes(filtroBusqueda);

    return cumpleFiltroSucursal && cumpleFiltroBusqueda;
  });

  mostrarResultados(resultadosFiltrados);
}
var nombresSucursales = {
  1: "Centro",
  2: "Centro Max",
  3: "Plaza Mayor",
  4: "Sicefa Central"
};
function mostrarResultados(resultados) {
  var tbody = document.getElementById("consultaInventarios");
  tbody.innerHTML = "";

  resultados.forEach(function (producto) {
    var fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${nombresSucursales[producto.sucursal]}</td>
      <td>${producto.nombreProducto}</td>
      <td>${producto.nombreGenerico}</td>
      <td>${producto.cantidadSucursal}</td>
      <td>${producto.PrecioCompra}</td>
      <td>${producto.PrecioVenta}</td>
      <td>${producto.FormaFarmaceutica}</td>
    `;
    tbody.appendChild(fila);
  });
}
function filtrarRegistros() {
  var filtro = document.getElementById('selSucursal').value;
  if (filtro === 'todas') {
    mostrarRegistros(inventario);  // Mostrar todos los registros
  } else {
    var registrosFiltrados = inventario.filter(registro => registro.sucursal == filtro);
    mostrarRegistros(registrosFiltrados);
  }
}

