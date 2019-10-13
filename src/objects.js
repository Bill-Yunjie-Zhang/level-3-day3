let me = {
    name: "Bill",
    age: 17,
}

const getKeys = Object.keys(me) //used very often
// console.log(getKeys)

// let nameKey = getKeys[0]

// console.log(me.age)       // dot notation
// console.log(getKeys[1])   // bracket notation
// console.log(me[nameKey])   // bracket notation

Object.keys(me).forEach(element => {
    console.log(me[element])
})

for (ii = 0; ii < getKeys.length; ii++){
    let currentKey = getKeys[ii]
    console.log(me[currentKey])
}

delete me.age

console.log(me)

me.age = 17

console.log(me)