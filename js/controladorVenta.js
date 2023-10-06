async function cargarVentasSucursal() {
    let response = await fetch("html/sucursal/venta/modulo.html");
    let text = await response.text();
    document.getElementById("contenido").innerHTML = text;
    filtrarVentas();
}

async function cargarAgregarVenta() {
    let response = await fetch("html/sucursal/venta/agregar.html");
    let text = await response.text();
    document.getElementById("contenido").innerHTML = text;
}

function filtrarVentas() {
    const filtro = document.getElementById('txtVentaBuscar').value.toLowerCase();
    let ventasFiltradas = ventas;

    if (filtro) {
        ventasFiltradas = ventasFiltradas.filter(venta => {
            const datosVenta = JSON.stringify(venta).toLowerCase();
            return datosVenta.includes(filtro);
        });
    }
    cargarTablaVentas(ventasFiltradas);
}

function cargarTablaVentas(ventasMostrar) {
    let datosTabla = "";

    if (ventasMostrar.length === 0) {
        datosTabla += "<tr>";
        datosTabla += "<td colspan='7'>No hay registros de ventas.</td>";
        datosTabla += "</tr>";
        console.log("false");
    } else {
        for (let i = 0; i < ventasMostrar.length; i++) {
            const venta = ventasMostrar[i];
            const fecha = new Date(venta.fechaHora);
            const fechaFormato = fecha.toLocaleDateString();
            const horaFormato = fecha.toLocaleTimeString();

            const cliente = venta.cliente.persona;
            const empleado = venta.empleado.persona;

            datosTabla += "<tr>";
            datosTabla += "<td>" + fechaFormato + "</td>";
            datosTabla += "<td>" + horaFormato + "</td>";
            datosTabla += "<td>" + cliente.nombre + " " + cliente.apellidoPaterno + "" + cliente.apellidoMaterno + "</td>";
            datosTabla += "<td>" + empleado.nombre + " " + empleado.apellidoPaterno + "</td>";
            datosTabla += "<td>Descripción de la venta</td>"; // Agrega la descripción adecuada
            datosTabla += "<td>" + "$ " + venta.total + "</td>";
            datosTabla += `<td><button class='btn' onclick='cargarDetallesVenta(${i})'><i class='bi bi-eye-fill'></i></button></td>`;
            datosTabla += "</tr>";
        }
    }

    document.getElementById("tablaVentas").innerHTML = datosTabla;
}

function cargarDetallesVenta(ventaIndex) {
    const venta = ventas[ventaIndex];
    const detallesVentaFiltrados = detallesVenta.filter(detalles => detalles.venta.id === venta.id);

    const fecha = new Date(venta.fechaHora);
    const fechaFormato = fecha.toLocaleDateString();
    const horaFormato = fecha.toLocaleTimeString();

    const cliente = venta.cliente.persona;
    const empleado = venta.empleado.persona;

    let detallesTabla = "<table class='table table-sm'>";
    detallesTabla += "<thead><tr><th>Presentación</th><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Total</th></tr></thead>";
    detallesTabla += "<tbody>";

    for (const detalle of detallesVentaFiltrados) {
        const producto = detalle.producto;
        detallesTabla += "<tr>";
        detallesTabla += `<td>${producto.txtPresentacion}</td>`;
        detallesTabla += `<td>${producto.txtNombreProducto}</td>`;
        detallesTabla += `<td>$ ${detalle.precio}</td>`;
        detallesTabla += `<td>${detalle.cantidad}</td>`;
        detallesTabla += `<td>$ ${detalle.subtotal}</td>`;
        detallesTabla += "</tr>";
    }

    detallesTabla += "</tbody></table>";

    const detallesVentaContainer = document.getElementById("detallesVentaContainer");
    detallesVentaContainer.innerHTML = `
        <div class="container-fluid">
            <h3 class="text-center pb-2">Venta</h3>
            <div class="row">
                <div class="col">
                    <div class="vstack">
                        <label>Fecha: ${fechaFormato}</label>
                        <label>Hora: ${horaFormato}</label>
                    </div>
                </div>
                <div class="col">
                    <div class="vstack">
                        <label>Cliente: ${cliente.nombre} ${cliente.apellidoPaterno} ${cliente.apellidoMaterno}</label>
                        <label>Vendedor: ${empleado.nombre} ${empleado.apellidoPaterno}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <h3 class="text-center pb-2">Detalles Venta</h3>
            ${detallesTabla}
        </div>
        <div class="text-end">
            <button id="btnEliminar" onclick="confirmarEliminarVenta(${ventaIndex})" class="btn">
                <i class="bi bi-trash3"></i>
            </button>
        </div>
    `;
}




function confirmarEliminarVenta(venta) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'La venta cambiará a inactiva.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Activar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarVenta(venta);
        }
    });
}

function eliminarVenta(ventaIndex) {
    ventas[ventaIndex].estatus = 0; // Cambia el estatus de la venta a 0 (inactivo)
    cargarVentasSucursal(); // Actualiza los detalles de la venta en la vista
    Swal.fire({
        icon: 'success',
        title: 'Cliente eliminado',
        text: 'El cliente ha sido eliminado.'
    });
}
