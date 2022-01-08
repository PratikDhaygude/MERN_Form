const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const jwt = require('jsonwebtoken');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    objectives: {
        type: String,
        required:true
    },
    scope: {
        type: String,
        required:true
    },
    plan: {
        type: String,
        required:true
    },
    deliverables: {
        type: String,
        required:true
    },
    incentives: {
        type: String,
        required:true
    },
    conditions: {
        type: String,
        required:true
    },
    tokens: [
        {
            token: {
                type: String,
                required:true
            }
        }
    ]
})

projectSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}
const User = mongoose.model('USER', projectSchema);

module.exports = User;