let pressed = false;
flag = false;
function rpressed(){
	pressed = true;
	while (pressed) {
		let fnumber = + enumber.value;
		if (fnumber > 100){
			alert('Ура! Вы ввели число больше 100!');
			pressed = false;
			break;
		}
		if (fnumber <= 100) {
			alert('Введите число!');
			pressed = false;
			break;
		}
		

	
	}
}
window.addEventListener(
	"keydown",
	(event) =>{
		if (event.key == "Escape") {
			alert('Что ж, вы нажали Esc. Тут я уже ничего не могу поделать. Вы выиграли!');
			pressed = false;
		}
	}, true);

