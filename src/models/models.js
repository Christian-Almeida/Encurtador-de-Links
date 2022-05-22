const mongoose = require('mongoose');
const {nanoid} = require('nanoid')

var ID = nanoid(7);

const UrlSchema = new mongoose.Schema({

    baseURL: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    _id: {
        type: String,
        required: true,
        default: () => nanoid(7),
        index: { unique: true },
      },

});

module.exports = mongoose.model('url', UrlSchema);