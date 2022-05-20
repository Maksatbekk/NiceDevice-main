module.exports = (req, res, next) => {
    res.header('Content-Range', 'goods 0-10/10');
    next()
};