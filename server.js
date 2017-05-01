// Main initialize ========================================
var express         = require ("express");
var app             = express();
var bodyParser      = require("body-parser");
var path    = require("path");

var expressSanitizer= require("express-sanitizer");


var request         = require('request');
var townshipEmail  = require('township-email')

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer ());
app.use (express.static("public"));

app.set("view engine","ejs");
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));










// =====EMAIL SENDING SECTION================
var mail = townshipEmail({
  transport: process.env.EMAILDET,
 
  emails: {confirm:sender}
})


function sender (options) {
  return `<div>
  
   <p>*This message is from the contact page of Yomify.com. Kindly attend to it ASAP *</p>

    <p>Customer name:  ${options.name}</p>
    <p>Customer email:  ${options.email}</p>
    
    <p><b>Subject:  ${options.subject}</b></p>
    <p>Message:  ${options.message}</p>
    <p>*Bye*</p>
     </div>`
}


//=========END OF EMAIL CONFIG

//App unique data/routes



app.post("/contact", function(req,res){
    
    var name=req.query.name;
    var email=req.query.email;
    var message=req.query.message;
    var subject=req.query.subject;
    
    
     
                    mail.confirm({
                                  name:name,
                                 email:email,
                                  message:message,
                                  subject:subject,
                                  to:"your email"
                                }, function (err) {
                                  if (err){res.send(err);console.log(err);
                                }else { }})

});





app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html')); //path installation required
  //res.sendFile("../dist/index.html'");
});



 var port = process.env.PORT || '3000';
 
 //server listening ======================================
app.listen (port, process.env.IP, function(){
   console.log("The APP1  Server has Started!");
         });
         
//======================================================
