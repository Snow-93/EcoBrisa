const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up");
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e=>{
  formRegister.classList.add("hide");
  formLogin.classList.remove("hide");
});      


btnSignUp.addEventListener("click", e=>{
  formLogin.classList.add("hide");
  formRegister.classList.remove("hide");
});      



const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up');


signUp.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');

    // Add classes
    loginIn.classList.toggle('none');
    loginUp.classList.toggle('block');
});

signIn.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none');
    loginUp.classList.remove('block');

    // Add classes
    loginIn.classList.toggle('block');
    loginUp.classList.toggle('none');
});

const users = [
    { Usuario: "Angelo", password: "9368" },
    { Usuario: "Allan", password: "1234" },
    { Usuario: "Rashelle", password: "4321" }
];

function operacion(action) {
    let usuarioInput, passwordInput;

    if (action === 'login') {
        usuarioInput = document.getElementById('usuario');
        passwordInput = document.getElementById('contraseña');
    } else if (action === 'register') {
        usuarioInput = document.getElementById('registroUsuario');
        // Puedes agregar lógica similar para otros campos de registro si es necesario
    }

    let usuario = usuarioInput.value;
    let password = passwordInput.value;
    let userFound = false;

    if (action === 'login') {
        for (let i = 0; i < users.length; i++) {
            if (users[i].Usuario === usuario && users[i].password === password) {
                alert("¡Bienvenido " + usuario + "!");
                window.location.href = "inicio.html";
                userFound = true;
                break;
            }
        }

        if (!userFound) {
            alert("Credenciales incorrectas");
        }
    } else if (action === 'register') {
        // Aquí puedes agregar lógica para manejar el registro si es necesario
        alert("Funcionalidad de registro aún no implementada.");
    }
}
