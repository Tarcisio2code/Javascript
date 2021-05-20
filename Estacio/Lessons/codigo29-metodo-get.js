//Sintaxe: $.get(URL,callback);
$.get("/url/recurso", function(data, status){
	alert("Dados Retornados: " + data + "\nStatus: " + status);
});