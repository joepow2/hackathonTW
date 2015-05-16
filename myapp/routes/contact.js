var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'Gmail',                // mail 的伺服器, 這邊我用 Gmail
  auth:{                           // 當成 server 的 Gmail 帳號
    user:'nodejsdemo@gmail.com',
    pass:'20150516'
  }
});

router.post('/', function(req, res, next) {
	GuestName = req.body.name || 'NO_NAME';
	GuestEmail = req.body.email || 'NO_EMAIL';
	GuestMessage = req.body.message || 'NO_MESSAGE';

	var mailOptions = {
		from: 'nodejsdemo@gmail.com',
		to: GuestEmail,
		subject: 'Hello!',
		text: "Hi!" + GuestName + "，很高興收到您的來信!"
	}

	transporter.sendMail(mailOptions, function(err, info){
		if(err){
			console.error(err);
		}else{
			console.log(info);
			res.redirect('/');
		}
	});
});
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//res.send('respond with a resource');

module.exports = router;
