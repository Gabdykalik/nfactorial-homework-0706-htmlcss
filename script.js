let name = "Dalida's Shop"
const owner = "Dalida"
let numberOfProducts = 5
let isPopular = true
let haters = null
let fans = undefined //Такое большое число не придумали

let product = {
    name: 'coffee',
    price: 1250 
}

product.discount = "10%"
delete product.discount
product["items"] = 10000
product.sell = function() {
    console.log("Your Item is Sold")
}

let fruits = [
    "apple",
    "pear",
    "peach",
    "pineapple",
    "kiwi",
    " ",
    ""
]

let multiply = fruits.map((item) => item + "s")

let filtered = fruits.filter(function(item){
    return item != "" && item != " "
})

function counter(...[a, b, c]){
    console.log(a + b + c)
}

let extra = [
    "watermelon",
    "cherry",
    "mango"
]

let all = [...fruits, ...extra]

let apple = fruits.slice(0, 1)

if (fruits[1] == "apple"){
    console.log("It's an apple")
} else{
    console.log("It's not an apple")
}

if (1 === "1"){
    console.log(true)
} else(
    console.log(false)
)

let empty = fruits[7] ?? console.log("It is empty")

switch(apple){
    case 'apple':
    case 'pear':
    case 'pineapple':
        console.log('This is a fruit.')
        break
    case 'tomato':
        console.log('This is a vegetable.')
}

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

let num = 0
while(num < fruits.length){
    console.log(fruits[num])
    num++
}

do {
    num++
} while(num < fruits.length){
    console.log(fruits[num])
    num++
}

export { counter }
export default filtered
export {product as coffee}
