var api_key = ''; //ask me for key and domain
var domain = '';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

exports.sendApproverEmail = function(req, res){
	var approverEmail = req.body.approveremail;
	var approverName = req.body.approvername;
	var requesterName = req.body.requestername;
	var courseTitle = req.body.coursetitle;
	var courseDate = req.body.coursedate;

	var approverEmailData = {
		  from: 'ALMS admin <me@samples.mailgun.org>',
		  to: approverEmail,
		  subject: 'New approval request from AND Digital learning management system',
		  html: getApproverHtml(approverName, courseTitle, courseDate, requesterName)
	};

	sendMessage(approverEmailData, res);
};

exports.sendRequesterEmail = function(req, res){
	var requesterEmail = req.body.requesteremail;
	var requesterName = req.body.requestername;
	var approverName = req.body.approvername;
	var courseTitle = req.body.coursetitle;
	var courseDate = req.body.coursedate;

	var requesterEmailData = {
		  from: 'ALMS admin <me@samples.mailgun.org>',
		  to: requesterEmail,
		  subject: 'New approval request from AND Digital learning management system',
		  html: getRequesterHtml(requesterName, approverName, courseTitle, courseDate)
	};
	sendMessage(requesterEmailData, res);
};

var getApproverHtml = function(approver, courseTitle, courseDate, name){
	return `
			<p>Hi ` + approver + `,</p>
			<p>I would like to go on the following course: </p>
			<p style="font-weight:bold">` + courseTitle + `</p>
			<p style="font-weight:bold">Date: ` + courseDate + `</p>
			<p>Could you please approve my request by e-mailing Vera Hillmann: vhillmann@and.digital.</p>
			<p>Thank you,</p>
			<p>` + name + `.</p>`;
}

var getRequesterHtml = function(requester, approver, courseTitle, courseDate){
	return `
			<p>Hi ` + requester + `,</p>
			<p>You have sent a course request to ` + approver + ` for the following course: 
			<p style="font-weight:bold">` + courseTitle + `</p>
			<p style="font-weight:bold">Date: ` + courseDate + `</p>
			<p>This is not a confirmation, ` + approver + ` will need to approve your request. Once this is approved, Vera Hillman will send you a confirmation e-mail.
			<p>Thank you, </p>
			<p>Academy Learning Management System</p>`;
}

var sendMessage = function(data, res){
	mailgun.messages().send(data, function (error, body) {
		if(!error){
			res.status(200);
		}else{
			res.status(400);
		}
		res.send(body);
	  	console.log(body);
	});
}