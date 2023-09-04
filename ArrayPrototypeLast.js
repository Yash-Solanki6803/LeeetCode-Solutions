const nums = [null];

Array.prototype.last = function(){
    if(this.length === 0) return -1;
    return this[this.length-1]===null? -1 : this[this.length-1];
}

console.log(nums.last());