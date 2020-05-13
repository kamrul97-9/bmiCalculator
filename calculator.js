//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res, next) => {
var num1 = Number(req.body.n1); // Number() convert string to number.
var num2 = Number(req.body.n2);
//var result = num1+num2;]
var result = num1 * num2;
 res.send(" The result of calculation is " + result);// res.send(result) gives me invalid code error(RangeError)
});

app.get('/bmicalculator', (req, res, next) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', (req, res, next) => {
  var weight = parseFloat(req.body.weight);//parseFloat() convert string to decimal number.
  var height = parseFloat(req.body.height);
  var bmi = weight/(height*height);
  //var bmi = weight/Math.pow(height, height);
  if(bmi<16) {
    return res.send("Your Body Mass Index is " + bmi + ", you are Severe Thinness");
  }
  if(bmi>=16 && bmi <=17){
    return res.send("Your Body Mass Index is " + bmi + ", you are Modarate Thinness");
  }
   if(bmi>17 && bmi <=18.5){
    return res.send("Your Body Mass Index is " + bmi + ", you are Mild Thinness");
  }
  if(bmi>18.5 && bmi <=25){
  return res.send("Your Body Mass Index is " + bmi + ", you are Normal");
  }
  if(bmi>25 && bmi <=30){
    return res.send("Your Body Mass Index is " + bmi + ", you are Overweight");
  }
  if(bmi>30 && bmi <=35){
    return res.send("Your Body Mass Index is " + bmi + ", you are Obese Class I");
  }
  if(bmi>35 && bmi <=40){
    return res.send("Your Body Mass Index is " + bmi + ", you are Obese Class II");
  }
  else{
    return res.send("You are out of ranges");
  }
});
// for Error [ERR_HTTP_HEADERS_SENT], I used 'return' before res.send... and fixed the error.
app.listen(3001, function(){
  console.log("The application is running on localhost:3001!");
});
