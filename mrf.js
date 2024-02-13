//1. code to get all countries from asia resion
var request= new XMLHttpRequest()
request.open("get","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
var result=JSON.parse(request.response)
console.log(result)
var continents=result.filter((ele)=>ele.continents == 'Asia')
for(i=0; i<continents.length; i++){
console.log(continents[i].name.common)
}

//2.countries population less than 200000
var pop=result.filter((ele)=>ele.population < 200000)
for(var key in pop){
    console.log(pop[key].name.common) 
}

//4.sum of all countries
var total=result.map((ele)=>ele.population)
var sum=total.reduce((acc,ele)=>acc+ele,0)
console.log("total population of all countries",sum)



//3.
var name=result.map((ele)=>ele.name.official)
for(i=0; i<name.length; i++){
    
console.log(name[i])
}
var capital=result.map((ele)=>ele.capital)
for(i=0; i<capital.length; i++){
 console.log(capital[i])


    
}
var flags=result.map((ele)=>ele.flags.svg)
for(i=0; i<flags.length; i++){
console.log(flags[i])

}


//5.
var currencies=result.filter((ele)=>ele.currencies);
for(var key in currencies){
    var cur1= (currencies[key].currencies)
    var cur2=cur1
    for(var a in cur1){
        console.log(cur2[a])
        
        
    }
   // console.log(cur2)
    
}
}
