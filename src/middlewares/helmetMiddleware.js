exports.processCsfrError = (error, req, res, next) =>{
    if(error && error.code === 'EBADCSRFTOKEN'){
        return res.send('BAD CSRF');
    }
}

exports.csrfTokenGenerator = (req,res,next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}