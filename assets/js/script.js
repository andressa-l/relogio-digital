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

// if (horas >= 6 && horas < 12) {
//   alert("Bom dia!!");
// } else if (horas >= 12 && horas < 18) {
//   alert("Boa tarde!!");
// } else if (horas >= 18 && horas < 24) {
//   alert("Boa Noite!!");
// } else {
//   alert("É madrugada. Vá dormir!!");
// }

// const time = currentDate.toLocaleString('pt-BR', { hour: 'numeric', hour12: true })
// var date_format = '12';