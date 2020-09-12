

 //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

var sub = function(n1,n2){
  return n1 - n2
} 

var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+" and "+n2+" = " + callback(n1,n2);
};

console.log("tests:")
console.log( add(1,2) )    
console.log( add )      
console.log( add(1,2,3) ) ; 
console.log( add(1) );	  	
console.log( cb(3,3,add) ); 
//console.log(cb(3,3,add()));
console.log(cb(3,"hh",add));

var cb = function(n1,n2, callback){
    if(typeof n1 != "number"){
        throw "Not a number"
    }
    if(typeof callback != "function"){
        throw "Not a function"
    }
  return "Result from the two numbers: "+n1+" and "+n2+" = " + callback(n1,n2) ;
};

try {
    console.log(cb(3,3,add()))
}
catch (e) {
    console.log("You did not enter a number of a function.")
}

function mul(n1, n2){
   return n2 / n1;
}

console.log(cb(2, 10, mul))

let arr = ["Bo", "Noah", "Euclid", "Ian", "Peter", "Frederik"]

let arrLong = arr.filter(name => name.length > 3)

function print(item) {
    console.log(item)
}

console.log("Long:")
arr.forEach(print)
console.log("Short:")
arrLong.forEach(print)

function makeUL(array) {
    
    var list = "<ul>"
    for (var i = 0; i < array.length; i++) {
        list = list + '<li>' + array[i] + '</li>'
    }
    list = list + '</ul>'
    return list;
}
var li = makeUL(arr);
console.log(li)


var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function carFilterYear(item){
    if(item.year >= 1999){
        return true;
    }
}

function carFilterVolvo(item){
    if(item.make === 'Volvo'){
        return true;
    }
}

function carFilterPrice(item){
    if(item.price < 5000){
        return true;
    }
}

let carsRefined = cars.filter(carFilterYear)
console.log(carsRefined)

let carsRefinedTwo = cars.filter(carFilterVolvo)
console.log(carsRefinedTwo)

let carsRefinedThree = cars.filter(carFilterPrice)
console.log(carsRefinedThree)

let map;
let mapQuery = cars.map(item => {
    map = map + "INSERT INTO cars (id,year,make,model,price) VALUES (" + item.id + "," + item.year + "," + item.make  + "," +  item.model + "," + item.price + "); "
    return map;
})
console.log(map)


