import { loggerInfo } from "../log/loggersFunctions.js"

const data = {
    info: "super secret"
}

export const dataController = (req, res) => {
    loggerInfo(req)
    console.log(req)
    res.json({ data, user: req.user})
}