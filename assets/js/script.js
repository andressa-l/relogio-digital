let section = document.querySelector("section"),
  icons = document.querySelector(".icons");

icons.onclick = () => {
  section.classList.toggle("dark");
};

// criando uma função e chamando-a a cada segundo
setInterval(() => {
  let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  let d;
  d = hour < 12 ? "AM" : "PM"; //se a hora for menor que 12, seu valor será AM, caso contrário, seu valor será pm
  hour = hour > 12 ? hour - 12 : hour; //se o valor da hora for maior que 12 do que 12 será subtraído ( fazendo isso obteremos valor até 12 não 13,14 ou 24 )
  hour = hour == 0 ? (hour = 12) : hour; // se o valor da hora for 0 do que o valor será 12

  // adicionando 0 à frente de todo o valor se eles forem menores que 10
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector(".hour_num").innerText = hour;
  document.querySelector(".min_num").innerText = min;
  document.querySelector(".sec_num").innerText = sec;
  document.querySelector(".am_pm").innerText = d;
}, 1000); // 1000 milissegundos = 1s
