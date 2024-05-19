let pressed = false;
switchflag = false;
function rpressed(){
	pressed = true;
	while (pressed) {
		let fcnumber = + crows.value;
		if (fcnumber > 0){
			alert(fcnumber)
			switch(fcnumber){
				case 1:{
					alert(`на ветке сидит ${fcnumber} ворона`);
					switchflag = true;
					pressed = false;
					break;
				}
				case 2:{
					alert(`на ветке сидит ${fcnumber} вороны`);
					switchflag = true;
					pressed = false;
					break;
				}
				case 3:{
					alert(`на ветке сидит ${fcnumber} вороны`);
					switchflag = true;
					pressed = false;
					break;
				}
				case 4:{
					alert(`на ветке сидит ${fcnumber} вороны`);
					switchflag = true;
					pressed = false;
					break;
				}
			}
			if (switchflag === false){
				alert(`на ветке сидит ${fcnumber} ворон`);
				pressed = false;
				break;
			}
		}
		else {
			alert('Введите число ворон!')
			pressed = false;
			break;
		}
	
	}
}

