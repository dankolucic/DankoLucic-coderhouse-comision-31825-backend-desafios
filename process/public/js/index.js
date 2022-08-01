const logoutButton = document.getElementById("logoutButton")

logoutButton.addEventListener("click", async event => {
    const response = await logout()   
    if(response.status == 404) redirectLogoutError()
    if(response.status == 201) redirectLogout()
})

async function logout(){
    try {
            const response = await fetch("/auth/logout",{
            method:"GET",
            headers: { 
                'Content-Type': 'application/json',
            }  
        })
        return response
    } catch (err) {
        throw new Error(`Error fetch: ${err.message}`);
    }
}

function redirectLogout(){
    setTimeout(
        function(){ 
            window.location.href = "http://localhost:8080/logout"; 
        },0); 
}

function redirectLogoutError(){
    setTimeout(
        function(){ 
            window.location.href = "http://localhost:8080/errorLogout"; 
        },0); 
}
