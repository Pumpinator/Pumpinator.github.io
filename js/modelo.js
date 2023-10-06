/////////////////////////
/* ARREGLO DE PERSONAS */
/////////////////////////
var personas = [
    {
        "id": 1,
        "nombre": "Alejandro",
        "apellidoPaterno": "Delgado",
        "apellidoMaterno": "Cardona",
        "genero": "Masculino",
        "fechaNacimiento": "2003-04-23",
        "rfc": "DECA0304238C6",
        "curp": "DECA030423HGTLRLA8",
        "domicilio": "Bari 202",
        "codigoPostal": "37278",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "4772285062",
        "foto": "foto1",
        "fechaIngreso": "2022-09-05"
    },
    {
        "id": 2,
        "nombre": "María",
        "apellidoPaterno": "García",
        "apellidoMaterno": "López",
        "genero": "Femenino",
        "fechaNacimiento": "1995-08-12",
        "rfc": "GALM950812BG1",
        "curp": "GALM950812MDFRPL09",
        "domicilio": "Juárez 123",
        "codigoPostal": "55010",
        "ciudad": "México",
        "estado": "Ciudad de México",
        "telefono": "5512345678",
        "foto": "foto2",
        "fechaIngreso": "2021-03-18"
    },
    {
        "id": 3,
        "nombre": "Carlos",
        "apellidoPaterno": "Sánchez",
        "apellidoMaterno": "Martínez",
        "genero": "Masculino",
        "fechaNacimiento": "1988-11-05",
        "rfc": "SACM881105HJ7",
        "curp": "SACM881105HDFRTR02",
        "domicilio": "Revolución 456",
        "codigoPostal": "64040",
        "ciudad": "Monterrey",
        "estado": "Nuevo León",
        "telefono": "8187654321",
        "foto": "foto3",
        "fechaIngreso": "2020-10-02"
    },
    {
        "id": 4,
        "nombre": "Ana",
        "apellidoPaterno": "López",
        "apellidoMaterno": "Guzmán",
        "genero": "Femenino",
        "fechaNacimiento": "2000-02-18",
        "rfc": "LOGA000218GR9",
        "curp": "LOGA000218MDFZNS04",
        "domicilio": "Hidalgo 789",
        "codigoPostal": "80020",
        "ciudad": "Culiacán",
        "estado": "Sinaloa",
        "telefono": "6679876543",
        "foto": "foto4",
        "fechaIngreso": "2023-01-15"
    },
    {
        "id": 5,
        "nombre": "Javier",
        "apellidoPaterno": "Ramírez",
        "apellidoMaterno": "Díaz",
        "genero": "Masculino",
        "fechaNacimiento": "1992-06-30",
        "rfc": "Radj920630IE3",
        "curp": "Radj920630HDFXZV01",
        "domicilio": "Gómez 567",
        "codigoPostal": "45050",
        "ciudad": "Guadalajara",
        "estado": "Jalisco",
        "telefono": "3338765432",
        "foto": "foto5",
        "fechaIngreso": "2022-05-09"
    },
    {
        "id": 6,
        "nombre": "Laura",
        "apellidoPaterno": "Hernández",
        "apellidoMaterno": "Luna",
        "genero": "Femenino",
        "fechaNacimiento": "1987-09-22",
        "rfc": "HELL870922JH6",
        "curp": "HELL870922MDFZLD03",
        "domicilio": "Callejón 345",
        "codigoPostal": "21010",
        "ciudad": "Puebla",
        "estado": "Puebla",
        "telefono": "2227654321",
        "foto": "foto6",
        "fechaIngreso": "2021-08-14"
    },
    {
        "id": 7,
        "nombre": "David",
        "apellidoPaterno": "Morales",
        "apellidoMaterno": "Castillo",
        "genero": "Masculino",
        "fechaNacimiento": "1999-03-11",
        "rfc": "MOCD990311KU0",
        "curp": "MOCD990311HDFRST05",
        "domicilio": "Morelos 678",
        "codigoPostal": "62000",
        "ciudad": "Cuernavaca",
        "estado": "Morelos",
        "telefono": "7776543210",
        "foto": "foto7",
        "fechaIngreso": "2022-11-20"
    },
    {
        "id": 8,
        "nombre": "Fernanda",
        "apellidoPaterno": "Pérez",
        "apellidoMaterno": "Juárez",
        "genero": "Femenino",
        "fechaNacimiento": "1996-12-08",
        "rfc": "PEJF961208GY2",
        "curp": "PEJF961208MDFRBN06",
        "domicilio": "Madero 789",
        "codigoPostal": "80050",
        "ciudad": "Chihuahua",
        "estado": "Chihuahua",
        "telefono": "6148765432",
        "foto": "foto8",
        "fechaIngreso": "2023-06-10"
    },
    {
        "id": 9,
        "nombre": "Luis",
        "apellidoPaterno": "González",
        "apellidoMaterno": "Vargas",
        "genero": "Masculino",
        "fechaNacimiento": "2001-07-17",
        "rfc": "GOVL010717IK7",
        "curp": "GOVL010717HDFRKP07",
        "domicilio": "Zaragoza 234",
        "codigoPostal": "36000",
        "ciudad": "Guanajuato",
        "estado": "Guanajuato",
        "telefono": "4737654321",
        "foto": "foto9",
        "fechaIngreso": "2022-04-25"
    },
    {
        "id": 10,
        "nombre": "Alejandra Del Rocío",
        "apellidoPaterno": "Cardona",
        "apellidoMaterno": "Guerra",
        "genero": "Femenino",
        "fechaNacimiento": "1967-10-27",
        "rfc": "CAGX6710277J6",
        "curp": "CXGA671027MCLRRL09",
        "domicilio": "Bari 202",
        "codigoPostal": "37278",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "4772256511",
        "foto": "foto10",
        "fechaIngreso": "2005-09-01"
    },
    {
        "id": 11,
        "nombre": "Sofía",
        "apellidoPaterno": "Martínez",
        "apellidoMaterno": "Sánchez",
        "genero": "Femenino",
        "fechaNacimiento": "1998-03-25",
        "rfc": "MASO980325IT4",
        "curp": "MASO980325MDFRQS09",
        "domicilio": "Allende 123",
        "codigoPostal": "37000",
        "ciudad": "León",
        "estado": "Guanajuato",
        "telefono": "4775678901",
        "foto": "foto11",
        "fechaIngreso": "2022-08-05"
    },
    {
        "id": 12,
        "nombre": "Eduardo",
        "apellidoPaterno": "Luna",
        "apellidoMaterno": "Rodríguez",
        "genero": "Masculino",
        "fechaNacimiento": "1990-12-10",
        "rfc": "LURE901210JW6",
        "curp": "LURE901210HDFRVD04",
        "domicilio": "Hidalgo 456",
        "codigoPostal": "62080",
        "ciudad": "Cuernavaca",
        "estado": "Morelos",
        "telefono": "7771234567",
        "foto": "foto12",
        "fechaIngreso": "2021-07-02"
    },
    {
        "id": 13,
        "nombre": "Valentina",
        "apellidoPaterno": "González",
        "apellidoMaterno": "Hernández",
        "genero": "Femenino",
        "fechaNacimiento": "2002-09-15",
        "rfc": "GOHV020915MN0",
        "curp": "GOHV020915MDFRVQ05",
        "domicilio": "Juárez 789",
        "codigoPostal": "55020",
        "ciudad": "México",
        "estado": "Ciudad de México",
        "telefono": "5523456789",
        "foto": "foto13",
        "fechaIngreso": "2023-03-10"
    },
    {
        "id": 14,
        "nombre": "Juan",
        "apellidoPaterno": "Ramírez",
        "apellidoMaterno": "Gómez",
        "genero": "Masculino",
        "fechaNacimiento": "1985-07-08",
        "rfc": "RAGJ850708CV7",
        "curp": "RAGJ850708HDFRPS06",
        "domicilio": "Reforma 567",
        "codigoPostal": "66000",
        "ciudad": "Monterrey",
        "estado": "Nuevo León",
        "telefono": "8182345678",
        "foto": "foto14",
        "fechaIngreso": "2020-11-15"
    },
    {
        "id": 15,
        "nombre": "Isabella",
        "apellidoPaterno": "Sánchez",
        "apellidoMaterno": "Flores",
        "genero": "Femenino",
        "fechaNacimiento": "1993-04-28",
        "rfc": "SAFI9304285X8",
        "curp": "SAFI930428MDFRVB07",
        "domicilio": "Zapata 234",
        "codigoPostal": "36020",
        "ciudad": "Guanajuato",
        "estado": "Guanajuato",
        "telefono": "4738765432",
        "foto": "foto15",
        "fechaIngreso": "2022-09-20"
    },
    {
        "id": 16,
        "nombre": "Fernando",
        "apellidoPaterno": "Pérez",
        "apellidoMaterno": "Mendoza",
        "genero": "Masculino",
        "fechaNacimiento": "1986-10-31",
        "rfc": "PEMF861031EJ3",
        "curp": "PEMF861031HDFRDF08",
        "domicilio": "Revolución 789",
        "codigoPostal": "80060",
        "ciudad": "Chihuahua",
        "estado": "Chihuahua",
        "telefono": "6147654321",
        "foto": "foto16",
        "fechaIngreso": "2021-12-28"
    },
    {
        "id": 17,
        "nombre": "Mariano",
        "apellidoPaterno": "López",
        "apellidoMaterno": "Ortega",
        "genero": "Masculino",
        "fechaNacimiento": "1997-11-20",
        "rfc": "LOMM971120EK1",
        "curp": "LOMM971120HDFRMN09",
        "domicilio": "Madero 345",
        "codigoPostal": "21020",
        "ciudad": "Puebla",
        "estado": "Puebla",
        "telefono": "2228765432",
        "foto": "foto17",
        "fechaIngreso": "2023-04-12"
    },
    {
        "id": 18,
        "nombre": "Diana",
        "apellidoPaterno": "Hernández",
        "apellidoMaterno": "García",
        "genero": "Femenino",
        "fechaNacimiento": "2004-01-12",
        "rfc": "HEGD0401124T5",
        "curp": "HEGD040112MDFRHN06",
        "domicilio": "Obregón 678",
        "codigoPostal": "37020",
        "ciudad": "León",
        "estado": "Guanajuato",
        "telefono": "4776789012",
        "foto": "foto18",
        "fechaIngreso": "2023-02-05"
    },
    {
        "id": 19,
        "nombre": "Roberto",
        "apellidoPaterno": "García",
        "apellidoMaterno": "Torres",
        "genero": "Masculino",
        "fechaNacimiento": "2000-08-05",
        "rfc": "GATR000805RP4",
        "curp": "GATR000805HDFRRB05",
        "domicilio": "Zaragoza 456",
        "codigoPostal": "55030",
        "ciudad": "México",
        "estado": "Ciudad de México",
        "telefono": "5545678901",
        "foto": "foto19",
        "fechaIngreso": "2022-07-15"
    },
    {
        "id": 20,
        "nombre": "Camila",
        "apellidoPaterno": "Luna",
        "apellidoMaterno": "Mendoza",
        "genero": "Femenino",
        "fechaNacimiento": "1991-05-17",
        "rfc": "LUMC910517NB2",
        "curp": "LUMC910517MDFRCM08",
        "domicilio": "Independencia 789",
        "codigoPostal": "66050",
        "ciudad": "Monterrey",
        "estado": "Nuevo León",
        "telefono": "8183456789",
        "foto": "foto20",
        "fechaIngreso": "2021-10-25"
    }
];

