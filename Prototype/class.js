class siswaYpd {
	constructor(nama, status, langeng, money) {
	this.nama = nama;
	this.status = status;
	this.langeng = langeng;
	this.money = money;
  }

  	kenthu(tapman) {
		this.langeng += tapman * 2;
		return `$Cie ${this.nama},gmna rasanya `;
	};

	kerja(gw) {
		this.langeng -= gw;
		this.money += gw * 20000
		return `Santai dulu ngk sih ${this.nama}`;
};

}
	let mudia = new siswaYpd ('Siti mudia', 'punya pacar bernama angga', 40, 0);


