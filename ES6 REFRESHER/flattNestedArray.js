function flat(arr){  ///arr->to pass array who need to be nested
 var result=[] //-> result variable to store new result
arr.forEach(item=>{  //->we are looping array 
if(Array.isArray(item)){ //->checking if looped result is array then we pushing to result and loop again 
result.push(...flat(item))
}else {
result.push(item) //->when array is not anymore arrray we push result into result.
}


})
return result //-> return results for display
}
