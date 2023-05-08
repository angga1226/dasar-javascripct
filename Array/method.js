//1.join
var arr = ['djo','angga','nussy', 'samalo', 'anj'];
//console.log(arr.join());

//arr.push('mudia','epot');
//arr.pop ();
//arr.pop ();
//console.log(arr.join(' - '));

//push mendorong atau menambahkan elemen lebih dari 1 nilai di belakang array
//pop melutus ato menghilangkan elemen,namun harus secara satu persatu di belakang array

//3.unshift and shift
//arr.unshift('mudia');
//console.log(arr.join(' - '));

//arr.shift();
//console.log(arr.join(' - '));

//unshift menggeser kedalam di tambah kan di didepan nilai/diawal array
//shift mengeser keluar di awal array/menghapus

//4.splice (menyisipkan elemen array ke tengah tengah)
//splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
//arr.splice(2, 0,'mudia','epot');
//arr.splice(1,2, 'mudia', 'tya');
//console.log(arr.join(' - '));

//slice (mengiris/menghapus sebuah array menjadi array yang baru)
//slice(awal,akhir);
// var arr2 = arr.slice(1,4)
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

//.5 forEach
// menggunakan function expression
arr.forEach(function (e, i) {
	console.log("mahasiswa ke- " + (i+1) + " " + e);
})




