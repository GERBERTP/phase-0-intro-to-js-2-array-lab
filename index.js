const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   let newArray = cats.slice();
    newArray.push(name);
    console.log(newArray);
    return newArray
}

function prependCat(name) {
    let newArray = cats.slice();
    newArray.unshift(name);
    return newArray
}

function removeLastCat(){
    let newArray = cats.slice();
    newArray.pop();
    console.log(newArray);
    return newArray
}

function removeFirstCat() {
    let newArray = cats.slice();
    newArray.shift();
    
    return newArray

}