
# Olá, eu sou a Andressa! 👋
## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack...

# Relógio Digital

A proposta para o desenvolvimento deste projeto foi a construção de um relógio digital. Utilizando dos recursos aprendidos durante as aulas do curso de programação FullStack.

## Funcionalidades

- Exibição de hora, minutos e segundos: O relógio digital pode exibir a hora atual do sistema em tempo real, com precisão de segundos.
- Personalização de estilo: O relógio digital foi personalizado com fontes, cores, tamanhos e formatos de exibição.
- Habilitar e desabilitar a função dark.

## Aprendizados

```css
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
```
> Com o Box-shadow foi possivel adicionar efeitos de sombra em volta de um elemento HTML. Foi possível especificar em mais de um efeito, separando-os com vírgulas. A propriedade pode ser configurada para ser aplicada nos quatro lados do elemento ou apenas na posição desejada.

```javascript
    setInterval(() => {
  let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  let d;
  d = hour < 12 ? "AM" : "PM"; 
  hour = hour > 12 ? hour - 12 : hour; 
  hour = hour == 0 ? (hour = 12) : hour; 
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector(".hour_num").innerText = hour;
  document.querySelector(".min_num").innerText = min;
  document.querySelector(".sec_num").innerText = sec;
  document.querySelector(".am_pm").innerText = d;
}, 1000);
```

> Esse código cria um relógio digital usando JavaScript. Ele usa a função setInterval para executar um bloco de código a cada 1000 milissegundos (ou 1 segundo). Cria um objeto date que representa a data e hora atual. Extrai as horas, minutos e segundos do objeto date usando os métodos getHours, getMinutes e getSeconds. Cria uma variável d que armazena se é “AM” ou “PM” dependendo do valor das horas. Converte as horas para o formato de 12 horas, subtraindo 12 se for maior que 12 ou atribuindo 12 se for igual a zero. Adiciona um zero à esquerda das horas, minutos e segundos se forem menores que 10, usando o operador ternário ? :. Seleciona os elementos HTML que mostram as horas, minutos, segundos e AM/PM usando o método querySelector e o seletor de classe. Atribui os valores das horas, minutos, segundos e AM/PM aos elementos HTML usando a propriedade innerText.

<em>*Aqui consta as principais tecnologias usadas, podem ser abordadas outras no desenvolvimento do projeto, basta conferir o código completo. </em>


## 🛠 Habilidades
- Javascript
- HTML 
- CSS

## Autores

- [@andressa-l](https://www.github.com/andressa-l)


<div align="center">Feito com 💜 por <a href="https://github.com/andressa-l">Andressa</a>.</div>
<br />