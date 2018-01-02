Array.prototype.arrayDoubler = function()
{
    let d;
    for(d = 0; d < this.length; d = d+2){
        this.splice(d+1,0, this[d]);
    }
    return this;
}