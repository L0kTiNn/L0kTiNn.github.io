function rpressed(){
	let i = 1;
	let cats = 2;
	let dogs = 3;
	list = [];
	mainlist = [];
	f = true
	let fnumber = + enumber.value;
	while (i <= fnumber) {
		for (let j = 0;j < 6; j++){
			if(dogs>0){
				list.push('dog');
				dogs--;
			}
			else{
				if (cats > 0){
					list.push('cat')
					cats--;
				}
				else{
					dogs = 2;
					cats = 2;
					list.push('dog');
				}
			}

		}
		mainlist.push(list);
		list = [];
		i++;
		
	}
	console.table(mainlist);
}

