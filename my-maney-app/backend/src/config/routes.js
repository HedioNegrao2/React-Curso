

const express = require('express')

module.exports = function(server){
    // Definiu url base para todas as rotas
    const router = express.Router()
    server.use('/api', router)


    const BillingCycle =  require('../api/billingCycle/billingCycleServer')
    BillingCycle.register (router,'/billingCycles')

}