const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://luis:luis@scrapping.w5sjz.mongodb.net/Scrapping?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})