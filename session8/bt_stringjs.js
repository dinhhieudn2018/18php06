var name = "Vo Long Phat";

document.getElementById('name').innerHTML = name;

var position = name.indexOf('n');
document.getElementById('position').innerHTML = "Vị trí của kí tự n là: " + position;

document.getElementById('length').innerHTML = "Tên dài: " + name.length;

var content = name.replace("Phat","18PHP06");
document.getElementById('replace').innerHTML = "Tên của bạn sau khi đổi: "+ content;


var numberNinMyName = 0;
while (name.indexOf('n') != -1){
	var tmpName = name;
	numberNinMyName++;
	name=tmpName.slice(tmpName.indexOf('n') + 1, tmpName.length)
}
document.getElementById('NinMyName').innerHTML = "Số chữ n trong tên của bạn: " + numberNinMyName;


