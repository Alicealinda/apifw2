const { ObjectId } = require("mongodb");
module.exports =(app)=>{
    app.delete("/delnoticias",async (req,res) => {
        try {
            const id = ObjectId.createFromHexString(req.body._id);
            await app.dbClient.connect();
            const resultado =  await app.dbClient.db("portalnoticias")
            .collecion("noticias")
            .deleteOne({_id:id})
            if (!resultado.deletedCount)   {
                throw new Error("nenhuma noticia foi apagada - id nao encontrado");
              
            }
            res.status(200).send("noticias apagadas com sucesso!")
        } catch (error) {
            res.status(400).send("erro ao ser apagadas  a noticias:",error)
            
        }
        
    })
}