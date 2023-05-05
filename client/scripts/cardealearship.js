const url_base = "http://localhost:3000";
const endpoint = "/autos";
let autos = [];

let contenedor = document.getElementById("tblAutos");

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
  console.log("se hizo tabla");
  const btnVerAutos = document.querySelectorAll('.btnVerAuto');
  let btnVerAutosListeners = [];
 console.log("se genero array");
  btnVerAutos.forEach((btnVerAuto) => {
    const autoId = btnVerAutos.value;
    const btnVerAutoListener = () => {
      alert(`Has hecho clic en el botón Ver Auto con el ID ${autoId}.`);
    // Aquí puedes hacer lo que necesites con el ID del auto
    };
    btnVerAutosListeners.push(btnVerAutoListener);
  });
  console.log("se generaron los eventlister");
  
}

  async function loadAutos() {
    const respuesta = await fetch(url_base + endpoint);
    autos = await respuesta.json();
    console.log(autos);

    mostrarAutos();
  }

loadAutos();

//usamos el evento DOMCONTENTLOADED para que se genere el eventlistener del boton una vez generado sino da null




/* function verAuto(idAuto) {
  fetch(url_base + endpoint +"/"+idAuto)
    .then(response => response.json())
    .then(auto => {
      console.log(auto);
      alert(`El resultado del endpoint es: ${idAuto}`);
    })
    .catch(error => {
      alert('Ha ocurrido un error al obtener el auto que querias ver.');
      console.error(error);
    });
} */