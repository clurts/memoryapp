Array.prototype.doubleShuffle = function()
{
    let d;
    for(d = 0; d < this.length; d = d+2){
        this.splice(d+1,0, this[d]);
    }

    let i = (this.length), j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
}