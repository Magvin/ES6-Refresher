var color=['red','green','yellow'];
var i=0;
var slider=document.getElementById('slider')
function nextColor(){

if(i< color.length-1){

i++

}else{

i=0;
}
showColow()



}
function showColow(){
slider.style.background=color[i];


}
function prevColor(){

i--

if(i <0){

i=color.length-1;
}

showColow()
}
