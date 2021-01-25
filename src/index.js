module.exports =   function reverse (n) {
    let z=Math.abs(n);
    var b, sum = 0;
    while(z != 0)
    {
      b = z % 10;
      sum = sum * 10 + b;
      z = Math.floor(z / 10);
    }
    return sum;
}