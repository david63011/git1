const arr = [5,1,15,25,30,200,1000]

function findMax(arr) {
   let max=0
   for(let i=0; i<arr.length; i++) {
     if(arr[i] >max) {
        max=arr[i]
     }
   }
      return max
}

console.log(findMax(arr))