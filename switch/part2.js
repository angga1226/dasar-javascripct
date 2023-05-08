var	item = prompt('masukan nama minuman : \n (coca-cola,sprit,pepsi,fanta,bison,aqua)');

switch( item ) {
	case 'coca-cola' :
	case 'sprit' :
	case 'pepsi' :
	case 'fanta' :
		alert('minuman anda mengandung soda');
		break;
	case 'bison' :
	case 'aqua' :
		alert('minuman anda tidak mengandung soda');
		break;	
	default :
		alert('anda memasukan nama minuman yang salah')
		break;	
}
