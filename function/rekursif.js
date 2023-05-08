function tampliAngka(n) {
	if(n === 0)return
	console.log(n);
	return tampliAngka(n-1)
}

tampliAngka(10);

//fungsi faktorial//

function faktorial (n)	{
	if(n === 0)return 1;
	return n * faktorial(n-1);
}
