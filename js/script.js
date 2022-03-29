
let numeri = 100;
const serie = document.getElementById("serie");
const row = document.createElement("div");
row.setAttribute("class", "row g-3")    
    for (let i = 1; i <= 100; i++){
    const col = document.createElement("div")
    col.setAttribute("class", "col-12 col-sm-6 col-md-4 col-lg-2");
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    
    if( i % 3 === 0 && i % 5 === 0) {
        square.innerHTML = i + " fizzbuzz";
        square.classList.add("red")
    } else {
        if( i % 3 === 0 ) {
            square.innerHTML =  i + " Fizz";
            square.classList.add("blue")
        }
        if( i % 5 === 0 ) {
            square.innerHTML =  i + " Buzz";
            square.classList.add("green")
        }
        else{
            square.innerHTML =  i;
        }
    }
    col.append(square)
    row.append(col)
}
serie.append(row)


















