//==============DOTENV==============
import dotenv from "dotenv"
//==================================

dotenv.config()

export const mongoUsername = process.env.MONGO_USERNAME
export const mongoPassword = process.env.MONGO_PASSWORD
export const nodeEnv = process.env.NODE_ENV