// var studycase = ['angga', 'djo', 'esa', 'tanggang'] 
// 	// for (var i = 0; i < studycase.length; i++) {
// 	// 	console.log('siswa ' + (i+1) + ' ' + studycase[i])
// 	// }

// studycase.push('epot', 'mudia');
// // studycase.pop()
// studycase.splice(1, 0, 'han', 'septia')
// // studycase.shift()
// studycase.unshift('lela')//menambah elemen di awal array
// 	console.log(studycase.join(' - '))
// // var studycase2 = studycase.slice(2, 6)
// // 	// console.log(studycase.join(' - '))
// // 	console.log(studycase2.join(' - '))

// studycase.forEach(function (e, i) {
// 	console.log('siswa sekolah mafia ' + (i+1) + " " + e);
// })

var penumpang = ['Herlangga', undefined, 'djo'];
var tambahPenumpang = function(namaPenumpang, penumpang) {

	if (penumpang.length == 0) {
		penumpang.push(namaPenumpang);
		return penumpang;
	} else {
		for (var i = 0; i < penumpang.length; i++) {

			if (penumpang[i] == undefined) {
				penumpang[i] = namaPenumpang;
				return penumpang;

			} else if( i == penumpang.length - 1 ) { 
				penumpang.push(namaPenumpang);
				return Penumpang; 
			}	
		}
	}
}
