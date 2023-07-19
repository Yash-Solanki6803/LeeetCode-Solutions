const nums = [null];

Array.prototype.last = function(){
    let last_idx = this.length-1;

    console.log(`idx : ${last_idx} arr : ${this[last_idx]}`);


    if(last_idx!=-1){
        return this[last_idx]
    }else{
        return -1;
    }

}

console.log(nums.last());