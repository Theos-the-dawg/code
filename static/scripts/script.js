//console.log("hello");

//nested dict contains student values
let students = {
   student_01:{ name:"master",
                time: new Date("2026-02-08 12:57:00")},

   student_02:{ name:"Gerald",
                time:"2026-02-08 12:57:00"}
};


//
console.log(typeof(students.student_01.time));
console.log(students.student_01.time);
console.log(typeof(students.student_02.time));
console.log(students.student_02.time = new Date());
console.log(typeof(students.student_02.time));


// console.log(typeof(student.time))

// let day = new Date();




// if(student.time.getHours()==12){

//    console.log(student.name+ " "+"is on time ");
// }else{
//     console.log(student.name+ " " + "is not on time");
// }

// let today =function(){
//     let date= new  Date();
//     console.log(date.getHours());
//     date.getHours() + date.getHours()+1;
//     //date.getDay()
//     return date;
    

// };
// console.log(today());
// //document.getElementById("masso").innerHTML =today();
