const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
  },
  phoneNO: {
    type: Number,
    validate: {
        validator: function (value) {
            const phoneRegex = /^\d{10}$/;
            return phoneRegex.test(value.toString());
        },
        message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "Phone number is required"],
},
  city: {
    type: String,
    // required: true,
  },
  message: {
    type: String,
    // required: true,
  },
});

const Contact = mongoose.model('Contact', contactUsSchema);

module.exports = Contact;
