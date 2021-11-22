module.exports = {
    async index(req, res) {
        const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

        res.json({
            status: true,
            message: 'Hoje é ' + days[new Date().getDay()]
        })
    }
}