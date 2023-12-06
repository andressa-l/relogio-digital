
# Olá, eu sou a Andressa! 👋
## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack...

# Relógio Digital

A proposta para o desenvolvimento deste projeto foi a construção de um relógio digital. Utilizando dos recursos aprendidos durante as aulas do curso de programação FullStack.

## Funcionalidades

- Exibição de hora, minutos e segundos: O relógio digital pode exibir a hora atual do sistema em tempo real, com precisão de segundos.
- Personalização de estilo: O relógio digital foi personalizado com fontes, cores, tamanhos e formatos de exibição.

## Aprendizados

Pude comprender como utilizar alguns recursos essenciais, a exemplo de: 

```css
    background: linear-gradient(90deg, rgb(76, 70, 206) 0%, rgb(202, 95, 183) 35%, rgb(114, 212, 231) 100%);
```
> Essa funcionalidade permitiu criar um efeito degradê em forma linear e é aplicada como uma imagem de fundo.

```css
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
```
> Com o Box-shadow foi possivel adicionar efeitos de sombra em volta de um elemento HTML. Foi possível especificar em mais de um efeito, separando-os com vírgulas. A propriedade pode ser configurada para ser aplicada nos quatro lados do elemento ou apenas na posição desejada.

```javascript
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
```

> Este código JavaScript define três constantes horas, minutos e segundos que são atribuídas aos elementos HTML com os IDs horas, minutos e segundos, respectivamente. Em seguida, o código define uma função anônima que é executada a cada intervalo de tempo definido pelo método setInterval. A função obtém a hora atual do sistema usando o objeto Date() e, em seguida, extrai as horas, minutos e segundos da hora atual. Por fim, a função atualiza o conteúdo dos elementos HTML horas, minutos e segundos com as horas, minutos e segundos extraídos, respectivamente.

## 🛠 Habilidades
- Javascript
- HTML 
- CSS

## Autores

- [@andressa-l](https://www.github.com/andressa-l)


<div align="center">Feito com 💜 por <a href="https://github.com/andressa-l">Andressa</a>.</div>
<br />