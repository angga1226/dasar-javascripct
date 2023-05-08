//Membuat object
//1.Membuat object literal
// var SiswaYpd = {
// 	Name	: 'Herlangga Djhan Nussy',
// 	Age		: [17, 'th'],
// 	Average	: [7.5, 8.5, 8.9, 9,5],
// 	hasil	: true,
// 	Addres	: {
// 		jalan	:'jl.Bougenville',
// 		kota	:'Tangerang',
// 		Provinsi:'Banten'
// 	}
// };

// var SiswaYpd1 = {
// 	Name	: 'Lela',
// 	Age		: [18, 'th'],
// 	Average	: [7.9, 8.5, 8.5, 9,0],
// 	hasil	: false,
// 	Addres	: {
// 		jalan	:'jl.Cisoka',
// 		kota	:'Tangerang',
// 		Provinsi:'Banten'
// 	}
// };

// //2.Function Declaration
// function MembuatObject(Name, Age, Average, hasil, Addres) {
// 	var Ypd = {};
// 	Ypd.Name = Name;
// 	Ypd.Age = Age;
// 	Ypd.Average = Average;
// 	Ypd.hasil = hasil;
// 	Ypd.Addres = Addres;
// 	return Ypd;
// }

// var Ypd1 = MembuatObject ('Herlangga Djo', 17, [7.9, 8.5, 8.5, 9,0], true, 'Tangerang');

//3.constructor
function Siswa(Name, Age, Average, hasil, Adderes) {
	this.Name = Name;
	this.Age = Age;
	this.Average = Average;
	this.hasil = hasil;
	this.Adderes = Adderes;
}

var sw1 = new Siswa ('Septia Dwi Anisabila', 18, [7.9, 8.5, 8.5, 9,0], true, 'Tangerang');