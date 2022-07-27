const username = document.getElementById("username")
const password = document.getElementById("password")
const loginButton = document.getElementById("loginButton")


loginButton.addEventListener("click", async event => {
    if(!username.value){
        alert("username is required")
        return username.focus()
    }
    else{
        if(!password.value){
            alert("password is required")
            return password.focus()
        }
        else{
            const response = await register(username, password) 
            if(response.status == 404){
                redirectRegisterError()
            } 
            if(response.status == 201){
                redirectLogin()
            } 
        }
    }
})


async function register(username, password){
    try {
            const response = await fetch("/auth/register",{
            method:"POST",
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })   
        })
        return response
    } catch (err) {
        throw new Error(`Error fetch: ${err.message}`);
    }
}

function redirectRegisterError(){
    setTimeout(
        function(){ 
            window.location.href = "http://localhost:8080/errorRegister"; 
        },0); 
}

function redirectLogin(){
    setTimeout(
        function(){ 
            window.location.href = "http://localhost:8080"; 
        },0); 
}