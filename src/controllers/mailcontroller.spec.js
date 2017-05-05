var mailController = require('../controllers/mailcontroller.js');
var api_key = '';
var domain = '';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

//need to add tests

var fakeApproverEmailRequest = {
	body: {
		approveremail:"email@email.com",
		approvername:"Damien",
		requestername:"Roger",
		coursetitle:"Thai cuisine 101",
		coursedate:"19/05/2017"
	}
} 

describe('test test', function () {
	it("should be true", function(){
		expect(true).toBe(true);
	});
});

describe('send generic email', function () {

	beforeEach(function() {
	    
  	});

	it("should call mailgun when blank email route is hit", function() {
		
	});
});