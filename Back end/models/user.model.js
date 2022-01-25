const mongoose =  require('mongoose')

const Schema = mongoose.Schema

const Usermodel = new Schema({
    username:{
        type: String,
        required: true,
        unique : true,
        trim : true,
        min : 3
    },
},
{
       timestamps :true
})

const Users  =mongoose.model('Users',Usermodel)

module.exports = Users;