/////////////////////////
/* ARREGLO DE CLIENTES */
/////////////////////////
var clientes = [
    {
        "id": 22080011,
        "email": "sofiams98@gmail.com",
        "estatus": 1,
        "persona": personas[10]
    },
    {
        "id": 21070012,
        "email": "eduardolr90@gmail.com",
        "estatus": 1,
        "persona": personas[11]
    },
    {
        "id": 22080012,
        "email": "valentinagh02@gmail.com",
        "estatus": 1,
        "persona": personas[12]
    },
    {
        "id": 22080013,
        "email": "juanrg85@gmail.com",
        "estatus": 1,
        "persona": personas[13]
    },
    {
        "id": 22080014,
        "email": "isabellasf93@gmail.com",
        "estatus": 1,
        "persona": personas[14]
    },
    {
        "id": 22080015,
        "email": "fernandopm86@gmail.com",
        "estatus": 1,
        "persona": personas[15]
    },
    {
        "id": 22080016,
        "email": "marianolo97@gmail.com",
        "estatus": 1,
        "persona": personas[16]
    },
    {
        "id": 22080017,
        "email": "dianahg04@gmail.com",
        "estatus": 1,
        "persona": personas[17]
    },
    {
        "id": 22080018,
        "email": "robertogt00@gmail.com",
        "estatus": 1,
        "persona": personas[18]
    },
    {
        "id": 22080019,
        "email": "camilalm91@gmail.com",
        "estatus": 1,
        "persona": personas[19]
    }
];

