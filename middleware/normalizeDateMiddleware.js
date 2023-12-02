const normalizeDate = (req, res, next) => {
    const originJson = res.json;
    res.json = (data) => {
        // console.log(data, "refa");
        let pictureName = data.picture.split("-");
        // get the milliseconds
        const currentMilliseconds = pictureName[0];
        // format into YYYY:MM:DD:HH:MM:SS
        const realDate = new Date(Number(currentMilliseconds));
        const year = realDate.getFullYear();
        const month = realDate.getMonth();
        const date = realDate.getDate();
        const hours = realDate.getHours();
        const minutes = realDate.getMinutes();
        const sec = realDate.getSeconds();
        const dateFormat = `${year}-${month}-${date}-${hours}h-${minutes}m-${sec}s`;

        // save new data using the format date

        originJson.call(res, data);
    };
    next();
};

module.exports = normalizeDate;
