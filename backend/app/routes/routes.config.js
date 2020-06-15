module.exports = (app) => {
    
    const reports = require('../controllers/reports.controller.js');
    app.post('/report', reports.create);
    app.get('/reports', reports.findAll);
    app.get('/report/:id', reports.findOne);
    app.put('/report/:id', reports.update);
    app.delete('/report/:id', reports.delete);

}