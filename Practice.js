//answer variable to store the ultimate answer
let answer =0;

//fibo. terms
let firstTerm = 0;
let nextTerm = 1;

//The answer of addition of both terms
let sum =0;
//continue  while the num is smaller than 4 Million
while(sum<4000000){
  //Add to my answer variable only if it is even
  if(sum%2==0){
    answer += sum;
  }
  //This will run 1 extra time . Thus sum will exceed 4 Million but it wont be added !
  sum = firstTerm+nextTerm;
  firstTerm = nextTerm;
  nextTerm = sum;
}
console.log(answer);
