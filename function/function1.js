function jmlhvolumekubs (a,b) {
	var volumeA;
	var volumeB;
	var total;

	volumeA = a * a * a;
	volumeB = b * b * b;

	total = volumeA + volumeB;


	return total;
}

console.log(jmlhvolumekubs(8, 3));
alert(jmlhvolumekubs(8, 3));
