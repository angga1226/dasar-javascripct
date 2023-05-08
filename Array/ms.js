var number = [1,2,10,3,5,20,6,4,7];
// var number2 = number.map(function(e) {
// 	return e * 2;
// });
// console.log(number2.join(' - '))
// number.sort();
// console.log(number.join(' - '))
number.sort(function(a,b) {
	return a-b;
}); 
console.log(number.join(' - '))
