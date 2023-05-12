const {User} = require('../../database/models')

module.exports = {


    getAll: async(req, res) =>{
        try {
            
            const user = await User.findAll({
                order:[
                    ['created_at','DESC']
                ]
            })
    
            res.status(200).json({
                status:200,
                length: User.length,
                user
            })
    
        } catch (error) {
            console.log(error);
            res.status(400).json({error})
        }
    },

    getByPk: async (req, res) => {

        try {
            let {id} = req.params
            const user = await User.findByPk(id)
    
            res.status(200).json({
                status:200,
                user
            })
    
        } catch (error) {
            console.log(error);
            res.status(400).json({error})
        }

    }

}