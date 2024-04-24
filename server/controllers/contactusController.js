const { model } = require('mongoose');
const Contact = require('../models/contactUsSchema');
const nodemailer = require('nodemailer');
const CsvParser=require('json2csv').Parser;

const postcontactus = async (req, res) => {

  try {
    const { username, email, message,phoneNO,city } = req.body;

    // Save the contact info to the database
    const userinfo = new Contact({ username, email, message,phoneNO,city });
    await userinfo.save();
    res.status(200).json({ message: "Successful"});
  
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err: err.message });
  }};

const getContactus = async (req, res) => {
  try {
    let users=[];
    const result = await Contact.find({});
    result.forEach((user)=>{
        const {_id,username,email,phoneNO,city,message}=user;
        users.push({_id,username,email,phoneNO,city,message});
    });

    const csvfields=['ID','UserName','Email','PhoneNo','City','Message'];
    const csvparser=new CsvParser({csvfields})
    const csvdata=csvparser.parse(users);

    res.setHeader("Content-type","text/csv");
    res.setHeader("Content-disposition","attachment:filename:ContactData.csv");

    // res.status(200).json({ message: "Successful", Contact: result }).end(csvdata);
    res.status(200).end(csvdata);
    // res.status(200).download(csvdata);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", err: err.message });
  }
};

module.exports = {postcontactus,getContactus};