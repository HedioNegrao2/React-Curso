const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle =  res.locals.bundle

    if (bundle.errors) {
        const errors = paseErrors(bundle.errors)
        res.status(500).json({errors})        
    } else {
        next()
    }
}

const paseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(errors.push(error.message)) ) ;
    return errors
}