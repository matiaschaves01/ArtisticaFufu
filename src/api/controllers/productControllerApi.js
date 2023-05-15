const {Product} = require('../../database/models')
 

module.exports = {

   getAll: async(req, res) =>{
    try {
        
        const product = await Product.findAll()

        res.status(200).json({
            status:200,
            length: product.length,
            product
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({error})
    }
   },
    
   detail: async(req, res) =>{

    try {
        let {id} = req.params
        const product = await Product.findByPk(id)

        res.status(200).json({
            status:200,
            product
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({error})
    }

   },
   delete: async (req , res) =>{

    try {
        
        await Product.destroy({
            where:{
                id:req.params.id
            }
        })

        res.status(200).json({
            
            status:200,
            data: 'Producto Eliminado'
        })

    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}
}