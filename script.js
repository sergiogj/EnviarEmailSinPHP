$(function() {
	$("#enviar").click(function() {
		var nombre = $("#nombre").val()
		var apellidos = $("#apellidos").val()
		var telefono = $("#telefono").val()
		var email = $("#email").val()
		var consulta = $("#consulta").val()

		// %0D%0A ==> Para poner un salto de línea
		window.location.href = 
			"mailto:prueba@prueba.es"+ 
			"?subject=asunto de prueba"+
			"&body="+
			"Nombre: " + nombre
			+ "%0D%0A" +
			"Apellidos: " + apellidos
			+ "%0D%0A" +
			"Teléfono: " + telefono
			+ "%0D%0A" +
			"Email: " + email
			+ "%0D%0A" +
			"Consulta: "
			+ "%0D%0A" +
			+ "%0D%0A" +
			consulta 
	});
});