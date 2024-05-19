let gender = "Not stated";
let pressed = false;

function rpressed(){
	pressed = true;
	while (pressed) {
		let fage = + age.value;
		if (cm.checked){
			gender = "Male";
		}
		if (cf.checked){
			gender = "Female";
		}
		if (gender === "Not stated"){
			alert("Укажите пол");
			pressed = false;
			break;
		}
		if (fage > 0){
			if (fage <= 17){
				alert('Вам ещё работать рано, учитесь!');
				pressed = false;
				break;
			}
			else{
				if (gender === "Male"){
					if (fage <= 59){
						alert('Вам ещё работать и работать!');
						pressed = false;
						break;
					}
					else{
						if (fage <= 64){
							alert('Скоро пенсия!');
							pressed = false;
							break;
						}
						else{
							alert('Вам пора на пенсию!');
							pressed = false;
							break;
						}
					}
				}
				if (gender === "Female"){
					if (fage <= 54){
						alert('Вам ещё работать и работать!')
						pressed = false;
						break;
					}
					else{
						if (fage <= 59){
							alert('Скоро пенсия!')
							pressed = false;
							break;
						}
						else{
							alert('Вам пора на пенсию!')
							pressed = false;
							break;
						}
					}
				}
			}
			
		}
		else {
			alert('Введите возраст!')
			pressed = false;
			break;
		}
	
	}
}

