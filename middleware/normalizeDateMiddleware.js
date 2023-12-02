const normalizeDate = (req, res, next) => {
    const originJson = res.json;
    res.json = (data) => {
        console.log(data, "refa");
        originJson.call(res, data);
    };
    next();
};

module.exports = normalizeDate;
