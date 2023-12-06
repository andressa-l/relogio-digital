

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let datahoje = new Date();
  let hora = datahoje.getHours();
  let minuto = datahoje.getMinutes();
  let segundo = datahoje.getSeconds();

  horas.textContent = hora;
  minutos.textContent = minuto;
  segundos.textContent = segundo;
});

