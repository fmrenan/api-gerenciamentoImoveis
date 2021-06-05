require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const pwdCrypt = require('../utils/pwdCrypt');

module.exports = {
  async signIn(req, res){
    const { email, password } = req.body;

    const user = await User.findOne({email});
    const {_id, name} = user;

    if(user){
      if(pwdCrypt.compare(password, user.password)){
        const token = jwt.sign({ _id, name, email }, process.env.SECRET, {
          expiresIn: parseInt(process.env.EXPIRATION)
        });
        return res.status(200).json({ auth: true, token: token });
      }else{
        return res.status(400).json({ message: 'Invalid password' });
      }

    }else{
      res.status(400).json({message: 'User not found'})
    }
  }
}