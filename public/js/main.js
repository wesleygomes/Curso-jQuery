
	var tempoInicial = $("#tempo-digitacao").text();

	$(function(){

		atualizaTamanhoFrase();
		inicializaContadores();
		inicializaCronometro();
		inicializaMarcadores();
		$("#btnReiniciar").click(reiniciaJogo);

	});

	function atualizaTempoInicial(tempo) {
		$("#tempo-digitacao").text(tempo);
	}

	function atualizaTamanhoFrase(){
		var frase = $(".frase").text();
		var numeropalavra = frase.split(" ").length;
		$("#tamanhoFrase").text(numeropalavra);
	}

	function inicializaContadores(){
		$(".campo-digitacao").on('input', function(){
			var conteudo = $(".campo-digitacao").val();
			var qdtPalavras =  conteudo.split(/\S+/).length -1;

			$("#contato-palavras").text(qdtPalavras);
			$("#contato-caracteres").text(conteudo.length);
		});
	}

	function inicializaCronometro(){

		$(".campo-digitacao").one('focus', function(){
			var tempoRestante = $("#tempo-digitacao").text();
			var cronometroID = setInterval(function(){
				tempoRestante--;
				$("#tempo-digitacao").text(tempoRestante);
				if(tempoRestante < 1){
					clearInterval(cronometroID);
					finalizaJogo();
				}
			}, 1000);
		});
	}

	function finalizaJogo(){
		$(".campo-digitacao").attr('disabled', true);
		$(".campo-digitacao").toggleClass("campoDisable");
		inserePlacar();
	}

	function inicializaMarcadores(){
		$(".campo-digitacao").on('input', function(){
			var frase = $(".frase").text();
			var digitado = $(this).val();
			var comparavel = frase.substr(0, digitado.length);
			/*mesma coisa de cima usando o starsWith*/
			/*var digitouCorreto = frase.startsWith(digitado);*/

			var ehCorreto = (digitado == comparavel);

			$(".campo-digitacao").toggleClass("borda-verde", ehCorreto);
			$(".campo-digitacao").toggleClass("borda-vermelha", !ehCorreto);
		});
	}

	function reiniciaJogo(){
		$(".campo-digitacao").attr('disabled', false);
		$(".campo-digitacao").val("");
		$("#contato-palavras").text("0");
		$("#contato-caracteres").text("0");
		$("#tempo-digitacao").text(tempoInicial);
		$(".campo-digitacao").toggleClass("campoDisable");
		inicializaCronometro();
		$(".campo-digitacao").removeClass('borda-verde');
		$(".campo-digitacao").removeClass('borda-vermelha');
	}
