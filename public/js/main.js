$(function(){
	var frase = $(".frase").text();
	var numeropalavra = frase.split(" ").length;
	$("#tamanhoFrase").text(numeropalavra);

	$(".campo-digitacao").on('input', function(){

		var conteudo = $(".campo-digitacao").val();

		var qdtPalavras =  conteudo.split(/\S+/).length -1;
		$("#contato-palavras").text(qdtPalavras);
		$("#contato-caracteres").text(conteudo.length);
	});
	
});