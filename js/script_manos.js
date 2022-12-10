var fist = "brand/manos/fist.png";
var hand = "brand/manos/hand.png";
var key =  "brand/manos/key.png";

var jugador = 0;
var maquina = 0;

var nombreJugador = "Jugador";
var nombreMaquina = "Maquina";

var iaInterval;

var key_hand = Math.floor(Math.random() * 2)

$(document).ready( ()=> {
	$("img").click(function(){
		
		if ($(this).attr('id') == key_hand){
			jugador++;
			$('#' + key_hand).attr('src', key);
			$('#jugador').text("Puntos de " + nombreJugador +": "+ jugador);
		}
			
		else{
			maquina++;
			setTimeout(function(){
				$('#' + key_hand).attr('src', key);
			}, 1000)
			$('#' + (1 - key_hand)).attr('src', hand);
			$('#maquina').text("Puntos de " + nombreMaquina + ": " + maquina);
		}
		
		setTimeout(function(){
			$('#0').attr('src', fist);
			$('#1').attr('src', fist);
			key_hand = Math.floor(Math.random() * 2);
		}, 2000)
		
		
	})

	$("#reiniciar").click(function(){
		jugador = 0;
		maquina = 0;
		clearInterval(iaInterval);
		$('#jugador').text("Puntos de " + nombreJugador +": "+ jugador);
		$('#maquina').text("Puntos de " + nombreMaquina + ": " + maquina);
	})

	$("#pista").click(function(){
		if(key_hand == 0){
			$('#pista_texto').text("La llave esta en la mano izquierda");
		}
		else{
			$('#pista_texto').text("La llave esta en la mano derecha");
		}
		setTimeout(function(){
			$('#pista_texto').text("");
		}, 2000)
	})
	$("#ia").click(function(){
		iaInterval = setInterval(() => {
			$('#'+ Math.floor(Math.random() * 2)).trigger("click");
		}, 3000)
	})
	$("#botonFormulario").click(function(){
		nombreJugador = $('#nombreJugador').val()
		nombreMaquina = $('#nombreMaquina').val()
		$('#jugador').text("Puntos de " + nombreJugador +": "+ jugador);
		$('#maquina').text("Puntos de " + nombreMaquina + ": " + maquina);
	})
})