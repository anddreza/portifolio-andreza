/*var hamburguer = document.querySelector(".hamburguer"); /*var, para selecionar o menu hamburguer*/

document.querySelector(".hamburguer").addEventListener("click", () => /*adiconar um eventlistener para ouvir um evento de click*/
    document.querySelector(".container").classList.toggle("show-menu") /* animação de dois elementos separados por isso o uso do container, ele envolve todo mundo*/
);