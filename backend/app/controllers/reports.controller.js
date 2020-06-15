const repository = require('../repository/reports.repository');

// Controller for adding reports.
exports.create = async (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: 'Report content can not be empty...'
        });
    }

    await repository.insert(req)
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: `Error occurred while creating the Report: ${err.message}`
        });
    });
};

// Controller to search for reports.
exports.findAll = async (req, res) => {
    await repository.getAll()
    .then(reports => {
        res.send(reports);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving Reports...'
        });
    });
};

// Controller to search for reports by id.
exports.findOne = async (req, res) => {
    let reportId = req.params.id
    await repository.getOne(reportId)
    .then(report => {
        if(!report) {
            return res.status(404).send({
                message: `Report not found with id ${reportId}`
            });            
        }
        res.send(report);
    }).catch(() => {
        return res.status(500).send({
            message: 'Error retrieving Report'
        });
    });
};

// Controller to update for reports by id.
exports.update = async(req, res) => {
    let reportId = req.params.id
    await repository.updateReport(reportId, req.body)
    .then(report => {
        if(!report) {
            return res.status(404).send({
                message: `Report not found with id ${reportId}`
            });
        }
        res.send(report);
    }).catch(()=> {
  
        return res.status(500).send({
            message: 'Error updating Report...' 
        });
    });

};

// Controller to delete for reports by id.
exports.delete = async (req, res) => {
    let reportId = req.params.id
    await repository.deleteReport(reportId)
    .then(report => {
        if(!report) {
            return res.status(404).send({
                message: `Report not found with id ${reportId}`
            });
        }
        res.send({message: 'Report deleted successfully!'});
    }).catch(() => {
        return res.status(500).send({
            message: 'Could not delete Report'
        });
    });
};