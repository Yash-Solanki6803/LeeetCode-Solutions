
const arr = [3,1,2,4,0,1,3,2];


function calculateWater(arr){
  let accumulated_water=0;
  let left_wall= [arr.length];
  let right_wall= [arr.length];
  left_wall[0] = arr[0];
  right_wall[arr.length-1] = arr[arr.length-1];

  for(let i=1;i<arr.length;i++){
    left_wall[i] = Math.max(left_wall[i-1],arr[i]);
  }

  for(let i=arr.length-2;i>=0;i--){
    right_wall[i] = Math.max(right_wall[i+1],arr[i]);
  }


  for(let i =1 ; i<arr.length-1;i++){
    const lower_boundary = Math.min(left_wall[i],right_wall[i]);
    accumulated_water += lower_boundary - arr[i];
  }

  return accumulated_water;
}

console.log(calculateWater(arr));