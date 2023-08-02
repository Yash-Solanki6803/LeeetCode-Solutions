var map = function(arr, fn) {
  const answer = [];
  for(let i =0;i<arr.length;i++){
      answer[i] = fn(arr[i],i);
  }

  return answer;
};