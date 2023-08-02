var compose = function(functions) {
 
	return function(x) {
    let ans=x;
        for(let i = functions.length-1; i>=0;i--){
          ans = functions[i](ans);
          
        }
        return ans;
    }
};


  // const fn = compose([x => x + 1, x => 2 * x])
  

  // console.log(fn(4));
 