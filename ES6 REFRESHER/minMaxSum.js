function find(arr){
var clone1 = arr.slice()
var clone2 = arr.slice()

var sortMin= clone1.sort((a,b)=>a-b)
sortMin.pop()
console.log(sortMin)
var sortMax= clone2.sort((a,b)=>b-a)
sortMax.pop()
console.log(sortMax)
var resultMin=0
var resultMax=0
sortMin.map(item=>{

resultMin+=item

})

sortMax.map(item=>{

resultMax+=item

})
console.log(`${resultMin} ${resultMax}`)
}
