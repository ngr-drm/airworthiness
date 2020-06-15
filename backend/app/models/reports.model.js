const mongoose = require('mongoose');
const ReportSchema = mongoose.Schema({
    number: Number,
    type: String,
    aircraft: String,
    engine: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Report', ReportSchema);