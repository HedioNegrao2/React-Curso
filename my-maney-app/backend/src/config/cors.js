module.exports = (req,res, next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS,PUT,PATCH,DELETE')
    res.header('Access-Control-Allow-Headrs','Origin,X-Requested-with, Content-Type, Accept' )
    next()
}