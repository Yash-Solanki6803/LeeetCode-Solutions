/* val = fn(init,nums[0]),
    val = fn(val,nums[1]),
    ...*/

var reduce1 = function(nums, fn, init) {
    let value=init;
    if(nums.length==0){
        return value;
    }   
    for(num of nums){
        value = fn(value,num);
    }
    
    return value;
    };

nums = [1,2,3,4];

fn = function sum(accum, curr) { 
    return accum + curr; 
}

init = 0;

console.log(reduce1(nums,fn,init));
