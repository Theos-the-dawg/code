//basic for loop for iterating from 0 to 4
//  NB:zero is a number so we count it 
// for(i=0;i<5; i++){
//     console.log(i);
// }
//initializing of array
    let names = ["Mohammed","Master","Gerald","Motheo"];
//for loop through the names list

for(let i=0;i<names.length;i++){
    console.log(names[i]);

// if statement to check if the name is Master is found
    if(names[i]=="master"){
    console.log("Found Master");

    }
    else{
        console.log("Not Master");
    }
 }