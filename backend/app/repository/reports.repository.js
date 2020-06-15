const Report = require('../models/reports.model');

// Function for adding reports.
exports.insert = async (data) => {
    try {
        const report = new Report({
            number: data.body.number,
            type: data.body.type,
            aircraft: data.body.aircraft,
            engine: data.body.engine
        });

        const result = await report.save();
        return result;

    } catch (err) { return err; }
};

// Function to search for reports.
exports.getAll = async () => {
    try {
        const query = await Report.find();
        return query;

    }catch (err) { return err };
};

// Function to search for reports by id.
exports.getOne = async (id) => {
    try {
        const query = await Report.findById(id);
        return query;
    }catch (err) { return err};
    
};

// Function to update for reports by id.
exports.updateReport = async (id, data) => {
    try {
        const result = await Report.findByIdAndUpdate((id), {
            number: data.number,
            type: data.type,
            aircraft: data.aircraft,
            engine: data.engine
        }, {new: true});
        return result;
    }catch (err) { return err };
    
};

// Function to delete for reports by id.
exports.deleteReport = async (id) => {
    try{
        const result = await Report.findByIdAndRemove(id);
        return result;
    }catch(err) { return err };
}