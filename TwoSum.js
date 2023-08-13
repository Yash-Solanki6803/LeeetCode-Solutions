/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
  const arr= [...nums];
  nums.sort((a,b)=>a-b);
  let size = nums.length;
  let start = 0 ,end=size-1;
  while(start<end){
      let sum = nums[start]+nums[end]
      if(sum===target) break;
      else if(sum>target) end --;
      else start++;
  }
  const ans=[];
  for(i=0;i<size;i++){
      if(nums[start]===arr[i]  ){            
          ans.push(i);
      }
      else if(nums[end]===arr[i] ){            
          ans.push(i);
      }        
  }   
  return ans;    
}