///////////////////////////
/* ARREGLO DE SUCURSALES */
///////////////////////////
var sucursales = [
    {
        "id": 1,
        "nombre": "Matriz",
        "titular": "Juan Pérez",
        "rfc": "PEJL850920ABC12",
        "domicilio": "Av. Reforma 456",
        "colonia": "Centro",
        "codigoPostal": "37000",
        "ciudad": "León",
        "estado": "Guanajuato",
        "telefono": "4772345678",
        "latitud": "21.1589",
        "longitud": "-101.6544",
        "estatus": 1,
    },
    {
        "id": 2,
        "nombre": "Centro",
        "titular": "Alejandra González",
        "rfc": "GOAL850920XYZ12",
        "domicilio": "Av. Juárez 789",
        "colonia": "Centro",
        "codigoPostal": "37000",
        "ciudad": "León",
        "estado": "Guanajuato",
        "telefono": "4773456789",
        "latitud": "21.1234",
        "longitud": "-101.6789",
        "estatus": 1,
    },
    {
        "id": 3,
        "nombre": "Centro Max",
        "titular": "Ricardo Martínez",
        "rfc": "MARR850920ABC12",
        "domicilio": "Blvd. Adolfo López Mateos 123",
        "colonia": "Predio San Carlos",
        "codigoPostal": "37270",
        "ciudad": "León",
        "estado": "Guanajuato",
        "telefono": "4774567890",
        "latitud": "21.1605",
        "longitud": "-101.7014",
        "estatus": 1,
    },
    {
        "id": 4,
        "nombre": "Plaza Mayor",
        "titular": "Mónica Hernández",
        "rfc": "HEMM850920XYZ12",
        "domicilio": "Blvd. José María Morelos 456",
        "colonia": "Fraccionamiento El Mayor",
        "codigoPostal": "37510",
        "ciudad": "León",
        "estado": "Guanajuato",
        "telefono": "4775678901",
        "latitud": "21.1150",
        "longitud": "-101.7002",
        "estatus": 1,
    },
    {
        "id": 5,
        "nombre": 'Sucursal A',
        "titular": 'María López',
        "rfc": 'LOHS850920XYZ12',
        "domicilio": 'Av. Principal 123',
        "colonia": 'Centro',
        "codigoPostal": 'Ciudad de México',
        "ciudad": 'Ciudad de México',
        "estado": '12345',
        "telefono": '5551234567',
        "latitud": '19.4326',
        "longitud": '-99.1332',
        "estatus": 1,
    },
    {
        "id": 6,
        "nombre": "Sucursal B",
        "titular": "Carlos Martínez",
        "rfc": "MAGC010210PQR78",
        "domicilio": "Calle Secundaria 456",
        "colonia": "Bella Vista",
        "ciudad": "Monterrey",
        "estado": "Nuevo León",
        "codigoPostal": "54321",
        "telefono": "5559876543",
        "longitud": "-100.3161",
        "latitud": "25.6866",
        "estatus": 1,
    },
    {
        "id": 7,
        "nombre": "Sucursal C",
        "titular": "Ana Pérez",
        "rfc": "PEAR981105XYZ12",
        "domicilio": "Carrera 789",
        "colonia": "Juárez",
        "ciudad": "Puebla",
        "estado": "Puebla",
        "codigoPostal": "54321",
        "telefono": "5552345678",
        "longitud": "-98.2063",
        "latitud": "19.0414",
        "estatus": 1,
    },
    {
        "id": 8,
        "nombre": "Sucursal D",
        "titular": "Luis Sánchez",
        "rfc": "SAVL820730ABC56",
        "domicilio": "Avenida Principal 234",
        "colonia": "San Miguel",
        "ciudad": "Tijuana",
        "estado": "Baja California",
        "codigoPostal": "67890",
        "telefono": "5556789012",
        "longitud": "-117.0382",
        "latitud": "32.5149",
        "estatus": 1,
    },
    {
        "id": 9,
        "nombre": "Sucursal E",
        "titular": "Laura González",
        "rfc": "GOLF950318DEF89",
        "domicilio": "Calle Ocampo 567",
        "colonia": "Nueva Era",
        "ciudad": "Mérida",
        "estado": "Yucatán",
        "codigoPostal": "43210",
        "telefono": "5553456789",
        "longitud": "-89.6237",
        "latitud": "20.9676",
        "estatus": 1,
    },
    {
        "id": 10,
        "nombre": "Sucursal F",
        "titular": "Javier Ruíz",
        "rfc": "RULJ771203LMN12",
        "domicilio": "Boulevard 890",
        "colonia": "Los Pinos",
        "ciudad": "Cancún",
        "estado": "Quintana Roo",
        "codigoPostal": "54321",
        "telefono": "5554567890",
        "longitud": "-86.8515",
        "latitud": "21.1619",
        "estatus": 1,
    }
];

