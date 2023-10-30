function respostas(){
	let nome = document.forms["form_questionario"]["nome"].value;
	let idade = document.forms["form_questionario"]["idade"].value;
	let banda = document.forms["form_questionario"]["banda"].value;
	let filme = document.forms["form_questionario"]["filme"].value;
	let mochila = document.forms["form_questionario"]["mochila"].value;
	let dianoite = document.forms["form_questionario"]["dianoite"].value;
	let medo = document.forms["form_questionario"]["medo"].value;
	let hoje = document.forms["form_questionario"]["hoje"].value;
	let poderes = document.forms["form_questionario"]["poderes"].value;
	let coisa = document.forms["form_questionario"]["coisa"].value;

	console.log("oi")
	let inserir = window.document.getElementById("inserirRespostas");
	inserir.innerHTML = `Nome: ${nome}<br>`;
	inserir.innerHTML += `Idade: ${idade}<br>`;
	inserir.innerHTML += `Banda favorita: ${banda}<br>`;
	inserir.innerHTML += `Filme muito bom: ${filme}<br>`;
	inserir.innerHTML += `O que sempre carrega: ${mochila}<br>`;
	inserir.innerHTML += `Prefere: ${dianoite}<br>`;
	inserir.innerHTML += `Medo: ${medo}<br>`;
	inserir.innerHTML += `Se hoje fosse o último dia: ${hoje}<br>`;
	inserir.innerHTML += `Escolheria o poder: ${poderes}<br>`;
	inserir.innerHTML += `Algo importante: ${coisa}<br>`;

}
