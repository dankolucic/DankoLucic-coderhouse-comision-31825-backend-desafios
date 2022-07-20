import express from "express";
import session from "express-session"
import cors from "cors";
// import sfs from "session-file-store";
import MongoStore from "connect-mongo";

// const FileStore = sfs(session)

//config data MongoAtlas
const username = 'root';
const password = 'mongopassword';
const dirAtlas = 'cluster0.5hrf6.mongodb.net';
const database = 'coderhouse'


const app = express();

//necesario cuando el html y los script están en el mismo servidor (web server)
app.use(express.static("public"));

app.use(session({

    // store: new FileStore({path: "./sessions", ttl:60, retries:0}),
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${username}:${password}@${dirAtlas}/${database}?retryWrites=true&w=majority`,

    }),
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    // cookie : {
    //     maxAge: 30000,
    // }
}))

app.use(cors())
//middlewares (app.use)
app.use(express.json()) //para que la info enviada en el request (JSON) quede en res.body.
app.use(express.urlencoded({ extended:true }))

app.get("/", (req,res) => {
    res.send("Servidor Express OK!")
})

//endpoint login
app.get("/api/login/:name", (req,res) => {
    if(req.params.name){
        req.session.name = req.params.name;
        res.json({
            name: req.session.name,
            sessionID: req.sessionID
        })
    }
    else{
        res.json({ error: "name user not exist" })
    }
})

app.get("/api/session", (req,res) => {
    if(req.session.name){
        res.json({ name: req.session.name})
    }
})

//endpoint logout
app.get("/api/logout", (req,res) => {
    req.session.destroy(err => {
        if(err){
            res.json({ message: err})
        }
        else{
            res.json({ 
                message: "Logout OK",
            })
        }
    })
})

//endpoint pantalla
//debo poner un middleware; si tiene sessionID, que se vaya a index.html, si no que prosiga para obtener
app.get("/inicio", (req,res) => {
    if(!req.session.name){
        res.sendFile("inicio.html", {root: "views"}) 
    }
    else{
        res.sendFile("index.html", {root: "views"}) 
    }
})

//
app.get("/index", (req,res) => {
    if(!req.session.name){
        res.json({message: "no has iniciado sesion"})
    }
    else{
        res.json({message: `¡¡¡Bienvenido ${req.session.name}!!!`})
    }
})


//backend server
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`);
})