

// Each line we print stars for the number of lines 

let number = prompt('please enter row num');
for( let i=1;i<=number;i++){           // i num of lines or rows
let stars=" ";
for(let j=0;j<i; j++)                // j num of stars
{
    stars+="*";
}
console.log(stars);
}

/*another way 
let number = prompt('please enter row num');
let stars=" ";
for( let i=1;i<=number;i++){
  stars+="*";
console.log(stars);
}*/