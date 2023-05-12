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
      <td> <button type="button" class="btnVerAuto" id="${a.id}">Ver Detalles</button> </td>
      <td> <button type="button" class="btnEliminar" id="${a.id}">Eliminar</button></td> 
      </tr>
      `;
    }

  contenedor.innerHTML = tabla;
  
//Eventos de los botones de ver auto
  let botonesVerAuto = document.querySelectorAll('.btnVerAuto');
  botonesVerAuto.forEach(boton => { 
    boton.addEventListener('click', (e) => {
      let id = e.target.id;
      let detalleAuto = autos.find(e => e.id === id);
      alert(`${detalleAuto.marca} ${detalleAuto.modelo} ${detalleAuto.version} \n${detalleAuto.tipo} ${detalleAuto.anio} \n${detalleAuto.capacidadCarga} \n\n${detalleAuto.precio} \n\n${detalleAuto.id}`);
    });
  });

//Eventos de los botones de eliminar auto
  let botonesEliminar = document.querySelectorAll('.btnEliminar');

  const borrarAuto = async (e) => {
    let id = e.target.id;

    let respuesta = await fetch(`${endpoint}/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })

    loadAutos();
  }
  
  botonesEliminar.forEach(boton => { 
    boton.addEventListener('click', (e) => {    
      let id = e.target.id;
      let detalleAuto = autos.find(e => e.id === id);
      borrarAuto(e);
      
      alert(`Se ha eliminado: \n${detalleAuto.marca} ${detalleAuto.modelo} ${detalleAuto.version} \n${detalleAuto.id}`);
      mostrarAutos();
    });
  });
  
}

  async function loadAutos() {
    const respuesta = await fetch(url_base + endpoint);
    autos = await respuesta.json();
    console.log(autos);

    mostrarAutos();
  }

loadAutos();

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