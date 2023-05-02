// seleziono il contenitore
const container = document.getElementById("container");

let quadrato = ``

// creo un ciclo con all'interno if/else 
// per poter assegnare un contenuto a ogni elemento
for (let i=1; i<=100; i++) {

    // console.log(i)

    if (i % 3 == 0 && i % 5 == 0) {
        text = "fizzbuzz"
    } else if (i % 5 == 0)  {
        text = "buzz"
    } else if (i % 3 == 0) {
        text = "fizz"
    } 
    else {
        text = i
    }

    console.log(text)

    quadrato += `<div class="square ${text}"> ${text}</div>`

    

}

container.innerHTML = quadrato
 
