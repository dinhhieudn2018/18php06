var n = parseInt(prompt('Nhap so n: '));
if(n % 2 == 0){
	document.write(n +' la so chan');
	document.write('</br>');
}
else{
	document.write(n + ' la so le');
	document.write('</br>');
if (n % 3 == 0) {
	document.write(n + ' la so chia het cho 3');
}
else{
	document.write(n + ' la so khong chia het cho 3');
	}
}