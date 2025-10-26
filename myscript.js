function cargarContenido() {
  //cargar Elementos
  cargarHero();
  let gif = document.getElementById('espera');
  gif.src = '/Dia-13_proyecto/loading.gif';
  gif.style.visibility = 'visible';
  //cargar Cotizaciones
  cargarCotizaciones(mostrarCotizacion);
}

function cargarHero() {
  let title = document.getElementById('title');
  let logo1 = document.getElementById('logo1');
  let logo2 = document.getElementById('logo2');
  let logo3 = document.getElementById('logo3');


  title.innerText = "COTIZACIONES EXPRESS";
  logo1.src = '/Dia-13_proyecto/logo1.png';
  logo2.src = '/Dia-13_proyecto/logo2.png';
  logo3.src = '/Dia-13_proyecto/logo3.png';

}


async function cargarCotizaciones(callback) {
  try {

    // --- Bitcoin ---
    let promesa1 = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    callback(await promesa1.json());

    // --- USD → EUR ---
    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD');
    let datos2 = await promesa2.json();
    document.getElementById('UsdEur').append(`USD/EUR: ${datos2.rates.EUR}`);

    // --- USD → ARS ---
    let promesa3 = await fetch('https://open.er-api.com/v6/latest/ARS');
    let datos3 = await promesa3.json();
    document.getElementById('UsdArs').append(`USD/ARS: ${datos3.rates.USD}`);

  } catch (error) {
    alert('Error: ' + error);
  }
}

function mostrarCotizacion(datos) {
  document.getElementById('bitcoinUsd').append(`BTC/USD: ${datos.bitcoin.usd}`);
}




