const mongoose = require('mongoose');
const nanoid = require('nanoid')

const UrlSchema = new mongoose.Schema({

    baseURL: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    uniqueId: {
        type: String,
        required: true,
        default: () => nanoid(7),
        index: { unique: true },
      },

});

module.exports = mongoose.model('url', UrlSchema);