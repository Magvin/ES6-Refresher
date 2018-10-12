function gradingStudents(grades) {
var newScore=[]
for(var key in grades){


function round5(x){
    if(x >35){
return Math.ceil(x/5)*5
    }else {

        return grades[key]
    }
}
function newGrades(){
var result
    if(round5(grades[key])-grades[key] <=2){
         result = round5(grades[key])
    }else{

    result=grades[key]
    }
  return result


}
 newScore.push(newGrades())
}
console.log(newScore)
}

gradingStudents([73,67,38,33])

//=============OUTPUT=============
[75, 67, 40, 33]
