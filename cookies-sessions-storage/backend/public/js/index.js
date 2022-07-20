const mensaje = document.getElementById("mensaje")

proceso();


async function proceso(){
    try {
        const response1 = await getSession()
        mensaje.innerHTML = `<span> ¡¡¡ Bienvenido "${response1.name}" !!! </span> <button id="logoutButton">Logout</button><div id="mensaje2"></div>`
        const logoutButton = document.getElementById("logoutButton")
        logoutButton.addEventListener("click", async event => {
            const mensaje2 = document.getElementById("mensaje2")
            const response2 = await logout()
            mensaje2.innerHTML = `<span>${response2.message}, ¡¡¡ HASTA LUEGO !!!</span>`
            setTimeout(
                function(){ 
                    window.location.href = "http://localhost:8080/inicio"; 
                },3000 );
        })
    } catch (err) {
        throw new Error(`Error fetch: ${err.message}`);
    }
}

async function getSession(){
    try {
        const response = await fetch(`api/session`,{
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


async function logout(){
    try {
        const response = await fetch("api/logout",{
            method:"GET",
            headers: { 
                'Content-Type': 'application/json',
            },
            
        })
        return response.json();
    } catch (err) {
        throw new Error(`Error fetch: ${err.message}`);
    }
}
