import session from "express-session"

export const sessionHandler = session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
})