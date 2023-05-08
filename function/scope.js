//global scope / window scope = karen adia ada didalam object window;object paling luar di dalam browser kita/
//function bisa mengakses variabel global,kalo diluar ngk bisa mengakses variabel local(bayangkan mobil dengan kaca film) jdi yg di luar ngk bisa liat dalam,tpi kita bisa lihat ke luar//
//name conflict mempuny 2 variabel yg sama tpi scopeny berbeda//
//klo ngk pke var maka consolny akan mengecek deklarasi variabel global js;11//

var a = 1;
//jika ada var 3 jdiny 3 menipa 1//

function tes() {
	var b = 2;
	console.log(a);
}

tes();
console.log()