
	var tempoInicial = $("#tempo-digitacao").text();

	$(function(){

		atualizaTamanhoFrase();
		inicializaContadores();
		inicializaCronometro();
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
					$(".campo-digitacao").addClass("campoDisable");
				}
			}, 1000);
		});
	}

	function reiniciaJogo(){
		$(".campo-digitacao").attr('disabled', false);
		$(".campo-digitacao").val("");
		$("#contato-palavras").text("0");
		$("#contato-caracteres").text("0");
		$("#tempo-digitacao").text(tempoInicial);
		inicializaCronometro();
	}

	