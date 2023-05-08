function kuliJawa(nama, power, strgh) {
	this.nama = nama;
	this.power = power;
	this.strgh = strgh;
}
	kuliJawa.prototype.makan = function(mangan) {
		this.power += mangan;
		return `Hola ${this.nama}, Selamat mangan`; 
	};


	kuliJawa.prototype.turu = function(tuturu) {
		this.power += tuturu * 2;
		return `${this.nama} Turu deck deck`;
	};

	kuliJawa.prototype.ngopi = function(ngopay) {
		this.power -= ngopay;
		return `Ngopi atuh kang !`;
	};


	kuliJawa.prototype.ngym = function(gym) {
		this.strgh += gym;
		return `Mantap ${this.nama},kekuatanmu semakin bertambah kuat tanpa obat kuat`;
	};

		kuliJawa.prototype.nghentai = function(neko) {
		this.strgh -= neko;
		return `Waduh ${this.nama},aku juga MW`;
	};


let kuli1 = new kuliJawa('peetod', 10, 80);
