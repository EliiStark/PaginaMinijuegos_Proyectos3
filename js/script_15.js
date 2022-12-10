var numJ1 = []
var numJ2 = []

var nombreJugador = "Jugador";
var nombreMaquina = "Maquina";

var turn = 1;

var iaInterval;

$(document).ready( ()=> {
	$("h2").click(function(){
		if (!numJ1.includes(parseInt($(this).attr('id'))) && !numJ2.includes(parseInt($(this).attr('id')))){
			if (turn == 1){
				numJ1.push(parseInt($(this).attr('id')));
				turn = 2;
				$(this).css('color', 'blue');
				$('#numJ1').text(numJ1.toString());
				
			}else{
				numJ2.push(parseInt($(this).attr('id')));
				turn = 1;
				$(this).css('color', 'red');
				$('#numJ2').text(numJ2.toString());
			}
			$("#textPlayer").text("Turno de Jugador " + (turn));
		}
		
		if (comprueba(numJ1)){
			$("#textPlayer").text("GANADOR Jugador 1");
			startConfetti();
		}
		
		if (comprueba(numJ2)){
			$("#textPlayer").text("GANADOR Jugador 2");
			startConfetti();
		}		
		
	})
})

function comprueba(nums){
	var i,j,k;
	if (nums.length >= 3){
		for(i=0; i <nums.length; i++){
			for(j=0; j <nums.length; j++){
				for(k=0; k <nums.length; k++){
					console.log(nums[i]+nums[j]+nums[k]);
					if (nums[i]+nums[j]+nums[k] == 15){
						return true;
					}
				}
			}
		}
	}
	return false;
}