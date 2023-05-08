var jmlhTaksi = 10;
var onTaksi = 5;
var noTaksi = 1;

while(noTaksi <= onTaksi) { console.log('Taksi_ID no ' + noTaksi + 'Beroperasi dengan baik.' ); noTaksi++}

for (noTaksi = onTaksi + 1; noTaksi <= jmlhTaksi; noTaksi++) {
	console.log('Taksi_ID no ' + noTaksi + 'sedang tidak beroperasi.');
}