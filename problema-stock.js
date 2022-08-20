// esquerda menor
let arrayCargas = [3,1,4,5,1,6];

//resposta = [3,5,5,7]
//resposta = [8,12]
//resposta = [20]

function empacotar(arrayCargas) {
	let index = 0;
	while((index + 1) < arrayCargas.length){
		console.log('index ' + index + ' valor: ' + arrayCargas[index])
		if (arrayCargas[index] < arrayCargas[index + 1]) {
			arrayCargas[index] = (arrayCargas[index] + arrayCargas[index + 1])
			arrayCargas.splice(index + 1, 1)
			index = 0
			continue
		}else{
			index++
		}
	}
	return arrayCargas
}

console.log(empacotar(arrayCargas))