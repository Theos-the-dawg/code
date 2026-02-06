console.log("Hello ");


let today =  function(){
    let date = new Date();
    console.log(date);
    return date;
}
document.getElementById("my-div").innerHTML=today();
//document.getElementById("")
