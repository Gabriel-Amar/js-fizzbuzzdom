let numeri = 100;

for (let i = 1; i <= numeri; i++){
    if( i % 3 === 0 && i % 5 === 0) {
        const mioDiv = document.createElement("div");
        mioDiv.innerHTML = i + " fizzbuzz";
        serie.append(mioDiv)
    } else {
        if( i % 3 === 0 ) {
            const mioDiv = document.createElement("div");
            mioDiv.innerHTML =  i + " Fizz";
            serie.append(mioDiv)
        }
        if( i % 5 === 0 ) {
            const mioDiv = document.createElement("div");
            mioDiv.innerHTML =  i + " Buzz";
            serie.append(mioDiv)
        }
        else{
            const mioDiv = document.createElement("div");
            mioDiv.innerHTML =  i;
            serie.append(mioDiv)
        }
    }
}
