const mongoose  = require('mongoose');
const db;

module.exports = () => {
    if (!db) {
        db = mongoose.connect('mongodb://')
    }
}
