const multer = require("multer");

function replaceSpaceWithHyphens(name) {
    const newName = name.replaceAll(" ", "-");
    return newName;
}

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + replaceSpaceWithHyphens(file.originalname));
    },
});

// Create the multer instance
const upload = multer({ storage: storage });


















module.exports = upload;
