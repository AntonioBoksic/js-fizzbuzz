
// const container = document.getElementById("container");

// console.log(container)



for (let i=1; i<=100; i++) {

    console.log(i)
    
    let quadrato
    
   
    
    

    if (i % 3 == 0 && i % 5 == 0) {
        quadrato = `<span class="square">"fizzbuzz"</span>`
        // quadrato.classList.add("fizzbuzz");
    } else if (i % 5 == 0)  {
        quadrato = `<span class="square">buzz</span>`
    } else if (i % 3 == 0) {
        quadrato = `<span class="square">fizz</span>`
    } 
    else {
        quadrato = `<span class="square">${i}</span>`
    }


    

    container.innerHTML += quadrato;

 }
 
