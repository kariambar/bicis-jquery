
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
		//Validate Email
		(function email(){
			var email = $("#input-email").val();
			if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)){
				$(".email-container").append('<span>Correo inválido. Ingrese nuevamente.');
			}
		})();
		//Validate Password
		(function password(){
			var password = $("#input-password").val();
			if (password=="123456" || password=="098765" || password=="password" || !(/^(?=.*\d).{6,}$/).test(password)){
				$(".form-group").first().append('<span>Contraseña inválida. Ingrese nuevamente.');
			}
		})();
		//Validate Twitter - no funciona 
		(function twitterAccountExists($username){
			var twitter = $("#input-social").val();
	    $twitter = get_headers("https://twitter.com/".$username);
	    if(strpos($twitter[0], '404') !== false ) {
	    $(".form-group").first().append('<span>Contraseña inválida. Ingrese nuevamente.');
			}
		})();	
	});
}	

