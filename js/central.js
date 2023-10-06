const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const contentDiv = document.getElementById('content');
function mostrarAside() {
    document.getElementById('sidebar').classList.toggle("active");
}

// Cerrar la barra lateral en telefonos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
    }
});
// Cerrar la barra lateral en telefonos al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
});
//sub menus
const subNavs =
    document.querySelectorAll(
        `.subnav`
    );
const buttons =
    document.querySelectorAll(
        `.sidebar button`
    );
const resetSideBar = () => {
    subNavs.forEach((nav) => {
        nav.style.height = 0;
    });
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
};
const handleClick = subNav => {
    resetSideBar();
    const subNavOuter =
        document.querySelector(`#${subNav}`);
    const subNavInner =
        document.querySelector(`#${subNav} .subnav-inner`);
    const button =
        subNavOuter.previousElementSibling;
    if (subNavOuter.clientHeight > 0) {
        button.classList.remove('active');
        subNavOuter.style.height = 0;
    } else {
        button.classList.add('active');
        subNavOuter.style.height =
            `${subNavInner.clientHeight}px`;
    }
};

function centralLogin() {

    const usuarioInput = document.getElementById('txtUsuario');
    const contrasenaInput = document.getElementById('txtContrasena');

    const usuario = usuarioInput.value;
    const contrasena = contrasenaInput.value;

    const usuarioEncontrado = usuarios.find(usuarioObj => {
        return usuarioObj.usuario === usuario && usuarioObj.contrasena === contrasena;
    });

    if (usuarioEncontrado && usuarioEncontrado.rol == "ADMC") {
        cargarMenuCentral();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.'
        });
    }
}

// Massiel
function mostrarAside() {
    document.getElementById('sidebar').classList.toggle("active");
}


// carga asincrona

async function cargarCentral() {
    let response = await fetch("html/central/central.html");
    let html = await response.text();
    document.getElementById('pagina').innerHTML = html;
}

async function cargarCentralLogin() {
    let response = await fetch("html/central/login.html");
    let html = await response.text();
    document.getElementById('contenido').innerHTML = html;
}

async function cargarMenuCentral() {
    const response = await fetch("html/central/menu.html");
    const html = await response.text();
    document.getElementById('pagina').innerHTML = html;
}
