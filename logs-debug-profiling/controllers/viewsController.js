export const viewsController = {

    inicial: (req, res) => {
        if(!req.user){
            res.sendFile("login.html", {root: "views"}) 
        }
        else{
            res.render("index", {infoSessionPassportUser: req.user})
            // res.sendFile("index.html", {root: "views"})
            // res.json(req.user)  
        }
    },

    register: (req, res) => {
        res.sendFile("register.html", {root: "views"}) 
    },

    errorLogin: (req, res) => {
        res.sendFile("errorLogin.html", {root: "views"}) 
    },

    errorRegister: (req,res) => {
        res.sendFile("errorRegister.html", {root: "views"})
    },

    logout: (req, res) => {
        res.sendFile("logout.html", {root: "views"})
    },

    errorLogout: (req, res) => {
        res.sendFile("errorLogout.html", {root: "views"})
    }


}

