// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) { 
//   const arr= [...nums];
//   nums.sort((a,b)=>a-b);
//   let size = nums.length;
//   let start = 0 ,end=size-1;
//   while(start<end){
//       let sum = nums[start]+nums[end]
//       if(sum===target) break;
//       else if(sum>target) end --;
//       else start++;
//   }
//   const ans=[];
//   for(i=0;i<size;i++){
//       if(nums[start]===arr[i]  ){            
//           ans.push(i);
//       }
//       else if(nums[end]===arr[i] ){            
//           ans.push(i);
//       }        
//   }   
//   return ans;    
// }

function twoSum(arr,target){
    const ComplimentMap = new Map();

    for(let i=0;i<arr.length;i++){
        //compliment is the number which needs to be added to  arr[i] to get target. 
        const compliment = target - arr[i]

        //now we check if the current arr[i] is a registered compliment of previous arr[i]s
        if(ComplimentMap.has(arr[i])){
            console.log(arr[i],ComplimentMap.get(arr[i]))
            return true;
        } 

        //if the compliment isn't registered then we go and register it
        ComplimentMap.set(compliment,arr[i]);
    }

    return false
}

const arr = [1,2,3,4,9,22];

console.log(twoSum(arr,10));
console.log(twoSum(arr,8));