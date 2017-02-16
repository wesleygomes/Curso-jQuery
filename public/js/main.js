
	var tempoInicial = $("#tempo-digitacao").text();

	$(function(){

		atualizaTamanhoFrase();
		inicializaContadores();
		inicializaCronometro();
		inicializaMarcadores();
		$("#btnReiniciar").click(reiniciaJogo);

	});

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
		var tempoRestante = $("#tempo-digitacao").text();
		$(".campo-digitacao").one('focus', function(){
			var cronometroID = setInterval(function(){
				tempoRestante--;
				$("#tempo-digitacao").text(tempoRestante);
				if(tempoRestante < 1){
					$(".campo-digitacao").attr('disabled', true);
					clearInterval(cronometroID);
					$(".campo-digitacao").toggleClass("campoDisable");
				}
			}, 1000);
		});
	}

	
	function inicializaMarcadores(){
		var frase = $(".frase").text();

		$(".campo-digitacao").on('input', function(){
			var digitado = $(this).val();
			var comparavel = frase.substr(0, digitado.length);
			
			/*mesma coisa de cima usando o starsWith*/
			/*var digitouCorreto = frase.startsWith(digitado);*/


			var ehCorreto = (digitado == comparavel);

			$(".campo-digitacao").toggleClass("borda-verde", ehCorreto);
			$(".campo-digitacao").toggleClass("borda-vermelha", !ehCorreto);
			/*if (digitado == comparavel) {
				$(".campo-digitacao").removeClass('borda-vermelha');
				$(".campo-digitacao").addClass('borda-verde');
			}else{
				$(".campo-digitacao").removeClass('borda-verde');
				$(".campo-digitacao").addClass('borda-vermelha');
			}*/
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

	