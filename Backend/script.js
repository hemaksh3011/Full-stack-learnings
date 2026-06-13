// let num = 5;

// for(let i=0; i<=num ; i++){
//     console.log("hello",i);
// }


// let arguments = process.argv;

// for (let i=2; i<arguments.length;i++){
//     console.log("hello",arguments[i]);
// }

//by default kuch 2 array index return krta hai node me to humne isiliye 2 se count shuru kiya hai or terminal par jo bhi likhenge "node script.js ab ba sn ns" to vo as an argument feed ho jaega or fhir wahi print hoga 

// let transferedValue = require("./math"); //ye file ka path hoga without any extension jaha se maal uthana hai.
// console.log(transferedValue);

// console.log(transferedValue.sum(5,3));
// console.log(transferedValue.sub(6,3));
// console.log(transferedValue.multi(2,3));
// console.log(transferedValue.div(6,3));

// let fal = require("./fruits"); //kisi or directory/folder ka data uthana via index.js in that folder/dir
// console.log(fal);

//---------------------------------------------------------------USING IMPORT KEYWORD

import {sum} from "./math.js";

console.log(sum(2,3));