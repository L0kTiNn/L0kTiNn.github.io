function rpressed(){
	let i = 1;
	list = [1]
	f = true
	let fnumber = + enumber.value;
	while (i <= fnumber) {
		for (let j = 1;j < list.length; j++){
			if (i % list[j] === 0){
				f = false;
			}
		}
		if (i == 1){
			f = false;
		}
		if (f === true){
			list.push(i)
		}
		i++;
		f = true;
		
	}
	alert(list)
}

