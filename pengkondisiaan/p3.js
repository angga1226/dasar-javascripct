var	jmlhTaksi = 10;
var onTaksi = 6;

for (var noTaksi = 1; noTaksi <= jmlhTaksi; noTaksi++) {


if( noTaksi <= 6 && noTaksi !== 5 ) {console.log('Taksi_ID no.' + noTaksi + ' Beroperasi dengan baik.');
} else if(noTaksi === 8 || noTaksi === 10 || noTaksi === 5 ) {console.log('Taksi_ID no.' + noTaksi + ' sedang di laut')}
 else {
	console.log('Taksi_ID no.' + noTaksi + ' Tidak beroperasi dengan baik.');
	}
}

