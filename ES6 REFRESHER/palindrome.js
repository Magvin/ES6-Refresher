function checker(value){

var palindrome=value.split('').reverse().join('').toLowerCase()  //spliting value into letters, then reverse them,
//then get them back together to normal word for case sensitive everything goes to lower case

if(value.toLowerCase() === palindrome){ // if value word is equal to new reversed word return new word 
return palindrome

}else if(value.toLowerCase()  !=palindrome){ // if value word is not equal to new reversed word Console.log('not a palindrome')

return 'Not a palindrome'
}
}
