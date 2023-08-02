function memoize(fn) {
  const mem={};
  return function(...args) {
      if (mem[args]!==undefined) return mem[args];
      mem[args]=fn(...args);
      return mem[args];
  }
}