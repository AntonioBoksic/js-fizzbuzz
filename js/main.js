// seleziono il contenitore
const container = document.getElementById("container");


// creo un ciclo con all'interno if/else 
// per poter assegnare un contenuto a ogni elemento
for (let i=1; i<=100; i++) {

    // console.log(i)

    

    if (i % 3 == 0 && i % 5 == 0) {
        text = "fizzbuzz"
        // quadrato.classList.add("fizzbuzz");
    } else if (i % 5 == 0)  {
        text = "buzz"
    } else if (i % 3 == 0) {
        text = "fizz"
    } 
    else {
        text = i
    }

    console.log(text)

    const quadrato = `<span class=square"text</span>`;
    container.innerHTML += quadrato;

}
 