//////////////////////////
/* ARREGLO DE EMPLEADOS */
//////////////////////////
var empleados = [
    {
        "id": personas[1].id,
        "codigo": "20100003",
        "puesto": "Administrador Central",
        "salario": "10000",
        "activo": 1,
        "persona": personas[1],
        "sucursal": sucursales[0]
    },
    {
        "id": personas[2].id,
        "codigo": "23010004",
        "puesto": "Administrador Sucursal",
        "salario": "10000",
        "activo": 1,
        "persona": personas[2],
        "sucursal": sucursales[0]
    },
    {
        "id": personas[3].id,
        "codigo": "22050005",
        "puesto": "Empleado",
        "salario": "10000",
        "activo": 1,
        "persona": personas[3],
        "sucursal": sucursales[0]
    },
    {
        "id": personas[4].id,
        "codigo": "21080006",
        "puesto": "Empleado",
        "salario": "10000",
        "activo": 1,
        "persona": personas[4],
        "sucursal": sucursales[0]
    },
    {
        "id": personas[5].id,
        "codigo": "22020007",
        "puesto": "Empleado",
        "salario": "10000",
        "activo": 1,
        "persona": personas[5],
        "sucursal": sucursales[0]
    },
    {
        "id": personas[6].id,
        "codigo": "23080008",
        "puesto": "Empleado",
        "salario": "10000",
        "activo": 1,
        "persona": personas[6],
        "sucursal": sucursales[0]
    },
    {
        "id": personas[7].id,
        "codigo": "22060009",
        "puesto": "Empleado",
        "salario": "10000",
        "activo": 1,
        "persona": personas[7],
        "sucursal": sucursales[0]
    },
    {
        "id": personas[8].id,
        "codigo": "21090010",
        "puesto": "Empleado",
        "salario": "10000",
        "activo": 1,
        "persona": personas[8],
        "sucursal": sucursales[0]
    },
    {
        "id": personas[9].id,
        "codigo": "22040011",
        "puesto": "Empleado",
        "salario": "10000",
        "activo": 1,
        "persona": personas[9],
        "sucursal": sucursales[0]
    },
    {
        "id": personas[10].id,
        "codigo": "23070012",
        "puesto": "Empleado",
        "salario": "10000",
        "activo": 1,
        "persona": personas[10],
        "sucursal": sucursales[0]
    }

];

