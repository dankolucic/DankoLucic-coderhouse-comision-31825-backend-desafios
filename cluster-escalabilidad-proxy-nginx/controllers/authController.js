import passport from "passport"

export const registerController =  passport.authenticate("register", {
    failureRedirect:"/auth/failRegister",
    successRedirect:"/auth/successRegister"
})

export const loginController = passport.authenticate("login", {
    failureRedirect:"/auth/failLogin",
    successRedirect:"/auth/successLogin"
})

export function successRegisterController(req, res){
    res.status(201).json({ message: "ok"})
}

export function failRegisterController(req, res){

    res.status(404).json({ error: "registration failed"})
}

export function successLoginController(req, res){
    res.status(201).json({ message: "ok"})
    // res.redirect(201,"http://localhost:8080")
}

export function failLoginController(req, res){
    res.status(404).json({ error: "registration failed"}) 
    
}

export async function logoutController (req, res){
    if (req.isAuthenticated()) {
        await req.logout(
            function(err){
                if(err){
                    res.status(404).json({ error: err})
                }
            }
        )
    }
    res.status(201).json({ message: "ok"})
} 