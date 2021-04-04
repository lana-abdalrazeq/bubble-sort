
// bubble sort algorithm: It is an algorithm that arranges the array either ascending or descending 


function bubbleSort(arr){                      //  declaration of fun

let sawp;                                     //  declaration of variable switch
do{   
swap=false;                                   // while the swap is true the loops will be execute
for(let i=0;i<arr.length;i++){               // loops to pass on the array elements
    if(arr[i]>arr[i+1]){                     // condition to compare betwween the current element and next element
let l=arr[i];                                // if the condition is true the switch process will execute
arr[i]=arr[i+1];
arr[i+1]=l;
swap=true;


    }
}



}
while(swap)
return arr;
}
let sorted= bubbleSort([7,10,16,30]);
console.log(sorted);