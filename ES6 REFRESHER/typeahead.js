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

function inPut(){
var match=matchOutput(this.value, books);
var newbook=match.map(item=>{
const regExpBold= new RegExp(this.value,'gi');
var author= item.author.replace(regExpBold,`<b>${this.value}</b>`);
var title= item.title.replace(regExpBold, `<b>${this.value}</b>`);
	return `<li>
<span>${author} ${title}<span>`

});

if(searchbar.value != ""){

suggestions.style.display="block"


suggestions.innerHTML= newbook
}
else{


suggestions.innerHTML= "";

}




var searchbar =document.querySelector('#searchbar');
var suggestions =document.querySelector('.list-items');
searchbar.addEventListener('keyup',inPut)
