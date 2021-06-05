const User = require('../models/User');

module.exports = {
  async findAll(req, res){
      const users = await User.find();

      return res.json(users);
  },

  async findById(req, res){
    const {user_id} = req.params;
    
    const user = await User.findById(user_id);

    return res.json(user);
  },

  async insert(req, res){

    const { name, cpf, email, password } = req.body;

    const user = await User.create({
      name,
      cpf,
      email,
      password
    })

    return res.status(201).json(user);
  },

  async update(req, res){
    const {user_id} = req.params;
    const newUser = req.body;

    const user = await User.findByIdAndUpdate(user_id, newUser, {new: true});
    user.save();

    return res.status(200).json(user);
  },

  async delete(req, res){

    const {user_id} = req.params;
    
    await User.findByIdAndDelete(user_id);

    return res.status(204).json(user);
  },
}    