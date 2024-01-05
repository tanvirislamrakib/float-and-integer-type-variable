// float type and integer type data different

var num3 = "55.24546";
var num4 = 60;
num3 = parseFloat(num3);
var mot1 = num3 + num4;
console.log(mot1)

var num3 = "55.24546";
var num4 = 60;
num3 = parseInt(num3);
var mot1 = num3 + num4;
console.log(mot1)

// number type data to string type data convert

var no1 = 40;
var no2 = 50;
console.log(typeof no2)

//****
var no1 = 40;
var no2 = 50;
no2 = "" + no2;
console.log(typeof no2)

var no1 = 40;
var no2 = 50;
no2 = "" + no2;
var total = no1 + no2;
console.log(total)

// without string
var no1 = 40;
var no2 = 50;
var total = no1 + no2;
console.log(total)