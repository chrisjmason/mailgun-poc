var mailcontroller = require('../controllers/mailcontroller.js');

module.exports = function (app) {
	
	app.get('/ping', function(req, res){
		res.send("All working!");
	});

	app.post('/sendapproveremail', mailcontroller.sendApproverEmail);

	app.post('/sendrequesteremail', mailcontroller.sendRequesterEmail);

};