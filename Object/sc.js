function juragan (sopir, trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;
	

	this.penumpangnaik = function(namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function(namaPenumpang, payment) {
		if( this.penumpang.length === 0) {
			alert('Angkot kosong ke otak lu');
			return false;
		}

		for (var i = 0; i < this.penumpang.length; i++) {
			if( this.penumpang[i] == namaPenumpang ) {
			this.penumpang[i] = undefined;  
			this.kas += payment;
			return this.penumpang;
		}
			
		}
	}
}

var angkot1 = new juragan('Tanggang', ['Adiyasa', 'Balaraja'], [], 0);
var angkot2 = new juragan('Rudy Batagor', ['Kirana', 'Cangkudu'], [], 0);