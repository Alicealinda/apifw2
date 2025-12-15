module.exports =(app)=>{
    app.post("/postnoticias",async (req,res) => {
        res.send("teste")
      /*   try {
            const titulonoticia = req.body.titulonoticia
            const conteudonoticia = rep.body.conteudonoticia
            const tiponoticia = req.body.tiponoticia
            await app.dbClient.connect();
            const resultado =  await app.dbClient.db("portalnoticias")
            .collecion("noticias")
            .insertOne({titulonoticia:titulonoticia,
                conteudonoticia:conteudonoticia,
                tiponoticia:tiponoticia,
                datahoracadastro:new Date()})
            res.status(200).send("noticias gravadas com sucesso!")
        } catch (error) {
            res.status(400).send("erro ao gravar a noticias:",error)
            
        } */
        
    })
}