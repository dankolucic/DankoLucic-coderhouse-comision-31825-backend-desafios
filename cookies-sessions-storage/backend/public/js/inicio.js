const user = document.getElementById("user")
const loginButton = document.getElementById("loginButton")
const mensaje = document.getElementById("mensaje")

loginButton.addEventListener("click", async event => {
    if(user.value){
        const response1 = await login()
        mensaje.innerHTML = `<span>¡¡¡ Hola "${response1.name}" !!!. Tu sessionID es: "${response1.sessionID}". Serás redireccionado a la página principal</div>`
        setTimeout(
            function(){ 
                window.location.href = "http://localhost:8080/inicio"; 
            },3000 );
    }
    else{
        alert("debe ingresar nombre de usuario")
    }
    
})

async function login(){
    try {
        const response = await fetch(`/api/login/${user.value}`,{
            method:"GET",
            headers: { 
                'Content-Type': 'application/json',
            }
        })
        return response.json();
    } catch (err) {
        throw new Error(`Error fetch: ${err.message}`);
    }
}






