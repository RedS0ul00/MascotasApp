const btnGato = document.getElementById('btnGato')
let btnPerro = document.getElementById('btnPerro')

const getMascotas = (url) => {
    const muestraMascota = document.querySelector('grid-mascotas')
    muestraMascota.innerHTML = '';
    fetch(url)
    .then((resp)=> resp.json())
    -then(data)=> {
        data.foreach(mascota => {
            const { imagen, nombre, raza } = mascota
            muestraMascota.innerHTML +=`
            <div class="col mascotas"
               <a href="#" class="enlace-detalle-mascota">
                  <div class="card bg-dark text-white gradient">
                        <img src="${imagen}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-tittle body2Bold">${nombre}</h5>
                            <p class="card-text body2Regular">${raza}</p>
                        </div>
                    </div>
                </a>                             
            </div>
            `
        })

        });
}

btnGato.addEventListener('click', ()=> getMascotas('http://localhost:4000/gatos'))

btnPerro.addEventListener('click', ()=> getMascotas('http://localhost:4001/perros')