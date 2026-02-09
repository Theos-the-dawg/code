//console.log("hello");

let student = {
    name:"master",
    time:"2026-02-09 11:07:00"
};

student.time = new Date();
console.log(student.time)
console.log(typeof(student.time))




if(student.time>="2026-02-09 11:07:00"){

    conosle.log(student.name+ " "+"is on time ");
}else{
    console.log(student.name+ " " + "is not on time");
}

let today =function(){
    let date= new  Date();
    console.log(date.getHours());
    date.getHours() + date.getHours()+1;
    //date.getDay()
    return date;
    

};
console.log(today());
//document.getElementById("masso").innerHTML =today();
