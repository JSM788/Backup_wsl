interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Juan",
  lastName: "Pérez",
  age: 21,
  location: "Madrid",
};

const student2: Student = {
  firstName: "María",
  lastName: "García",
  age: 22,
  location: "Barcelona",
};

const studentsList: Student[] = [student1, student2];


// Obtén una referencia al elemento donde deseas agregar la tabla
const contenedor = document.querySelector('#mi-contenedor');

// Crea un elemento table y agrégalo al contenedor
const tabla = document.createElement('table');
contenedor.appendChild(tabla);

// Itera a través de la matriz studentsList y agrega una fila para cada elemento
studentsList.forEach((estudiante) => {
  const filaElemento = document.createElement('tr');

  // Crea dos celdas en la fila, una con el nombre del estudiante y otra con su ubicación
  const celdaNombreElemento = document.createElement('td');
  celdaNombreElemento.textContent = estudiante.firstName;
  filaElemento.appendChild(celdaNombreElemento);

  const celdaUbicacionElemento = document.createElement('td');
  celdaUbicacionElemento.textContent = estudiante.location;
  filaElemento.appendChild(celdaUbicacionElemento);

  tabla.appendChild(filaElemento);
});