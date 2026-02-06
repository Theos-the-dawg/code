//basic for loop for iterating from 0 to 4
//  NB:zero is a number so we count it 
// for(i=0;i<5; i++){
//     console.log(i);
// }


//initializing of arrays
    let names = ["Mohammed","Master","Gerald","Motheo"];
    let passwords = [1234, 5678, 91011, 1213];
//users arrays of objects
    let users = {user_1: "Mohammed", password_1: 1234,
                user_2: "Master", password_2: 5678,
                user_3: "Gerald", password_3: 91011,
                user_4: "Motheo", password_4: 1213};
//for loop to iterate through the users object
for (i=0;i<Object.keys(users).length;i++){
    console.log(users[Object.keys(users)[i]]);
// if statement to check if the value is Master
    if(users[Object.keys(users)[i]]=="Master"){
        console.log("Found Master");
}else{
    console.log("Not Master");
}}


// for(i=0;i<names.length;i++){
//   //  console.log(names[i]);
// }
//     for(j=0;j<passwords.length;j++){
//         console.log(names[i]);
//         console.log(passwords[j])
//     }


// //for loop through the names list
// for(let i=0;i<names.length;i++){
//     console.log(names[i]);

// //for loop through the passwords list
// for(j=0;j<passwords.length;j++)
// {console.log(passwords[j]);}

// // if statement to check if the name is Master is found
// if(names[i]=="Master" ){
//     console.log("Found Master");

//     }
//     else{
//         console.log("Not Master");
//     }
//  }