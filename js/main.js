
	/* Escribe tú código aquí 
	$("#name").on("blur", function() {
    if ( $(this).val().match('^[a-zA-Z]$') ) {
    } else {
        alert("Ingresa un numero valido");
    }
});
 */
function validateForm(){
	$(document).ready(function(){
	//Validate Name
		(function name(){
			var name = $("#name").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(name)){
				$(".name-container").append('<span>Nombre incorrecto. Ingrese solo letras');
			}
		})();
		//Validate Last Name
		(function lastName(){
			var lastname = $("#lastname").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(lastname)){
				$(".lastname-container").append('<span>Apellido incorrecto. Ingrese solo letras');
			}
		})();

