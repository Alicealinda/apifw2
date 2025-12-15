module.exports = (app) => {
    app.post("/postnoticias", async (req, res) => {
        try {
            const titulonoticia = req.body.titulonoticia
            const conteudonoticia = req.body.conteudonoticia
            const tiponoticia = req.body.tiponoticia
            await app.dbClient.connect();

            const resultado = await app.dbClient.db("portalnoticias")
                .collecion("noticias")
                .insertOne({
                    titulonoticia: titulonoticia,
                    conteudonoticia: conteudonoticia,
                    tiponoticia: tiponoticia,
                    datahoracadastro: new Date()
                })
            res.status(200).json("noticias gravadas com sucesso!")
        } catch (erro) {
            res.status(400).json(erro)
        }
        /*  try {
         } catch (error) {
             res.status(400).send("erro ao gravar a noticias:",error)
             
         } */

    })
}