/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var reverse = 0;
  var copy = x;

  //The loop break when the copy of original number becomes zero
  //Also negative number cannot be a palindrome
  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy / 10);
  }

  return reverse == x;
};

x = 121;
console.log(isPalindrome(x));
x = -121;
console.log(isPalindrome(x));