/////////////////////////
/* ARREGLO DE USUARIOS */
/////////////////////////
var usuarios = [
    {
        "usuario": "admin",
        "contrasena": "admin",
        "rol": "ADMC",
        "empleado": empleados[0]
    },
    {
        "usuario": "admins",
        "contrasena": "admins",
        "rol": "ADMS",
        "empleado": empleados[1]
    },
    {
        "usuario": empleados[2].codigo,
        "contrasena": empleados[2].codigo,
        "rol": "EMPS",
        "empleado": empleados[2]
    },
    {
        "usuario": empleados[3].codigo,
        "contrasena": empleados[3].codigo,
        "rol": "EMPS",
        "empleado": empleados[3]
    },
    {
        "usuario": empleados[4].codigo,
        "contrasena": empleados[4].codigo,
        "rol": "EMPS",
        "empleado": empleados[4]
    },
    {
        "usuario": empleados[5].codigo,
        "contrasena": empleados[5].codigo,
        "rol": "EMPS",
        "empleado": empleados[5]
    },
    {
        "usuario": empleados[6].codigo,
        "contrasena": empleados[6].codigo,
        "rol": "EMPS",
        "empleado": empleados[6]
    },
    {
        "usuario": empleados[7].codigo,
        "contrasena": empleados[7].codigo,
        "rol": "EMPS",
        "empleado": empleados[7]
    },
    {
        "usuario": empleados[8].codigo,
        "contrasena": empleados[8].codigo,
        "rol": "EMPS",
        "empleado": empleados[8]
    },
    {
        "usuario": empleados[9].codigo,
        "contrasena": empleados[9].codigo,
        "rol": "EMPS",
        "empleado": empleados[9]
    }
];

