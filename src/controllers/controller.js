const url = require('../models/models')
module.exports = {
    async register (req, res) {
        try {
            const baseURL = req.body

            let newUrl = await url.create(baseURL)
            return res.json({newUrl})
        }
        catch(err){
            return res.status(400).send({error: 'Registration failed'});
        }
    },
    async  index(req, res){
        try{
            let urls = await url.find();
            
            return res.json({urls})

        }
        catch(err){
            return res.status(400).send({error: 'Request failed'});
        }
    },
    async view(req, res){
        try{
            
            const {id} = req.params;
            
            let Url = await url.findOne({_id: id});
            if(!Url){
                return res.status(400).send({error: 'invalid url'});
            }
            console.log(Url)
            //return res.redirect(Url.baseURL)
            return res.json(Url.baseURL)

        }
        catch(err){
            return res.status(400).send({error: 'Request failed'});
        }
    }
}