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
            const response = await login(username, password) 
            if(response.status == 404) redirectLoginError()
            if(response.status == 201) redirectLogin()
        }
    }
})


async function login(username, password){
    try {
            const response = await fetch("/auth/login",{
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

function redirectLoginError(){
    setTimeout(
        function(){ 
            window.location.href = "http://localhost:8080/errorLogin"; 
        },0); 
}

function redirectLogin(){
    setTimeout(
        function(){ 
            window.location.href = "http://localhost:8080"; 
        },0); 
}






