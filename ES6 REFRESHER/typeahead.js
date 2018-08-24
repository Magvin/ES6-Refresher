const books = []

fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json') //external json file with 100 best books ever written
		.then(res=>res.json()) // converting to json
		.then(json=>books.push(...json)) //pushing output to books variable and using spread operator to be in not nested array.

function matchOutput(bookToMatch,books){
	
	
	return books.filter(book=>{

	const regexp= new RegExp(bookToMatch,'gi');

return book.title.match(regexp)

 || book.author.match(regexp)

 })

}
function empty(){
if(searchbar.value != ""){

suggestions.style.display="block"

}else{

suggestions.style.display='none'

}



}
function inPut(){
var match=matchOutput(this.value, books);
var newbook=match.map(item=>
	`<li>
<span>${item.author} ${item.title}<span>`

);

empty();
suggestions.innerHTML= newbook


}



var searchbar =document.querySelector('#searchbar');
var suggestions =document.querySelector('.list-items');
searchbar.addEventListener('keyup',inPut)
