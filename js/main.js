
	/* Escribe tú código aquí */
	$("#name").on("blur", function() {
    if ( $(this).val().match('^[a-zA-Z]$') ) {
    } else {
        alert("Ingresa un numero valido");
    }
});