//////////////////////////
/* ARREGLO DE PRODUCTOS */
//////////////////////////
var productos = [

    {
      txtID: 1,
      txtNombreProducto: 'Ibuprofeno',
      txtNombreGenerico: 'Ibuprofeno',
      txtFormaFarmaceutica: 'Tableta',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '30 tabletas',     
      txtIndicaciones: 'Alivio temporal del dolor y fiebre',
      txtContraIndicaciones: 'No usar en caso de alergia a ibuprofeno',
      txtConcentracion: '200 mg',
      txtUnidadesEnEnvase: '30',
      txtPrecioCompra: '5.99',
      txtPrecioVenta: '10.49',
      txtCodigoBarras: '123456789',
      txtRutaFoto: '/imagenes/ibuprofeno.jpp',            
      estatus: 1
    },
  
    {
      txtID: 2,
      txtNombreProducto: 'Paracetamol',
      txtNombreGenerico: 'Paracetamol',
      txtFormaFarmaceutica: 'Tableta',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '24 tabletas',     
      txtIndicaciones: 'Alivio temporal del dolor y fiebre',
      txtContraIndicaciones: 'No exceder dosis recomendada',
      txtConcentracion: '500 mg',
      txtUnidadesEnEnvase: '24',
      txtPrecioCompra: '3.49',
      txtPrecioVenta: '7.99',
      txtCodigoBarras: '987654321',
      txtRutaFoto: '/imagenes/paracetamol.jpg',            
      estatus: 1
    },
    
    {
      txtID: 3,
      txtNombreProducto: 'Amoxicilina',
      txtNombreGenerico: 'Amoxicilina',
      txtFormaFarmaceutica: 'Capsula',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '20 capsulas',     
      txtIndicaciones: 'Tratamiento de infecciones bacterianas',
      txtContraIndicaciones: 'No usar en caso de alergia a penicilina',
      txtConcentracion: '500 mg',
      txtUnidadesEnEnvase: '20',
      txtPrecioCompra: '12.75',
      txtPrecioVenta: '22.99',
      txtCodigoBarras: '654321987',
      txtRutaFoto: '/imagenes/amoxicilina.jpg',            
      estatus: 1
    },
  
    {
      txtID: 4,
      txtNombreProducto: 'Loratadina',
      txtNombreGenerico: 'Loratadina',
      txtFormaFarmaceutica: 'Tableta',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '10 tabletas',     
      txtIndicaciones: 'Alivio temporal de alergias',
      txtContraIndicaciones: 'No usar en caso de alergia a loratadina',
      txtConcentracion: '10 mg',
      txtUnidadesEnEnvase: '10',
      txtPrecioCompra: '8.50',
      txtPrecioVenta: '14.99',
      txtCodigoBarras: '369852147',
      txtRutaFoto: '/imagenes/loratadina.jpg',            
      estatus: 1
    },
  
    {
      txtID: 5,
      txtNombreProducto: 'Aspirina',
      txtNombreGenerico: 'Acido acetilsalicilico',
      txtFormaFarmaceutica: 'Tableta',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '36 tabletas',     
      txtIndicaciones: 'Alivio temporal del dolor y fiebre',
      txtContraIndicaciones: 'No usar en caso de ulcera',
      txtConcentracion: '500 mg',
      txtUnidadesEnEnvase: '36',
      txtPrecioCompra: '7.25',
      txtPrecioVenta: '12.99',
      txtCodigoBarras: '258369147',
      txtRutaFoto: '/imagenes/aspirina.jpg',            
      estatus: 1
    },
  
    {
      txtID: 6,
      txtNombreProducto: 'Omeprazol',
      txtNombreGenerico: 'Omeprazol',
      txtFormaFarmaceutica: 'Capsula',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '14 capsulas',     
      txtIndicaciones: 'Reduccion de acido estomacal',
      txtContraIndicaciones: 'No usar en caso de alergia a omeprazol',
      txtConcentracion: '20 mg',
      txtUnidadesEnEnvase: '14',
      txtPrecioCompra: '9.99',
      txtPrecioVenta: '18.49',
      txtCodigoBarras: '741852963',
      txtRutaFoto: '/imagenes/omeprazol.jpg',            
      estatus: 1
    },
    
    {
      txtID: 7,
      txtNombreProducto: 'Vitaminas C',
      txtNombreGenerico: 'Acido ascorbico',
      txtFormaFarmaceutica: 'Tableta',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '30 tabletas',     
      txtIndicaciones: 'Suplemento de vitamina C',
      txtContraIndicaciones: 'No exceder dosis recomendada',
      txtConcentracion: '1000 mg',
      txtUnidadesEnEnvase: '30',
      txtPrecioCompra: '6.99',
      txtPrecioVenta: '13.49',
      txtCodigoBarras: '963852741',
      txtRutaFoto: '/imagenes/vitamina_c.jpg',            
      estatus: 1
    },
  
    {
      txtID: 8,
      txtNombreProducto: 'Diclofenaco',
      txtNombreGenerico: 'Diclofenaco sodico',
      txtFormaFarmaceutica: 'Tableta',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '20 tabletas',     
      txtIndicaciones: 'Alivio temporal del dolor y fiebre',
      txtContraIndicaciones: 'No usar en caso de ulcera',
      txtConcentracion: '50 mg',
      txtUnidadesEnEnvase: '20',
      txtPrecioCompra: '6.75',
      txtPrecioVenta: '11.99',
      txtCodigoBarras: '147258369',
      txtRutaFoto: '/imagenes/diclofenaco.jpg',            
      estatus: 1
    },
  
    {
      txtID: 9,
      txtNombreProducto: 'Salbutamol',
      txtNombreGenerico: 'Salbutamol',
      txtFormaFarmaceutica: 'Inhalador',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '1 inhalador',     
      txtIndicaciones: 'Alivio temporal de problemas respiratorios',
      txtContraIndicaciones: 'No exceder dosis recomendada',
      txtConcentracion: '100 mcg',
      txtUnidadesEnEnvase: '1',
      txtPrecioCompra: '15.25',
      txtPrecioVenta: '28.99',
      txtCodigoBarras: '852369741',
      txtRutaFoto: '/imagenes/salbutamol.jpg',            
      estatus: 1
    },
  
    {
      txtID: 10,
      txtNombreProducto: 'Cetirizina',
      txtNombreGenerico: 'Cetirizina',
      txtFormaFarmaceutica: 'Tableta',
      txtUnidadesDeMedida: 'mg', 
      txtPresentacion: '14 tabletas',     
      txtIndicaciones: 'Alivio temporal de alergias',
      txtContraIndicaciones: 'No usar en caso de alergia a cetirizina',
      txtConcentracion: '10 mg',
      txtUnidadesEnEnvase: '14',
      txtPrecioCompra: '7.75',
      txtPrecioVenta: '13.99',
      txtCodigoBarras: '596874123',
      txtRutaFoto: '/imagenes/cetirizina.jpg',            
      estatus: 1
    },
  
  ];

