const data = {
    info: "super secret"
}

export const dataController = (req, res) => {
    res.json({ data, user: req.user})
    
}