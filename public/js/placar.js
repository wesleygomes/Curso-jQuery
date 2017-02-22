function inserePlacar(){
		var corpoTabela = $(".placar").find("tbody");
		var usuario = "Wesley";
		var numeroPalavra = $("#contato-palavras").text();
		
		var linha = novaLinha(usuario, numeroPalavra);
				
		linha.find('.btn-remover').click(removeLinha);

		corpoTabela.prepend(linha);

}

function novaLinha(usuario, palavras){

		var linha = $("<tr>");
		var colunaUser = $("<td>").text(usuario);
		var colunaPalavras = $("<td>").text(palavras);
		var colunaRemover = $("<td>");

		var link = $("<a>").addClass("btn-remover").attr('href', '#');
		var icone = $("<i>").addClass("small").addClass(" material-icons").text("delete");

		link.append(icone);
		colunaRemover.append(link);
		linha.append(colunaUser);
		linha.append(colunaPalavras);
		linha.append(colunaRemover);

		return linha;
}	

function removeLinha(){
			event.preventDefault();
			$(this).parent().parent().remove();
}