///////////////////////////
/* ARREGLO DE INVENTARIO */
///////////////////////////
var inventarios = [
    {
        "id": 1,
        "cantidad": 50,
        "precio": 547.0,
        "producto": productos[0],
        "sucursal": sucursales[0]
    },
    {
        "id": 2,
        "cantidad": 50,
        "precio": 210.0,
        "producto": productos[1],
        "sucursal": sucursales[0]
    },
    {
        "id": 3,
        "cantidad": 50,
        "precio": 254.0,
        "producto": productos[2],
        "sucursal": sucursales[0]
    },
    {
        "id": 4,
        "cantidad": 50,
        "precio": 665.0,
        "producto": productos[3],
        "sucursal": sucursales[0]
    },
    {
        "id": 5,
        "cantidad": 50,
        "precio": 306.0,
        "producto": productos[4],
        "sucursal": sucursales[0]
    },
    {
        "id": 6,
        "cantidad": 50,
        "precio": 277.0,
        "producto": productos[5],
        "sucursal": sucursales[0]
    },
    {
        "id": 7,
        "cantidad": 50,
        "precio": 973.0,
        "producto": productos[6],
        "sucursal": sucursales[0]
    },
    {
        "id": 8,
        "cantidad": 50,
        "precio": 213.0,
        "producto": productos[7],
        "sucursal": sucursales[0]
    },
    {
        "id": 9,
        "cantidad": 50,
        "precio": 537.0,
        "producto": productos[8],
        "sucursal": sucursales[0]
    },
    {
        "id": 10,
        "cantidad": 50,
        "precio": 686.0,
        "producto": productos[9],
        "sucursal": sucursales[0]
    }
];

///////////////////////
/* ARREGLO DE VENTAS */
///////////////////////
var ventas = [
    {
        "id": 1,
        "fechaHora": "2023-08-09T10:00:00",
        "total": 2144.0,
        "estatus": 1,
        "cliente": clientes[0],
        "empleado": empleados[0]
    },
    {
        "id": 2,
        "fechaHora": "2023-08-09T15:30:00",
        "total": 300.0,
        "estatus": 1,
        "cliente": clientes[1],
        "empleado": empleados[1]
    },
    {
        "id": 3,
        "fechaHora": "2023-08-10T12:15:00",
        "total": 1350.0,
        "estatus": 1,
        "cliente": clientes[2],
        "empleado": empleados[2]
    },
    {
        "id": 4,
        "fechaHora": "2023-08-11T09:45:00",
        "total": 1080.0,
        "estatus": 1,
        "cliente": clientes[3],
        "empleado": empleados[3]
    },
    {
        "id": 5,
        "fechaHora": "2023-08-12T16:30:00",
        "total": 450.0,
        "estatus": 1,
        "cliente": clientes[4],
        "empleado": empleados[4]
    },
    {
        "id": 6,
        "fechaHora": "2023-08-13T14:20:00",
        "total": 620.0,
        "estatus": 1,
        "cliente": clientes[5],
        "empleado": empleados[5]
    },
    {
        "id": 7,
        "fechaHora": "2023-08-14T11:10:00",
        "total": 750.0,
        "estatus": 1,
        "cliente": clientes[6],
        "empleado": empleados[6]
    },
    {
        "id": 8,
        "fechaHora": "2023-08-15T17:00:00",
        "total": 980.0,
        "estatus": 1,
        "cliente": clientes[7],
        "empleado": empleados[7]
    },
    {
        "id": 9,
        "fechaHora": "2023-08-16T13:45:00",
        "total": 1440.0,
        "estatus": 1,
        "cliente": clientes[8],
        "empleado": empleados[8]
    },
    {
        "id": 10,
        "fechaHora": "2023-08-17T10:30:00",
        "total": 1700.0,
        "estatus": 1,
        "cliente": clientes[9],
        "empleado": empleados[9]
    }
];
var detallesVenta = [
    {
        "precio": 547.0,
        "cantidad": 2,
        "subtotal": 1094.0,
        "producto": productos[0],
        "venta": ventas[0]
    },
    {
        "precio": 210.0,
        "cantidad": 5,
        "subtotal": 1050.0,
        "producto": productos[1],
        "venta": ventas[0]
    },
    {
        "precio": 254.0,
        "cantidad": 3,
        "subtotal": 762.0,
        "producto": productos[2],
        "venta": ventas[1]
    },
    {
        "precio": 665.0,
        "cantidad": 1,
        "subtotal": 665.0,
        "producto": productos[3],
        "venta": ventas[1]
    },
    {
        "precio": 306.0,
        "cantidad": 4,
        "subtotal": 1224.0,
        "producto": productos[4],
        "venta": ventas[2]
    },
    {
        "precio": 277.0,
        "cantidad": 2,
        "subtotal": 554.0,
        "producto": productos[5],
        "venta": ventas[2]
    },
    {
        "precio": 973.0,
        "cantidad": 1,
        "subtotal": 973.0,
        "producto": productos[6],
        "venta": ventas[3]
    },
    {
        "precio": 213.0,
        "cantidad": 3,
        "subtotal": 639.0,
        "producto": productos[7],
        "venta": ventas[3]
    },
    {
        "precio": 537.0,
        "cantidad": 2,
        "subtotal": 1074.0,
        "producto": productos[8],
        "venta": ventas[4]
    },
    {
        "precio": 686.0,
        "cantidad": 1,
        "subtotal": 686.0,
        "producto": productos[9],
        "venta": ventas[4]
    }
];

