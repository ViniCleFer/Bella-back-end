const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');
const MedicalController = require('./controllers/MedicalController');
//const SessionController = require('./controllers/SessionController');
const DependentController = require('./controllers/DependentController');
const ProfileController = require('./controllers/ProfileController');
const ProgramController = require('./controllers/ProgramController');
const MedRecordController = require('./controllers/MedRecordController');
const TimeLineController = require('./controllers/TimeLineController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/users', upload.single('image'), UserController.store);
//routes.post('/sessions', SessionController.store);

routes.post('/medicals', upload.single('image'), MedicalController.store);

routes.post('/dependent', upload.single('image'), DependentController.store);
routes.get('/dependent/:user_id', DependentController.index);
routes.get('/dependents/:id', DependentController.show);

routes.post('/programs', upload.single('image'), ProgramController.store);
routes.get('/programs', ProgramController.index);
routes.get('/programs/:id', ProgramController.show);

routes.post('/program/:program_id/:user_id', ProfileController.store);
routes.get('/program/:user_id', ProfileController.index);

routes.post('/medical_record', MedRecordController.store);
routes.get('/medical_record/:user_id', MedRecordController.index);

routes.post('/timeline', TimeLineController.store);
routes.get('/timeline/:user_id', TimeLineController.index);

module.exports = routes;