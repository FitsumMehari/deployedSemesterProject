const mongoose = require('mongoose')

const TutorialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    fieldofstudy: {
        type: String,
        required: true,
    },
    visibility: {
        type: String,
        default: 'true',
        required: false
    }
})

module.exports = mongoose.model("tutorial", TutorialSchema)