////////////////////////
/* ARREGLO DE PEDIDOS */
////////////////////////
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


var reportePedidos = [
    {
      idCompra: 1,
      fecha: '2023-08-10 15:30:00',
      nombreSucursal: 'Sucursal A',
      empleado: 'Juan Pérez',
      codigoPostal: '12345',
      ciudad: 'Ciudad Uno',
      estado: 'Estado Uno',
      totalPedido: 150.75
    },
    {
      idCompra: 2,
      fecha: '2023-08-09 10:45:00',
      nombreSucursal: 'Sucursal B',
      empleado: 'María López',
      codigoPostal: '67890',
      ciudad: 'Ciudad Dos',
      estado: 'Estado Dos',
      totalPedido: 98.50
    },
    {
      idCompra: 3,
      fecha: '2023-08-08 12:15:00',
      nombreSucursal: 'Sucursal C',
      empleado: 'Carlos Rodríguez',
      codigoPostal: '54321',
      ciudad: 'Ciudad Tres',
      estado: 'Estado Tres',
      totalPedido: 235.20
    },
    {
      idCompra: 4,
      fecha: '2023-08-07 09:30:00',
      nombreSucursal: 'Sucursal D',
      empleado: 'Ana Martínez',
      codigoPostal: '98765',
      ciudad: 'Ciudad Cuatro',
      estado: 'Estado Cuatro',
      totalPedido: 75.40
    },
    {
      idCompra: 5,
      fecha: '2023-08-06 14:00:00',
      nombreSucursal: 'Sucursal E',
      empleado: 'Luis Torres',
      codigoPostal: '13579',
      ciudad: 'Ciudad Cinco',
      estado: 'Estado Cinco',
      totalPedido: 180.90
    },
    {
      idCompra: 6,
      fecha: '2023-08-05 11:45:00',
      nombreSucursal: 'Sucursal F',
      empleado: 'Elena Sánchez',
      codigoPostal: '24680',
      ciudad: 'Ciudad Seis',
      estado: 'Estado Seis',
      totalPedido: 120.30
    },
    {
      idCompra: 7,
      fecha: '2022-08-04 16:20:00',
      nombreSucursal: 'Sucursal G',
      empleado: 'Hugo Ríos',
      codigoPostal: '86420',
      ciudad: 'Ciudad Siete',
      estado: 'Estado Siete',
      totalPedido: 45.60
    },
    {
      idCompra: 8,
      fecha: '2023-08-03 13:10:00',
      nombreSucursal: 'Sucursal H',
      empleado: 'Diana Pérez',
      codigoPostal: '56789',
      ciudad: 'Ciudad Ocho',
      estado: 'Estado Ocho',
      totalPedido: 320.15
    },
    {
      idCompra: 9,
      fecha: '2023-08-02 18:40:00',
      nombreSucursal: 'Sucursal I',
      empleado: 'Roberto González',
      codigoPostal: '97531',
      ciudad: 'Ciudad Nueve',
      estado: 'Estado Nueve',
      totalPedido: 67.80
    },
    {
      idCompra: 10,
      fecha: '2023-08-01 20:15:00',
      nombreSucursal: 'Sucursal J',
      empleado: 'Laura Morales',
      codigoPostal: '31415',
      ciudad: 'Ciudad Diez',
      estado: 'Estado Diez',
      totalPedido: 210.00
    }
  ];
  


