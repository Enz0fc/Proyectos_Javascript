
let api_key = '5af0f325ff3549ecbced26954ca22fdc'
let country = 'paraguay'

let respuesta = document.getElementById('datosClima')


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
        
    }
})



function fetchDatosClima(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(response => mostrarDatos(response))
}

function mostrarDatos(datos){
    //variable de tipo objeto
    clima = datos.main  
    icono = datos.weather.icon 

    temperatura = Math.round(clima.temp - 273)
    temperaturaMax = Math.round(clima.temp_max -273)
    temperaturaMin = Math.round(clima.temp_min -273)
    humedad = Math.round(clima.humidity)
    respuesta.innerHTML = `El clima se encuentra con una temperatura de ${temperatura} °C, maxima de ${temperaturaMax} °C y minima de ${temperaturaMin} °C con ${humedad}% de humedad `

}
