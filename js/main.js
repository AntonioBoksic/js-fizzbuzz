
// const container = document.getElementById("container");

// console.log(container)
let text;


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

    // container.innerHTML += quadrato;

 }
 
