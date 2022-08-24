function crearCelda(texto, fila) {
  const celda = document.createElement("td");
  const textoCelda = document.createTextNode(texto);
  celda.appendChild(textoCelda);
  fila.appendChild(celda);
}

function llenarTabla(usuarios) {
  usuarios.forEach((usuario) => {
    const fila = document.createElement("tr");

    crearCelda(usuario.id, fila);
    crearCelda(usuario.name, fila);
    crearCelda(usuario.username, fila);
    crearCelda(usuario.email, fila);
    crearCelda(usuario.address.street, fila);

    document.querySelector("#table-body").appendChild(fila);
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => llenarTabla(data));
