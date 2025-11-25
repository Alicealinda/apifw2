const { ObjectId } = require("mongodb");
module.exports =(app)=>{
    app.post("/postnoticias",async (req,res) => {
        try {
            const id = ObjectId.createFromHexString(req.body._id);
            const titulonoticia = req.body.titulonoticia
            const conteudonoticia = rep.body.conteudonoticia
            const tiponoticia = req.body.tiponoticia
            await app.dbClient.connect();
            const resultado =  await app.dbClient.db("portalnoticias")
            .collecion("noticias")
            .updateOne({_id:id},{$set:{titulonoticia:titulonoticia,
                conteudonoticia:conteudonoticia,
                tiponoticia:tiponoticia,
                datahoracadastro:new Date()}})
            res.status(200).send("noticias gravadas com sucesso!")
        } catch (error) {
            res.status(400).send("erro ao gravar a noticias:",error)
            
        }
        
    })
}