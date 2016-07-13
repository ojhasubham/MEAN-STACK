/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var nodemailer = require('nodemailer');

// Get list of things
exports.index = function(req, res) {
  res.json([
  ]);
};

//console.log(req);
exports.sendEmail = function(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
        user: 'akashcom40@gmail.com', // Your email id
        pass: 'sattvabit.com' // Your password
    }
    })
;
//console.log(req);
    var mailOptions = {
        from: "Sattvabit.com<akashcom40@gmail.com>", // sender address
        to: "subhamojha<ojha.subham@gmail.com>", // list of receivers
        subject: 'Email Example', // Subject line

         html: '<div>Contact detail of visiter:-'+
                   
                   '<table>'+
                     '<tr>'+
                       '<td> Surname: </td>' +
                       '<td> '+ req.body.firstName +' </td>' +
                     '</tr>' +
                     '<tr>'+
                       '<td> Middle name: </td>' +
                       '<td> '+ req.body.middleName +' </td>' +
                     '</tr>' +
                     '<tr>'+
                       '<td> Last name: </td>' +
                       '<td> '+ req.body.lastName +' </td>' +
                     '</tr>' +
                     '<tr>'+
                       '<td> Country: </td>' +
                       '<td> '+ req.body.country +' </td>' +
                     '</tr>' +
                     '<tr>'+
                       '<td> Stae: </td>' +
                       '<td> '+ req.body.state +' </td>' +
                     '</tr>' +
                     '<tr>'+
                       '<td> Address: </td>' +
                       '<td> '+ req.body.address +' </td>' +
                     '</tr>' +
                     '<tr>'+
                       '<td> Postal code: </td>' +
                       '<td> '+ req.body.postalCode +' </td>' +
                     '</tr>' +
                     '<tr>'+
                       '<td> Fax: </td>' +
                       '<td> '+ req.body.fax +' </td>' +
                     '</tr>' +
                     '<tr>'+
                       '<td> Email: </td>' +
                       '<td> '+ req.body.email +' </td>' +
                     '</tr>' +
                     '<tr>'+
                       '<td> Message: </td>' +
                       '<td> '+ req.body.message +' </td>' +
                     '</tr>' +
                   '</table>' +
                   '</div>'
    }
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: error});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        }
    })
};