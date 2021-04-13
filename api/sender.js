const nodemailer = require("nodemailer");
let user = process.env.senderEmail || "";
let pass = process.env.senderPassword || "";

module.exports = async function sendEmail(body) {

	let {receiverEmail,senderName,subject,text}=body

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true, 
		auth: {user,pass},
	});

	return transporter
		.sendMail({
			from: `"${senderName}" <${user}>`, // sender address
			to: receiverEmail, // list of receivers
			subject, // Subject line
			text, // plain text body
			// html: "<b>Hello world?</b>", // html body
		})

}
