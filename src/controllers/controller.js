const url = require('../models/models')
module.exports = {
    async register (req, res) {
        try {
            const baseURL = req.body
            let newUrl = url.create(baseURL)
            return res.json({newUrl})
        }
        catch(err){
            return res.status(400).send({error: 'Registration failed'});
        }
    } 
}