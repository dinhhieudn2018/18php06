var a = 10;
var b = 6;

//Phep toan
document.write('<b>a=10 b=6</b>')
document.write('</br>');
document.write('Ket qua a + b la: ');
document.write(a + b);
document.write('</br>');


document.write('Ket qua a - b la: ');
document.write(a - b);
document.write('</br>');

document.write('Ket qua a * b la: ');
document.write(a * b);
document.write('</br>');

document.write('Ket qua a / b la: ');
document.write(a / b);
document.write('</br>');

document.write('Ket qua a % b la: ');
document.write(a % b);
document.write('</br>');
//So sanh
var x=5;
var y=6;
document.write("<b>x=5 y=6</b>")
document.write('</br>');
document.write("Ket qua so sanh x > y: ")
document.write(x > y);
document.write('</br>');

document.write("Ket qua so sanh x < y: ")
document.write(x < y);
document.write('</br>');

document.write("Ket qua so sanh x >= y: ")
document.write(x >= y);
document.write('</br>');

document.write("Ket qua so sanh x <= y: ")
document.write(x <= y);
document.write('</br>');

document.write("Ket qua so sanh x == y: ")
document.write(x == y);
document.write('</br>');

//Vong lap for
document.write('Vong lap for');
document.write('</br>');
for (var i=0; i<=5;i++){
	document.write(i);
	document.write('</br>');
}
//Vong lap do while
document.write('</br>');
document.write('Vong lap do while');
document.write('</br>');
var i=1;
do{
	document.write(i);
	document.write('</br>');
	i++;
}
while(i <= 5);
//Vong lap while
document.write('</br>');
document.write('Vong lap while');
document.write('</br>');
var i=1;
while(i <= 5){
	document.write(i);
	document.write('</br>');
	i++;
}
//Lenh Dieu kien
document.write('</br>');
document.write('Cau lenh if');
document.write('</br>');

if (a != b) {
	
	document.write('a khac b');
}
document.write('</br>');
document.write('Cau lenh if else');
document.write('</br>');
var c=5;
var d=5;
if (c != d) {
	document.write('c khac d');
}
else{
	
	document.write('c bang d');
}
document.write('</br>');
document.write('Cau lenh switch case');
document.write('</br>');
var so = 5;

switch (so) {
    case 0:
        document.write('khong');
        break;
    case 1:
        document.write('mot');
        break;
    case 2:
        document.write('hai');
        break;
    case 3:
        document.write('ba');
        break;
    case 4:
        document.write('bon');
        break;
    case 5:
        document.write('nam');
        break;
    default:
        document.write('khong thoa man');
        break;
}