/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Man skal huske at putte f1 med () efter, ellers vil den skrive forkert (den skriver addresse)
var f1 = function(){return 5}
console.log(f1())
        

var boys = ["Peter", "Lars", "Ole"];
var girls = ["Janne", "Hanne", "Sanne"];

var all = boys.concat(girls);

console.log(all)

// Laver String[] arrayen om til en enkelt string
console.log(all.join(', '))
console.log(all.join(' + '))
console.log(all.join('-'))

//Push tilføjer slutning, unshift tilføjer start
all.push("Lone", "Gitte")
all.unshift("Hans", "Kurt")
console.log(all)

//Shift fjerner fra start, pop fjerner fra slutning
all.shift();
all.pop();
console.log(all)

//Splice (-index sted-, -hvor meget der skal fjernes, så 0 for bare at indsætte, 1 for at replace-, hvad der skal indsættes, ingenting for tom. F.eks. .splice(3, 1, "Tom")
all.splice(3, 1)
all.splice(3, 1)
console.log(all)
console.log(all.reverse())

console.log("----")
console.log(all.sort())
console.log(all.map(x => x.toUpperCase()))


console.log("----")
console.log("----")

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']


function filterItems(arr, query) {
  return arr.filter(function(element) {
      return element.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

function filterTwo(arr) {
  return arr.filter(function(element) {
      return element.toLowerCase().charAt(0) === 'a' ||	 element.toLowerCase().charAt(0) === 'b'
  })
}

var newlist = fruits.filter(function(element) {
      return element.toLowerCase().charAt(0) === 'a' ||	 element.toLowerCase().charAt(0) === 'b'
  })
  console.log(newlist)

console.log(filterItems(fruits, 'ap')) 
console.log("----")
console.log(filterTwo(fruits))

console.log("----")
function filterNames(arr) {
  return arr.filter(function(element) {
      return element.charAt(0) === 'L' || element.charAt(0) === 'I'
  })
}
console.log(filterNames(all))