import passport from "passport"
import { Strategy } from "passport-local"
import bcryptjs from "bcryptjs"

import { getUserByID } from "../persistence/users.js"
import { registerUser } from "../api/usersApi.js"
import { authenticate } from "../api/authApi.js"

passport.use("register", new Strategy({
    passReqToCallback: true,
}, async (req, username, password, done) => {
        try {
            const username = req.body.username
            const password = req.body.password
            const passwordHash = await bcryptjs.hash(password, 8);
            const userDataHash = {
                username,
                password: passwordHash
            }
            const user = await registerUser(userDataHash)
            done(null,user)
        } catch (error) {
            done(null,false)
            // return done(error)
        }
    }
))

passport.use("login", new Strategy(
    async (username, password, done) => {
        try {
            const user = await authenticate(username, password)
            done(null,user)
        } catch (error) {
            done(null,false)
        }
    }
))

export const passportMiddleware = passport.initialize()

passport.serializeUser((user,done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await getUserByID(id)
    done(null, user)
})

export const passportSessionHandler = passport.session()