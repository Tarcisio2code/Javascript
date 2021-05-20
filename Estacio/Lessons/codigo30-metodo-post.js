//Sintaxe: $.post(URL,data,callback);
$.post("/url/recurso", {id: 1, order: "asc"} function(data, status){
	alert("Dados Retornados: " + data + "\nStatus: " + status);
});