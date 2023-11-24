const maxCoins = function (piles) {
  const sortedPiles = piles.sort((a, b) => a - b);
  let result = 0;
  let tries = Math.floor(sortedPiles.length / 3);
  while (tries > 0) {
    sortedPiles.pop();
    result += sortedPiles.pop();
    tries--;
  }
  return result;
};

const piles = [2, 4, 1, 2, 7, 8];
console.log(maxCoins(piles));
