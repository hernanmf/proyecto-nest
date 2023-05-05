const url_base = "http://localhost:3000";
const endpoint = "/autos";
const d = document;
let autos = [];

let contenedor = d.getElementById("tblAutos");
let btnVerAuto = d.getElementById("btnVerAuto");

const mostrarAutos = () => {
  let tabla = "";
  for (let a of autos) {
    //console.log(r);
    tabla += `<tr>
      <td>${a.id}</td>
      <td>${a.marca}</td>
      <td>${a.modelo}</td>
      <td>${a.precio}</td>
      <td> <button type="button" class="btnVerAuto" value="${a.id}">Ver Detalles</button> </td>
     
      </tr>
      `;
    }
         /* <td> <button type="button" class="btnEliminar" id="${r.id}">Eliminar</button></td>  */

  contenedor.innerHTML = tabla;
}

  async function loadAutos() {
    const respuesta = await fetch(url_base + endpoint);
    autos = await respuesta.json();
    console.log(autos);

    mostrarAutos();
  }

loadAutos();

btnVerAuto.addEventListener('click', () => {
  const idAuto = btnVerAuto.value;
  verAuto(idAuto);
});

function verAuto(idAuto) {
  fetch(url_base + endpoint +"/"+idAuto)
    .then(response => response.json())
    .then(auto => {
      console.log(auto);
      alert(`El resultado del endpoint es: ${auto}`);
    })
    .catch(error => {
      alert('Ha ocurrido un error al obtener el auto que querias ver.');
      console.error(error);
    });
}