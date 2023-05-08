var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	//jika angkot kosong
	if(penumpang.length == 0 ) {
		penumpang.push(namaPenumpang);
		return penumpang;
	}else {

		for(var i = 0; i < penumpang.length; i++) {
			if( penumpang[i] == undefined )	{
				penumpang[i] = namaPenumpang;
				return penumpang;
			}
			
	
		
	}
	

}
	